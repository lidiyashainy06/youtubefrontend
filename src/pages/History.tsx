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

const History: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const historyVideos: Video[] = [
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
        _id: '3',
        title: 'Building AI-Powered Web Applications with ChatGPT API',
        thumbnail: 'https://i.ytimg.com/vi/PyCqKaNTOfA/maxresdefault.jpg',
        channel: 'AI Web Dev',
        views: 950000,
        uploadDate: '2024-03-05',
        duration: '1:55:45'
      }
    ];
    setVideos(historyVideos);
  }, []);

  return (
    <div className="home">
      <h1 style={{ marginBottom: '20px', fontSize: '24px' }}>Watch History</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default History;