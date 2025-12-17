import React from 'react';
import { Bell, User, Video, Heart, MessageCircle } from 'lucide-react';
import './Notifications.css';

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'subscribe' | 'upload';
  title: string;
  description: string;
  thumbnail: string;
  channel: string;
  time: string;
  isRead: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    title: 'Your video received 100 likes',
    description: 'React Tutorial for Beginners',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    channel: 'Your Channel',
    time: '2 hours ago',
    isRead: false
  },
  {
    id: '2',
    type: 'comment',
    title: 'New comment on your video',
    description: 'Someone commented: "Great tutorial!"',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    channel: 'CodeMaster',
    time: '4 hours ago',
    isRead: false
  },
  {
    id: '3',
    type: 'subscribe',
    title: 'TechReviewer subscribed to your channel',
    description: 'You have a new subscriber',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    channel: 'TechReviewer',
    time: '1 day ago',
    isRead: true
  },
  {
    id: '4',
    type: 'upload',
    title: 'CodeAcademy uploaded a new video',
    description: 'Advanced JavaScript Concepts',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    channel: 'CodeAcademy',
    time: '2 days ago',
    isRead: true
  }
];

const Notifications: React.FC = () => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="notification-type-icon like" />;
      case 'comment':
        return <MessageCircle className="notification-type-icon comment" />;
      case 'subscribe':
        return <User className="notification-type-icon subscribe" />;
      case 'upload':
        return <Video className="notification-type-icon upload" />;
      default:
        return <Bell className="notification-type-icon" />;
    }
  };

  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <h1>Notifications</h1>
        <button className="mark-all-read">Mark all as read</button>
      </div>
      
      <div className="notifications-list">
        {mockNotifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`notification-item ${!notification.isRead ? 'unread' : ''}`}
          >
            <div className="notification-icon">
              {getNotificationIcon(notification.type)}
            </div>
            
            <div className="notification-thumbnail">
              <img src={notification.thumbnail} alt="Thumbnail" />
            </div>
            
            <div className="notification-content">
              <h3 className="notification-title">{notification.title}</h3>
              <p className="notification-description">{notification.description}</p>
              <div className="notification-meta">
                <span className="notification-channel">{notification.channel}</span>
                <span className="notification-time">{notification.time}</span>
              </div>
            </div>
            
            {!notification.isRead && <div className="unread-indicator"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;