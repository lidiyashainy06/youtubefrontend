import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, Mic, Video, Bell, User } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <Menu className="menu-icon" />
        <Link to="/" className="logo">
          <span className="logo-text">YouTube</span>
        </Link>
      </div>
      
      <div className="header-center">
        <form onSubmit={handleSearch} className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <Search size={20} />
          </button>
        </form>
        <button className="mic-btn">
          <Mic size={20} />
        </button>
      </div>
      
      <div className="header-right">
        <Link to="/upload">
          <Video className="header-icon" />
        </Link>
        <Link to="/notifications">
          <Bell className="header-icon" />
        </Link>
        <Link to="/login" className="login-link">
          <User className="header-icon profile" />
        </Link>
      </div>
    </header>
  );
};

export default Header;