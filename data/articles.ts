import { Article } from '@/types/article';

export const articles: Article[] = [
  {
    id: "1",
    title: "Boost Your Web App Performance with Redis",
    description:
      "Redis isn't just a cache – it's your app's performance booster. Learn how Redis can handle session management, real-time Pub/Sub, queuing, and intelligent caching patterns like Cache-Aside and Write-Behind.",
    date: "2025-04-30",
    readTime: "8 min read",
    category: "Web Development",
    image: "data:image/png;base64,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",
    slug: "redis-performance",
    embedurl: `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7322701550118719488`,
    content: `
      <p>Imagine you cook daily, but your essential containers are placed on high shelves, making them hard to reach. To work faster, you move them closer to your workspace.</p>
      <p><strong>Redis</strong> works the same way — it stores frequently accessed data closer to your app using fast in-memory storage.</p>
      
      <h2>🔥 Redis Superpowers</h2>
      <ul>
        <li><strong>Session Management:</strong> Store user sessions for scalability and performance.</li>
        <li><strong>Pub/Sub Systems:</strong> Enable real-time communication for chat, alerts, and events.</li>
        <li><strong>Queues:</strong> Manage background tasks with push/pop functionality.</li>
        <li><strong>Caching:</strong> Avoid expensive DB calls with patterns like Cache-Aside and Write-Through.</li>
      </ul>

      <h3>🗂 Session Management with Redis</h3>
      <pre><code>app.use(session({
  store: new RedisStore({ client }),
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));</code></pre>

      <h3>📢 Real-Time Pub/Sub</h3>
      <p>Use Redis for chat systems or live notifications by leveraging its Pub/Sub features.</p>

      <h3>📋 Queues: Task Scheduling</h3>
      <pre class="w-full" ><code class=" overflow-x-auto" >async function enqueue(data) {
  await redis.lpush('myQueue', JSON.stringify(data));
}

async function dequeue() {
  const data = await redis.rpop('myQueue');
  return data ? JSON.parse(data) : null;
}</code></pre>

      <h3>⚡ Caching Patterns</h3>
      <ul>
        <li><strong>Cache-Aside:</strong> Check cache first, fallback to DB, then populate cache.</li>
        <li><strong>Read-Through:</strong> Cache fetches data on its own when key is missing.</li>
        <li><strong>Write-Through:</strong> Every write goes to both DB and cache.</li>
        <li><strong>Write-Behind:</strong> Write to cache first, then DB asynchronously.</li>
      </ul>

      <h3>🚀 Example: Cache-Aside with Redis</h3>
      <pre><code>async function getOrSetCache(key, fetchFunction) {
  const cachedData = await redisClient.get(key);
  if (cachedData) {
    console.log('Cache hit');
    return JSON.parse(cachedData);
  }
  console.log('Cache miss');
  const freshData = await fetchFunction();
  await redisClient.set(key, JSON.stringify(freshData), { EX: 3600 });
  return freshData;
}</code></pre>

      <h3>📦 Use It in Your App</h3>
      <pre><code>app.get('/api/data', async (req, res) => {
  const data = await getOrSetCache('myData', async () => {
    return { message: 'Hello from database!' };
  });
  res.json(data);
});</code></pre>

      <p><em>Level up your backend architecture by leveraging Redis where it matters most!</em></p>
    `
  },
  {
    id: "2",
    title: "Performance Based Best Practices for Express Apps",
    description: "Improve performance in Express apps with compression techniques like GZIP and Brotli. Learn how to apply filters, avoid compressing errors, and make your apps faster and more reliable.",
    date: "2025-04-19",
    readTime: "7 min read",
    category: "Backend Development",
    image: "https://plus.unsplash.com/premium_photo-1686653830755-c455c730ad92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXhwcmVzcy5qc3xlbnwwfHwwfHx8MA%3D%3D",
    slug: "express-compression-best-practices",
    embedurl: `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7319208983615918080`,
    content: `
      <p><strong>Author:</strong> Anuj Kumar — CS Student @AKTU 🎓 | Full Stack Developer 💻 | MERN, NextJs, Docker, Kubernetes, Redux, WebSocket, PostgreSQL, TypeScript, Prisma 🚀</p>

      <h2>🚀 Why Use Compression in Express?</h2>
      <p>Compression boosts performance by reducing payload sizes. One of the easiest ways to implement this is using the <code>compression</code> middleware in Express.</p>

      <h3>🧪 Example: Basic GZIP Compression</h3>
      <pre>
      <code>const compression = require('compression');
          const express = require('express');
          const app = express();
          app.use(compression());
        </code>
      </pre>

      <h2>🧠 Enter Brotli: Better Than GZIP</h2>
      <p>Brotli is a modern compression algorithm developed by Google that provides better compression ratios than GZIP. It uses LZ77, Huffman coding, and 2nd-order context modeling to reduce file size efficiently.</p>

      <h3>⚙️ Advanced Compression Setup</h3>
      <pre>
        <code>
        app.use(compression({
            br: { quality: 11 }, // Enable Brotli compression with max quality
            filter: shouldCompress,
            threshold: 1024, // Compress only if body is > 1KB
            memLevel: 9 // Max memory level for zlib
          }));

            function shouldCompress(req, res) {
              if (req.headers['x-no-compression']) {
                return false;
              }
    return compression.filter(req, res); // Use default filter
          }
        </code>
      </pre>

      <h2>🔍 Internals: Why It Works</h2>
      <ul>
        <li><code>req.headers['x-no-compression']</code>: Skips compression if header is present.</li>
        <li><code>threshold</code>: Only compress responses over a certain size.</li>
        <li><code>filter</code>: Ensures only compressible content types are compressed.</li>
      </ul>

      <h3>🛑 Don’t Compress Error Responses</h3>
      <p>Error messages (like 404 or 500) are usually small and don't benefit from compression.</p>
      <pre><code>app.use((err, req, res, next) => {
  res.setHeader('Content-Encoding', 'identity');
  res.status(500).send('Internal Server Error');
});</code></pre>

      <h3>🎯 Best Practice: Compress Only Compressible Content</h3>
      <pre><code>app.use(compression({
  filter: (req, res) => {
    const type = res.getHeader('Content-Type') || '';
    return /json|text|javascript|css|html/.test(type);
  }
}));</code></pre>

      <p><em>These tips can greatly enhance response speed and reduce bandwidth. Use them smartly and test your performance!</em></p>
    `
  }
]; 