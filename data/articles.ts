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
    image: "/articles/redis-performance.jpg",
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
      <pre><code>async function enqueue(data) {
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
    image: "/articles/express-compression.jpg",
    slug: "express-compression-best-practices",
    embedurl: `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7319208983615918080`,
    content: `
      <p><strong>Author:</strong> Anuj Kumar — CS Student @AKTU 🎓 | Full Stack Developer 💻 | MERN, NextJs, Docker, Kubernetes, Redux, WebSocket, PostgreSQL, TypeScript, Prisma 🚀</p>

      <h2>🚀 Why Use Compression in Express?</h2>
      <p>Compression boosts performance by reducing payload sizes. One of the easiest ways to implement this is using the <code>compression</code> middleware in Express.</p>

      <h3>🧪 Example: Basic GZIP Compression</h3>
      <pre><code>const compression = require('compression');
const express = require('express');
const app = express();

app.use(compression());</code></pre>

      <h2>🧠 Enter Brotli: Better Than GZIP</h2>
      <p>Brotli is a modern compression algorithm developed by Google that provides better compression ratios than GZIP. It uses LZ77, Huffman coding, and 2nd-order context modeling to reduce file size efficiently.</p>

      <h3>⚙️ Advanced Compression Setup</h3>
      <pre><code>app.use(compression({
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
}</code></pre>

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