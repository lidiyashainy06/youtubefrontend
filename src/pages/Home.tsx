import React, { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import { videoAPI, Video } from '../services/api';
import './Home.css';

const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await videoAPI.getAllVideos();
        if (fetchedVideos.length === 0) {
          // If no videos, seed the database
          await videoAPI.seedDatabase();
          const seededVideos = await videoAPI.getAllVideos();
          setVideos(seededVideos);
        } else {
          setVideos(fetchedVideos);
        }
      } catch (error) {
        console.error('Error loading videos:', error);
        // Fallback to mock data if API fails
        const mockVideos: Video[] = [
          {
            _id: '1',
            title: 'React Tutorial for Beginners',
            thumbnail: 'https://img.youtube.com/vi/SqcY0GlETPk/maxresdefault.jpg',
            channel: 'Programming with Mosh',
            views: 1200000,
            uploadDate: '2024-01-15',
            duration: '2:30:45'
          }
        ];
        setVideos(mockVideos);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div className="home loading">Loading videos...</div>;
  }

  return (
    <div className="home">
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;