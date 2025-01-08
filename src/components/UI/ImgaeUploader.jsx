import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; 
import './ImageUploader.scss'; 

const ImageUploader = ({ setFieldValue }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFieldValue("profileImg", file); 
    }
  };

  return (
    <div className="image-uploader">
      <input 
        type="file" 
        id="file-upload" 
        className="file-upload" 
        onChange={handleImageChange} 
        accept="image/*" 
      />
      <label htmlFor="file-upload" className="upload-label">
        {selectedImage ? (
          <img src={selectedImage} alt="Profile Preview" className="preview-image" />
        ) : (
          <>
            <FaPlus className="icon" />
            <span className="upload-text">Upload</span>
          </>
        )}
      </label>
    </div>
  );
};

export default ImageUploader;
