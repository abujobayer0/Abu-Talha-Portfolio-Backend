import { z } from "zod";

const createBlogSchema = z.object({
  body: z.object({
    content: z.string().nonempty(),
    title: z.string().nonempty(),
    imageUrl: z.string().optional(),
  }),
});

const updateBlogSchema = z.object({
  body: z.object({
    content: z.string().optional(),
    title: z.string().optional(),
    imageUrl: z.string().optional(),
  }),
});

export const BlogsValidation = {
  createBlogSchema,
  updateBlogSchema,
};
// "content": "<p>🚀 <strong>Exploring Next.js 13: Parallel and Group Routes for Advanced Routing</strong> 🌐</p><p>Next.js 13 introduces some game-changing features with the <strong>App Router</strong>, including <strong>Parallel Routes</strong> and <strong>Group Routes</strong>. These features bring modularity, scalability, and clean URL structures to your applications.</p><p>🔹 <strong>Parallel Routes</strong></p><p>Render multiple parts of your app simultaneously—ideal for layouts with sidebars, modals, and dynamic content.</p><pre class=\"ql-syntax\" spellcheck=\"false\">tsx\n\nCopy code\n// Example: Rendering Sidebar and Content Simultaneously\n&lt;div className=\"container\"&gt;\n  &lt;aside&gt;{children.sidebar}&lt;/aside&gt;\n  &lt;main&gt;{children.content}&lt;/main&gt;\n&lt;/div&gt;\n</pre><p>🔹 <strong>Group Routes</strong></p><p>Organize your folder structure without affecting the URL. Perfect for grouping related pages while keeping URLs clean.</p><pre class=\"ql-syntax\" spellcheck=\"false\">bash\n\nCopy code\napp/\n├── (admin)\n│   ├── dashboard/page.tsx  // URL: /dashboard\n│   └── settings/page.tsx   // URL: /settings\n</pre><p>🔗 <strong>Combining Both</strong></p><p>Want to build something even more powerful? Combine Parallel and Group Routes to create advanced layouts for your dashboard or multi-view pages.</p><p>💡 <strong>Benefits</strong></p><p>✅ Parallel rendering for faster load times.</p><p>✅ Clean, logical folder structure.</p><p>✅ Scalable and maintainable applications.</p><p>I’ve been diving deep into these features and can't wait to use them in upcoming projects. If you're exploring these as well or have tips to share, let’s discuss in the comments! 👇</p><p>#Nextjs #WebDevelopment #React #FrontendDevelopment #Programming</p>",
