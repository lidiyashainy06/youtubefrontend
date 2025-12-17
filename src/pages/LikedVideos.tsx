import React, { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import './Home.css';

interface Video {
  _id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  uploadDate: string;
  duration: string;
}

const LikedVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const likedVideos: Video[] = [
      {
        _id: '1',
        title: 'AI Development Complete Guide 2024 - Machine Learning & Deep Learning',
        thumbnail: 'https://i.ytimg.com/vi/aircAruvnKk/maxresdefault.jpg',
        channel: 'AI Academy',
        views: 2500000,
        uploadDate: '2024-01-15',
        duration: '3:45:20'
      },
      {
        _id: '5',
        title: 'AI in Web Development - Future Trends and Tools',
        thumbnail: 'https://i.ytimg.com/vi/JMLsJJuuoJw/maxresdefault.jpg',
        channel: 'Tech Future',
        views: 750000,
        uploadDate: '2024-03-12',
        duration: '1:30:25'
      }
    ];
    setVideos(likedVideos);
  }, []);

  return (
    <div className="home">
      <h1 style={{ marginBottom: '20px', fontSize: '24px' }}>Liked Videos</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default LikedVideos;