import { getBlogPostById } from '@/data/blogService';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = await getBlogPostById(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="bg-white rounded-lg shadow-md p-8">
        {blog.imageUrl && (
          <div className="mb-8">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>{blog.author}</span>
          <span>•</span>
          <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
        </div>
        <div className="prose max-w-none">
          <p className="whitespace-pre-line">{blog.content}</p>
        </div>
      </article>
    </div>
  );
} 