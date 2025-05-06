import { getBlogPostByURL } from "@/data/blogService";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const blog = await getBlogPostByURL(
    `https://www.linkedin.com/feed/update/urn:li:activity:${resolvedParams.id}`
  );

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center py-8 max-w-4xl">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back to Home
        </Link>
        <article className="bg-[#050505] rounded-lg shadow-md p-8 border border-gray-800">
          <div className="flex items-center gap-4 text-gray-400 mb-8">
            <span>Posted {blog.postedAt} ago</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a5.5 5.5 0 017.778 0L10 6.343l-.95-.95a5.5 5.5 0 00-7.778 7.778L10 17.657l7.828-7.828a5.5 5.5 0 00-7.778-7.778L10 6.343l-.95-.95z" clipRule="evenodd" />
              </svg>
              {blog.likeCount}
            </span>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="whitespace-pre-line text-gray-300">{blog.text}</p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-800">
            <a
              href={blog.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              View original post →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
