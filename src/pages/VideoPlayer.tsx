import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import './VideoPlayer.css';

interface Video {
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
  subscribers?: string;
}

const VideoPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);

  useEffect(() => {
    // Mock video data
    const mockVideo: Video = {
      _id: id || '1',
      title: 'React Tutorial for Beginners - Complete Course',
      thumbnail: 'https://img.youtube.com/vi/SqcY0GlETPk/maxresdefault.jpg',
      channel: 'Programming with Mosh',
      views: 1200000,
      uploadDate: '2023-01-15',
      duration: '2:30:45',
      description: 'Learn React from scratch in this comprehensive tutorial. Perfect for beginners who want to master React development.',
      likes: 45000,
      dislikes: 1200,
      subscribers: '2.5M'
    };

    const mockRelatedVideos: Video[] = [
      {
        _id: '2',
        title: 'Node.js Crash Course',
        thumbnail: 'https://img.youtube.com/vi/fBNz5xF-Kx4/maxresdefault.jpg',
        channel: 'Traversy Media',
        views: 850000,
        uploadDate: '2023-02-20',
        duration: '1:45:30'
      },
      {
        _id: '3',
        title: 'MongoDB Tutorial',
        thumbnail: 'https://img.youtube.com/vi/pWbMrx5rVBE/maxresdefault.jpg',
        channel: 'Net Ninja',
        views: 650000,
        uploadDate: '2023-03-10',
        duration: '3:15:20'
      }
    ];

    setVideo(mockVideo);
    setRelatedVideos(mockRelatedVideos);
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div className="video-player-page">
      <div className="video-player-container">
        <div className="video-player">
          <div className="video-iframe">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/kCc8FmEb1nY`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="video-details">
            <h1 className="video-title">{video.title}</h1>
            
            <div className="video-actions">
              <div className="channel-info">
                <div className="channel-avatar"></div>
                <div>
                  <p className="channel-name">{video.channel}</p>
                  <p className="subscriber-count">{video.subscribers} subscribers</p>
                </div>
                <button className="subscribe-btn">Subscribe</button>
              </div>
              
              <div className="action-buttons">
                <button className="action-btn">
                  <ThumbsUp size={20} />
                  {video.likes?.toLocaleString()}
                </button>
                <button className="action-btn">
                  <ThumbsDown size={20} />
                </button>
                <button className="action-btn">
                  <Share size={20} />
                  Share
                </button>
                <button className="action-btn">
                  <Download size={20} />
                  Download
                </button>
                <button className="action-btn">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
            
            <div className="video-description">
              <p>{video.views.toLocaleString()} views • {video.uploadDate}</p>
              <p>{video.description}</p>
            </div>
          </div>
        </div>
        
        <div className="related-videos">
          <h3>Related Videos</h3>
          <div className="related-videos-list">
            {relatedVideos.map((relatedVideo) => (
              <VideoCard key={relatedVideo._id} video={relatedVideo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;