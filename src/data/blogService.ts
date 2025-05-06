import axios from 'axios';

const RAPID_API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY;
const RAPID_API_HOST = 'linkedin-data-api.p.rapidapi.com';

const blogApi = axios.create({
  baseURL: 'https://linkedin-data-api.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': RAPID_API_HOST,
  },
});

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
}

export const getBlogPosts = async (limit: number = 3): Promise<BlogPost[]> => {
  try {
    const response = await blogApi.get('/blog-posts', {
      params: { limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const response = await blogApi.get(`/blog-posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}; 