

export interface Step {
    id: number
    phase: string
    content: string
    actor: "browser" | "backend" | "razorpay"
    code?: string
    description?: string
  }
export const steps: Step[] = [
    {
      id: 1,
      phase: "create",
      content: 'User fills form & clicks "Pay"',
      actor: "browser",
      code: `// Frontend form submission
  const handlePayment = async (formData) => {
    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: formData.amount,
        currency: 'INR',
        customerInfo: formData.customerInfo
      })
    });
    
    const { orderId } = await response.json();
    initializeRazorpay(orderId);
  };`,
      description: "User submits the payment form which triggers the order creation process",
    },
    {
      id: 2,
      phase: "create",
      content: "Receives POST /api/create-order",
      actor: "backend",
      code: `// API Route Handler
  export async function POST(request: Request) {
    const { amount, currency, customerInfo } = await request.json();
    
    try {
      // Create order with Razorpay
      const order = await razorpay.orders.create({
        amount: amount * 100, // Convert to paise
        currency: currency,
        receipt: \`receipt_\${Date.now()}\`
      });
      
      return Response.json({ orderId: order.id });
    } catch (error) {
      return Response.json({ error: 'Order creation failed' }, { status: 500 });
    }
  }`,
      description: "Backend receives the order creation request and processes it",
    },
    {
      id: 3,
      phase: "create",
      content: "Sends Create Order API Call",
      actor: "backend",
      code: `// Razorpay Order Creation
  const Razorpay = require('razorpay');
  
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  
  const order = await razorpay.orders.create({
    amount: amount * 100, // Amount in paise
    currency: 'INR',
    receipt: \`receipt_\${Date.now()}\`,
    notes: {
      customer_id: customerInfo.id
    }
  });`,
      description: "Backend makes API call to Razorpay to create a new order",
    },
    {
      id: 4,
      phase: "create",
      content: "Returns { order_id }",
      actor: "razorpay",
      code: `// Razorpay API Response
  {
    "id": "order_IluGWxBm9U8zJ8",
    "entity": "order",
    "amount": 50000,
    "amount_paid": 0,
    "amount_due": 50000,
    "currency": "INR",
    "receipt": "receipt_1234567890",
    "status": "created",
    "attempts": 0,
    "notes": {
      "customer_id": "cust_123"
    },
    "created_at": 1582628071
  }`,
      description: "Razorpay returns the created order details including the order ID",
    },
    {
      id: 5,
      phase: "create",
      content: "Creates 'pending' record in DB",
      actor: "backend",
      code: `// Database Record Creation
  const paymentRecord = await db.payments.create({
    data: {
      orderId: order.id,
      amount: amount,
      currency: currency,
      status: 'pending',
      customerInfo: customerInfo,
      createdAt: new Date(),
      razorpayOrderId: order.id
    }
  });
  
  console.log('Payment record created:', paymentRecord.id);`,
      description: "Backend creates a pending payment record in the database",
    },
    {
      id: 6,
      phase: "create",
      content: "Receives { order_id }",
      actor: "browser",
      code: `// Frontend receives order ID
  const response = await fetch('/api/create-order', {
    method: 'POST',
    body: JSON.stringify(orderData)
  });
  
  const { orderId } = await response.json();
  
  // Initialize Razorpay with the order ID
  initializeRazorpay(orderId);`,
      description: "Frontend receives the order ID and prepares to initialize Razorpay",
    },
    {
      id: 7,
      phase: "pay",
      content: "Initializes Razorpay Checkout",
      actor: "browser",
      code: `// Razorpay Checkout Initialization
  const initializeRazorpay = (orderId) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount * 100,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Payment for Order',
      order_id: orderId,
      handler: function (response) {
        // Payment success callback
        verifyPayment(response);
      },
      prefill: {
        name: customerInfo.name,
        email: customerInfo.email,
        contact: customerInfo.phone
      },
      theme: {
        color: '#3399cc'
      }
    };
    
    const rzp = new window.Razorpay(options);
    rzp.open();
  };`,
      description: "Frontend initializes Razorpay checkout modal with order details",
    },
    {
      id: 8,
      phase: "pay",
      content: "User completes payment via Modal",
      actor: "razorpay",
      code: `// Razorpay Modal Payment Process
  // User enters payment details in Razorpay modal:
  // - Card number, CVV, expiry
  // - UPI ID
  // - Net banking details
  // - Wallet selection
  
  // On successful payment, Razorpay returns:
  {
    "razorpay_payment_id": "pay_IH4NVgf4Dreq1l",
    "razorpay_order_id": "order_IluGWxBm9U8zJ8",
    "razorpay_signature": "0d4e745a1838664ad6c9c9902212a32d627d68e917290b0ad5f08ff4561bc50f"
  }`,
      description: "User completes payment through Razorpay modal interface",
    },
    {
      id: 9,
      phase: "confirm",
      content: "(Async) After payment, sends webhook",
      actor: "razorpay",
      code: `// Razorpay Webhook Payload
  {
    "entity": "event",
    "account_id": "acc_BFQ7uQEaa30GJy",
    "event": "order.paid",
    "contains": ["payment", "order"],
    "payload": {
      "payment": {
        "entity": {
          "id": "pay_IH4NVgf4Dreq1l",
          "amount": 50000,
          "currency": "INR",
          "status": "captured",
          "order_id": "order_IluGWxBm9U8zJ8",
          "method": "card"
        }
      },
      "order": {
        "entity": {
          "id": "order_IluGWxBm9U8zJ8",
          "status": "paid"
        }
      }
    },
    "created_at": 1582628071
  }`,
      description: "Razorpay sends webhook notification about successful payment",
    },
    {
      id: 10,
      phase: "confirm",
      content: "Receives POST Webhook (event: 'order.paid')",
      actor: "backend",
      code: `// Webhook Handler
  export async function POST(request: Request) {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');
    
    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
      .update(body)
      .digest('hex');
    
    if (signature !== expectedSignature) {
      return Response.json({ error: 'Invalid signature' }, { status: 400 });
    }
    
    const event = JSON.parse(body);
    
    if (event.event === 'order.paid') {
      await handleOrderPaid(event.payload);
    }
    
    return Response.json({ status: 'ok' });
  }`,
      description: "Backend receives and processes the webhook from Razorpay",
    },
    {
      id: 11,
      phase: "confirm",
      content: "Verifies signature & updates DB record to 'completed'",
      actor: "backend",
      code: `// Webhook Processing
  const handleOrderPaid = async (payload) => {
    const { payment, order } = payload;
    
    // Update payment record in database
    await db.payments.update({
      where: {
        razorpayOrderId: order.entity.id
      },
      data: {
        status: 'completed',
        paymentId: payment.entity.id,
        paidAt: new Date(),
        paymentMethod: payment.entity.method,
        razorpaySignature: payment.entity.id // Store for verification
      }
    });
    
    // Send confirmation email
    await sendPaymentConfirmationEmail(order.entity.id);
    
    console.log(\`Payment completed for order: \${order.entity.id}\`);
  };`,
      description: "Backend verifies webhook signature and updates payment status to completed",
    },
    {
      id: 12,
      phase: "verify",
      content: "Redirected to /thank-you page, then polls for status",
      actor: "browser",
      code: `// Thank You Page with Status Polling
  const ThankYouPage = ({ orderId }) => {
    const [paymentStatus, setPaymentStatus] = useState('pending');
    
    useEffect(() => {
      const pollPaymentStatus = async () => {
        try {
          const response = await fetch(\`/api/payment-status/\${orderId}\`);
          const { status } = await response.json();
          
          setPaymentStatus(status);
          
          if (status === 'pending') {
            // Poll again after 2 seconds
            setTimeout(pollPaymentStatus, 2000);
          }
        } catch (error) {
          console.error('Error polling payment status:', error);
        }
      };
      
      pollPaymentStatus();
    }, [orderId]);
    
    return (
      <div>
        {paymentStatus === 'pending' && <div>Processing payment...</div>}
        {paymentStatus === 'completed' && <div>Payment successful!</div>}
      </div>
    );
  };`,
      description: "User is redirected to thank you page which polls for payment status",
    },
    {
      id: 13,
      phase: "verify",
      content: "Receives poll & returns final status",
      actor: "backend",
      code: `// Payment Status API
  export async function GET(
    request: Request,
    { params }: { params: { orderId: string } }
  ) {
    const { orderId } = params;
    
    try {
      const payment = await db.payments.findUnique({
        where: {
          razorpayOrderId: orderId
        }
      });
      
      if (!payment) {
        return Response.json({ error: 'Payment not found' }, { status: 404 });
      }
      
      return Response.json({
        status: payment.status,
        paymentId: payment.paymentId,
        amount: payment.amount,
        paidAt: payment.paidAt
      });
    } catch (error) {
      return Response.json({ error: 'Server error' }, { status: 500 });
    }
  }`,
      description: "Backend API returns the current payment status when polled",
    },
    {
      id: 14,
      phase: "verify",
      content: "Receives 'completed' status & displays \"Payment Successful\"",
      actor: "browser",
      code: `// Payment Success Display
  const PaymentSuccess = ({ paymentData }) => {
    return (
      <div className="text-center p-8">
        <div className="mb-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-4">
          Your payment has been processed successfully.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p><strong>Payment ID:</strong> {paymentData.paymentId}</p>
          <p><strong>Amount:</strong> ₹{paymentData.amount}</p>
          <p><strong>Date:</strong> {new Date(paymentData.paidAt).toLocaleString()}</p>
        </div>
      </div>
    );
  };`,
      description: "Frontend displays payment success message with transaction details",
    },
  ]
  