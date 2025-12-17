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

const Subscriptions: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const subscriptionVideos: Video[] = [
      {
        _id: '11',
        title: 'Building a Full Stack App with MERN',
        thumbnail: 'https://img.youtube.com/vi/7CqJlxBYj-M/maxresdefault.jpg',
        channel: 'Programming with Mosh',
        views: 680000,
        uploadDate: '2023-08-20',
        duration: '4:15:30'
      },
      {
        _id: '12',
        title: 'Advanced React Patterns',
        thumbnail: 'https://img.youtube.com/vi/YM-uykVfq_E/maxresdefault.jpg',
        channel: 'Academind',
        views: 420000,
        uploadDate: '2023-08-25',
        duration: '2:45:20'
      },
      {
        _id: '13',
        title: 'GraphQL vs REST API',
        thumbnail: 'https://img.youtube.com/vi/yWzKJPw_VzM/maxresdefault.jpg',
        channel: 'Traversy Media',
        views: 350000,
        uploadDate: '2023-09-01',
        duration: '35:45'
      }
    ];
    setVideos(subscriptionVideos);
  }, []);

  return (
    <div className="home">
      <h1 style={{ marginBottom: '20px', fontSize: '24px' }}>Subscriptions</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;