import React, { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { Video } from '../services/api';
import './Home.css';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos] = useState<Video[]>([
    {
      _id: '1',
      title: 'React Tutorial for Beginners - Complete Course',
      thumbnail: 'https://i.ytimg.com/vi/SqcY0GlETPk/maxresdefault.jpg',
      channel: 'Programming with Mosh',
      views: 2500000,
      uploadDate: '2024-01-15',
      duration: '3:45:20',
      description: 'Complete React tutorial for beginners',
      likes: 85000,
      category: 'technology'
    },
    {
      _id: '2',
      title: 'Node.js Crash Course - Build a REST API',
      thumbnail: 'https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg',
      channel: 'Traversy Media',
      views: 1800000,
      uploadDate: '2024-02-10',
      duration: '1:45:30',
      description: 'Build a complete REST API with Node.js',
      likes: 95000,
      category: 'technology'
    },
    {
      _id: '3',
      title: 'How to Cook Perfect Pasta - Italian Chef Tips',
      thumbnail: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=500&h=300&fit=crop',
      channel: 'Italian Cooking',
      views: 3200000,
      uploadDate: '2024-01-20',
      duration: '15:45',
      description: 'Learn authentic Italian pasta cooking techniques',
      likes: 125000,
      category: 'food'
    },
    {
      _id: '4',
      title: 'iPhone 15 Pro Review - Everything You Need to Know',
      thumbnail: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=300&fit=crop',
      channel: 'Tech Reviews',
      views: 8900000,
      uploadDate: '2024-02-05',
      duration: '12:30',
      description: 'Complete review of the latest iPhone',
      likes: 456000,
      category: 'technology'
    },
    {
      _id: '5',
      title: 'Mountain Biking Adventure in the Alps',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      channel: 'Adventure Sports',
      views: 4500000,
      uploadDate: '2024-01-25',
      duration: '8:22',
      description: 'Epic mountain biking through Alpine landscapes',
      likes: 180000,
      category: 'sports'
    },
    {
      _id: '6',
      title: 'Python Programming - Complete Beginner Course',
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop',
      channel: 'Code Academy',
      views: 5600000,
      uploadDate: '2024-02-15',
      duration: '4:26:52',
      description: 'Learn Python programming from scratch',
      likes: 298000,
      category: 'education'
    },
    {
      _id: '7',
      title: 'Best Pop Songs 2024 - Music Playlist',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      channel: 'Music Hub',
      views: 12500000,
      uploadDate: '2024-01-10',
      duration: '45:03',
      description: 'Top pop songs and latest music hits',
      likes: 650000,
      category: 'music'
    },
    {
      _id: '8',
      title: 'Space Exploration - Journey to Mars',
      thumbnail: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop',
      channel: 'Space Channel',
      views: 6800000,
      uploadDate: '2024-02-20',
      duration: '22:15',
      description: 'Exploring the possibilities of Mars colonization',
      likes: 320000,
      category: 'science'
    },
    {
      _id: '9',
      title: 'Morning Routine for Success - Productivity Tips',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      channel: 'Lifestyle Guru',
      views: 3400000,
      uploadDate: '2024-01-30',
      duration: '8:15',
      description: 'How successful people start their day',
      likes: 142000,
      category: 'lifestyle'
    },
    {
      _id: '10',
      title: 'Football Skills - Best Goals Compilation',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&h=300&fit=crop',
      channel: 'Sports Highlights',
      views: 15200000,
      uploadDate: '2024-02-12',
      duration: '10:25',
      description: 'Amazing football goals and skills',
      likes: 785000,
      category: 'sports'
    },
    {
      _id: '11',
      title: 'How Rockets Work - Space Technology Explained',
      thumbnail: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=500&h=300&fit=crop',
      channel: 'Science Explained',
      views: 8500000,
      uploadDate: '2024-01-18',
      duration: '15:30',
      description: 'Understanding rocket science and space travel',
      likes: 425000,
      category: 'science'
    },
    {
      _id: '12',
      title: 'Gaming PC Build Guide - Ultimate Setup 2024',
      thumbnail: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=300&fit=crop',
      channel: 'PC Builder',
      views: 4800000,
      uploadDate: '2024-02-08',
      duration: '22:15',
      description: 'Build the ultimate gaming computer',
      likes: 234000,
      category: 'technology'
    },
    {
      _id: '13',
      title: 'Street Food Tour - Amazing World Cuisine',
      thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=300&fit=crop',
      channel: 'Food Explorer',
      views: 4200000,
      uploadDate: '2024-01-22',
      duration: '20:15',
      description: 'Exploring delicious street food around the world',
      likes: 195000,
      category: 'food'
    },
    {
      _id: '14',
      title: 'Software Engineer Life - Tech Career Guide',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      channel: 'Tech Careers',
      views: 2800000,
      uploadDate: '2024-02-18',
      duration: '15:40',
      description: 'What it\'s like working as a software engineer',
      likes: 125000,
      category: 'lifestyle'
    },
    {
      _id: '15',
      title: 'Tokyo Travel Guide - Hidden Gems in Japan',
      thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=300&fit=crop',
      channel: 'Travel Guide',
      views: 3200000,
      uploadDate: '2024-01-28',
      duration: '19:35',
      description: 'Discover amazing places in Tokyo',
      likes: 156000,
      category: 'travel'
    },
    {
      _id: '16',
      title: 'Movie Trailers 2024 - Upcoming Blockbusters',
      thumbnail: 'https://images.unsplash.com/photo-1489599735734-79b4169c4388?w=500&h=300&fit=crop',
      channel: 'Movie Central',
      views: 45600000,
      uploadDate: '2024-02-01',
      duration: '12:28',
      description: 'Latest movie trailers and entertainment news',
      likes: 1800000,
      category: 'entertainment'
    }
  ]);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (video.category || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="video-grid">
        {filteredVideos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
      {filteredVideos.length === 0 && searchQuery && (
        <div className="no-results">
          <p>No videos found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default Home;