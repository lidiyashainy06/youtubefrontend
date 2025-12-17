import React, { useState } from 'react';
import { Upload as UploadIcon, Image, Eye, EyeOff } from 'lucide-react';
import './Upload.css';

const Upload: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    visibility: 'public',
    category: 'entertainment'
  });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile) return;

    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      alert('Video uploaded successfully!');
    }, 2000);
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        <h1>Upload Video</h1>
        
        <form onSubmit={handleSubmit} className="upload-form">
          <div className="upload-section">
            <h2>Video File</h2>
            <div className="file-upload-area">
              {!videoFile ? (
                <label className="file-upload-label">
                  <UploadIcon size={48} />
                  <span>Select video file</span>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    hidden
                  />
                </label>
              ) : (
                <div className="file-selected">
                  <span>{videoFile.name}</span>
                  <button type="button" onClick={() => setVideoFile(null)}>Remove</button>
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter video title"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Tell viewers about your video"
              rows={4}
            />
          </div>

          <div className="upload-section">
            <h2>Thumbnail</h2>
            <div className="thumbnail-upload">
              {!thumbnailFile ? (
                <label className="thumbnail-upload-label">
                  <Image size={24} />
                  <span>Upload thumbnail</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailUpload}
                    hidden
                  />
                </label>
              ) : (
                <div className="thumbnail-preview">
                  <img src={URL.createObjectURL(thumbnailFile)} alt="Thumbnail" />
                  <button type="button" onClick={() => setThumbnailFile(null)}>Change</button>
                </div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Visibility</label>
              <select name="visibility" value={formData.visibility} onChange={handleInputChange}>
                <option value="public">Public</option>
                <option value="unlisted">Unlisted</option>
                <option value="private">Private</option>
              </select>
            </div>

            <div className="form-group">
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange}>
                <option value="entertainment">Entertainment</option>
                <option value="education">Education</option>
                <option value="gaming">Gaming</option>
                <option value="music">Music</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary">Save Draft</button>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={!videoFile || !formData.title || isUploading}
            >
              {isUploading ? 'Uploading...' : 'Publish'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;