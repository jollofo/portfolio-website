import axios from "axios";

// API credentials (replace with your actual key or use environment variables)
const RAPID_API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY;
const RAPID_API_HOST = "linkedin-data-api.p.rapidapi.com";

// Create an axios instance with default headers
const blogApi = axios.create({
  headers: {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": RAPID_API_HOST,
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

// Fetches blog posts for a specific LinkedIn username
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await blogApi.get(
      "https://linkedin-data-api.p.rapidapi.com/get-profile-posts?username=jamesmuguiyi"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

// Fetches a single blog post by its URL
export const getBlogPostByURL = async (
  url: string
): Promise<BlogPost | null> => {
  try {
    const response = await blogApi.get(
      `https://linkedin-data-api.p.rapidapi.com/get-post?url=${encodeURIComponent(url)}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};
