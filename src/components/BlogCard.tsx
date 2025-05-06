import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogService';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.urn}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <p className="text-gray-600 mb-4 line-clamp-3">{blog.text}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Posted {blog.postedAt} ago</span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a5.5 5.5 0 017.778 0L10 6.343l-.95-.95a5.5 5.5 0 00-7.778 7.778L10 17.657l7.828-7.828a5.5 5.5 0 00-7.778-7.778L10 6.343l-.95-.95z" clipRule="evenodd" />
              </svg>
              {blog.likeCount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 