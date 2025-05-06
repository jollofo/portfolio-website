import { getBlogPosts } from '@/data/blogService';
import BlogCard from '@/components/BlogCard';

export default async function BlogPage() {
  const blogs = await getBlogPosts(100); // Fetch all posts

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">All Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      </div>
    </div>
  );
} 