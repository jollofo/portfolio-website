import Link from 'next/link';
import { BlogPost } from '@/data/blogService';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {blog.imageUrl && (
          <div className="h-48 w-full relative">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{blog.author}</span>
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 