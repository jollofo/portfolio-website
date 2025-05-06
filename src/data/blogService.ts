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
  urn: string;
  postUrl: string;
  postedAt: string;
  text: string;
  likeCount: number;
  shareUrl: string;
}

export const getBlogPosts = async (limit: number = 3): Promise<BlogPost[]> => {
  try {
    const response = await blogApi.get('/get-profile-posts?username=jamesmuguiyi', {
      params: { limit },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getBlogPostByURL = async (url: string): Promise<BlogPost | null> => {
  try {
    const response = await blogApi.get(`/get-post?url=${url}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}; 