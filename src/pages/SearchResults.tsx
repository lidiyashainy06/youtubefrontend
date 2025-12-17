import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const allVideos: Video[] = [
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
        _id: '2',
        title: 'Full Stack Web Development Roadmap 2024',
        thumbnail: 'https://i.ytimg.com/vi/nu_pCVPKzTk/maxresdefault.jpg',
        channel: 'Dev Trends',
        views: 1800000,
        uploadDate: '2024-02-10',
        duration: '2:15:30'
      },
      {
        _id: '3',
        title: 'Building AI-Powered Web Applications with ChatGPT API',
        thumbnail: 'https://i.ytimg.com/vi/PyCqKaNTOfA/maxresdefault.jpg',
        channel: 'AI Web Dev',
        views: 950000,
        uploadDate: '2024-03-05',
        duration: '1:55:45'
      },
      {
        _id: '4',
        title: 'Modern Web Development Stack 2024 - Full Tutorial',
        thumbnail: 'https://i.ytimg.com/vi/cuHDQhDhvPE/maxresdefault.jpg',
        channel: 'Code Academy',
        views: 1200000,
        uploadDate: '2024-02-20',
        duration: '4:10:15'
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

    const filtered = allVideos.filter(video =>
      video.title.toLowerCase().includes(query.toLowerCase()) ||
      video.channel.toLowerCase().includes(query.toLowerCase())
    );
    
    setVideos(filtered);
  }, [query]);

  return (
    <div className="home">
      <h1 style={{ marginBottom: '20px', fontSize: '24px' }}>
        Search results for "{query}"
      </h1>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
      {videos.length === 0 && (
        <p style={{ color: '#aaa', textAlign: 'center', marginTop: '50px' }}>
          No videos found for "{query}"
        </p>
      )}
    </div>
  );
};

export default SearchResults;