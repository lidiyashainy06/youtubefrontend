import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { History, Clock, ThumbsUp, PlaySquare, Download } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import './Library.css';

interface Video {
  _id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  uploadDate: string;
  duration: string;
}

const Library: React.FC = () => {
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
      },
      {
        _id: '6',
        title: 'Full Stack AI Development with Python and React',
        thumbnail: 'https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg',
        channel: 'AI Developers',
        views: 680000,
        uploadDate: '2024-03-18',
        duration: '2:45:30'
      }
    ];
    setVideos(allVideos);
  }, []);

  return (
    <div className="library">
      <div className="library-header">
        <h1>Library</h1>
      </div>
      
      <div className="library-sections">
        <div className="library-section">
          <h2>Recently uploaded</h2>
          <div className="library-items">
            <Link to="/history" className="library-item">
              <History className="library-icon" />
              <span>History</span>
            </Link>
            <Link to="/watch-later" className="library-item">
              <Clock className="library-icon" />
              <span>Watch later</span>
            </Link>
            <Link to="/liked" className="library-item">
              <ThumbsUp className="library-icon" />
              <span>Liked videos</span>
            </Link>
          </div>
        </div>
        
        <div className="library-section">
          <h2>All Videos</h2>
          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;