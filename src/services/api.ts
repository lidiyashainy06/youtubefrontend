import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Video {
  _id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  uploadDate: string;
  duration: string;
  description?: string;
  likes?: number;
  dislikes?: number;
  category?: string;
  videoUrl?: string;
}

export const videoAPI = {
  getAllVideos: async (): Promise<Video[]> => {
    try {
      const response = await api.get('/videos');
      return response.data;
    } catch (error) {
      console.error('Error fetching videos:', error);
      return [];
    }
  },

  getTrendingVideos: async (): Promise<Video[]> => {
    try {
      const response = await api.get('/videos/trending');
      return response.data;
    } catch (error) {
      console.error('Error fetching trending videos:', error);
      return [];
    }
  },

  getVideoById: async (id: string): Promise<Video | null> => {
    try {
      const response = await api.get(`/videos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching video:', error);
      return null;
    }
  },

  createVideo: async (videoData: Omit<Video, '_id'>): Promise<Video | null> => {
    try {
      const response = await api.post('/videos', videoData);
      return response.data;
    } catch (error) {
      console.error('Error creating video:', error);
      return null;
    }
  },

  seedDatabase: async (): Promise<boolean> => {
    try {
      await api.post('/seed');
      return true;
    } catch (error) {
      console.error('Error seeding database:', error);
      return false;
    }
  },
};

export default api;