const newLetterTemplate = (email: string) => {

    const name = email.split("@")[0];
    return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>Newsletter Confirmation</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!--[if mso]>
    <style>
        * { font-family: sans-serif !important; }
    </style>
    <![endif]-->
    
    <!--[if !mso]><!-->
    <style>
        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important; }
    </style>
    <!--<![endif]-->
    
    <style>
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            background: #f8fafc;
        }
        
        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }
        
        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }
        
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        
        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }
        
        img {
            -ms-interpolation-mode: bicubic;
        }
        
        a {
            text-decoration: none;
        }
        
        *[x-apple-data-detectors],
        .unstyle-auto-detected-links *,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }
        
        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }
        
        .im {
            color: inherit !important;
        }
        
        img.g-img + div {
            display: none !important;
        }
        
        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u ~ div .email-container {
                min-width: 320px !important;
            }
        }
        
        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u ~ div .email-container {
                min-width: 375px !important;
            }
        }
        
        @media only screen and (min-device-width: 414px) {
            u ~ div .email-container {
                min-width: 414px !important;
            }
        }
    </style>
    
    <style>
        .primary-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 8px;
            color: #ffffff;
            display: inline-block;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
            text-align: center;
            text-decoration: none;
            width: 200px;
            padding: 14px 28px;
            box-shadow: 0 4px 15px 0 rgba(102, 126, 234, 0.3);
        }
        
        .card {
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        @media screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: auto !important;
            }
            
            .fluid {
                max-width: 100% !important;
                height: auto !important;
                margin-left: auto !important;
                margin-right: auto !important;
            }
            
            .stack-column,
            .stack-column-center {
                display: block !important;
                width: 100% !important;
                max-width: 100% !important;
                direction: ltr !important;
            }
            
            .stack-column-center {
                text-align: center !important;
            }
            
            .center-on-narrow {
                text-align: center !important;
                display: block !important;
                margin-left: auto !important;
                margin-right: auto !important;
                float: none !important;
            }
            
            table.center-on-narrow {
                display: inline-block !important;
            }
        }
    </style>
</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f8fafc;">
    <center style="width: 100%; background-color: #f8fafc;">
        <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc;">
        <tr>
        <td>
        <![endif]-->
        
        <!-- Visually Hidden Preheader Text -->
        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
            Welcome to our newsletter! Your subscription has been confirmed.
        </div>
        
        <!-- Create white space after the desired preview text so email clients don't pull other distracting text into the inbox preview. -->
        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
            &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>
        
        <!-- Email Body -->
        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: auto;" class="email-container">
            
            <!-- Header Spacer -->
            <tr>
                <td style="padding: 40px 0; text-align: center;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="text-align: center;">
                                <!-- Logo -->
                                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 60px; height: 60px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                                    <div style="color: #ffffff; font-size: 24px; font-weight: 700; font-family: 'Inter', sans-serif;">P</div>
                                </div>
                                
                                <!-- Brand Name -->
                                <div style="color: #1e293b; font-size: 24px; font-weight: 700; font-family: 'Inter', sans-serif; margin: 0;">
                                    CVANUJ.VERCEL.APP
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <!-- Main Content -->
            <tr>
                <td style="padding: 0 40px;">
                    <div class="card" style="padding: 48px; text-align: center;">
                        
                        <!-- Success Icon -->
                        <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 32px;">
                            <div style="color: #ffffff; font-size: 32px; font-weight: 700;">✓</div>
                        </div>
                        
                        <!-- Main Heading -->
                        <h1 style="margin: 0 0 16px 0; color: #1e293b; font-size: 32px; font-weight: 700; line-height: 1.2; font-family: 'Inter', sans-serif;">
                            Welcome ${name}!
                        </h1>
                        
                        <!-- Subheading -->
                        <p style="margin: 0 0 32px 0; color: #64748b; font-size: 18px; line-height: 1.6; font-family: 'Inter', sans-serif;">
                            Your subscription to our newsletter has been confirmed successfully.
                        </p>
                        
                        <!-- Body Text -->
                        <p style="margin: 0 0 32px 0; color: #475569; font-size: 16px; line-height: 1.6; font-family: 'Inter', sans-serif;">
                            Thank you for joining our community! You'll now receive our latest updates, insights, and exclusive content directly in your inbox. We're excited to share our journey with you.
                        </p>
                        
                        <!-- CTA Button -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                            <tr>
                                <td>
                                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}" class="primary-button" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: #ffffff; display: inline-block; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; line-height: 20px; text-align: center; text-decoration: none; padding: 14px 28px; box-shadow: 0 4px 15px 0 rgba(102, 126, 234, 0.3);">
                                        Visit Our Website
                                    </a>
                                </td>
                            </tr>
                        </table>
                        
                        <!-- Additional Info -->
                        <div style="margin-top: 40px; padding-top: 32px; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 16px 0; color: #64748b; font-size: 14px; line-height: 1.5; font-family: 'Inter', sans-serif;">
                                <strong>What to expect:</strong>
                            </p>
                            <ul style="margin: 0; padding: 0; list-style: none; color: #64748b; font-size: 14px; line-height: 1.6; font-family: 'Inter', sans-serif;">
                                <li style="margin-bottom: 8px;">📧 Weekly newsletter with curated content</li>
                                <li style="margin-bottom: 8px;">🎯 Exclusive insights and tips</li>
                                <li style="margin-bottom: 8px;">🚀 Early access to new features</li>
                                <li>💬 Special offers and announcements</li>
                            </ul>
                        </div>
                        
                    </div>
                </td>
            </tr>
            
            <!-- Footer -->
            <tr>
                <td style="padding: 40px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="text-align: center;">
                                
                                <!-- Social Links -->
                                <div style="margin-bottom: 24px;">
                                    <a href="https://github.com/Anujkumarsagar" style="display: inline-block; margin: 0 12px; text-decoration: none;">
                                        <div style="background: #1da1f2; width: 40px; height: 40px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">
                                            <span style="color: #ffffff; font-size: 16px;">GithHub</span>
                                        </div>
                                    </a>
                                    <a href="https://linkedin.com/in/anujkumarsagar" style="display: inline-block; margin: 0 12px; text-decoration: none;">
                                        <div style="background: #0077b5; width: 40px; height: 40px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">
                                            <span style="color: #ffffff; font-size: 16px;">in</span>
                                        </div>
                                    </a>
                                    <a href="mailto:anujkumarsagar62@gmail.com" style="display: inline-block; margin: 0 12px; text-decoration: none;">
                                        <div style="background: #333; width: 40px; height: 40px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">
                                            <span style="color: #ffffff; font-size: 16px;">@</span>
                                        </div>
                                    </a>
                                </div>
                                
                                <!-- Contact Info -->
                                <p style="margin: 0 0 16px 0; color: #64748b; font-size: 14px; line-height: 1.5; font-family: 'Inter', sans-serif;">
                                    Contact<br>
                                    <a href="mailto:anujkumarsagar62@gmail.com" style="color: #667eea; text-decoration: none;">samajseva62@gmail.com</a>
                                </p>
                                
                                <!-- Unsubscribe -->
                                <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.5; font-family: 'Inter', sans-serif;">
                                    You received this email because you subscribed to our newsletter.<br>
                                </p>
                                
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
        </table>
        
        <!--[if mso | IE]>
        </td>
        </tr>
        </table>
        <![endif]-->
    </center>
</body>
</html>
`}


const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>New Contact Message</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        <div style="background: #30cfd0; background: linear-gradient(90deg, #30cfd0 0%, #c43ad6 100%); padding: 20px; color:white">
          <h2>🚀 New Message Received</h2>
        </div>
  
        <div style="padding: 20px;">
          <p><strong>Name:</strong> {{name}}</p>
          <p><strong>Email:</strong> {{email}}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color:#f2f2f2; padding:10px; border-radius:5px;">
            {{message}}
          </p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:{{email}}" style="background-color: #c43ad6; color: #ffffff; padding: 12px 20px; border-radius: 5px; text-decoration: none; display: inline-block;">Reply Now</a>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;

  export { newLetterTemplate, htmlTemplate };