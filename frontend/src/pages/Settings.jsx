/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory
import axios from 'axios'; // For making API requests

const Settings = () => {
  const navigate = useNavigate(); // Using useNavigate for navigation
  const [userSettings, setUserSettings] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: '', // URL to the current profile picture
  });

  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle file upload
  const handleProfilePictureUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('/api/upload-to-s3', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setUserSettings({
          ...userSettings,
          profilePicture: response.data.fileUrl, // URL returned from S3
        });
        setLoading(false);
        alert('Profile picture uploaded successfully!');
      } catch (error) {
        setLoading(false);
        alert('Error uploading file.');
      }
    }
  };

  // Handle form submission to update settings
  const handleSubmit = () => {
    // Simulate an API call to save updated settings
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Settings updated successfully!');
      navigate('/profile'); // Redirect to profile page using useNavigate
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Settings</h2>

        {/* Profile Picture Upload */}
        <div className="mb-6 flex justify-center">
          <img
            src={userSettings.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureUpload}
            className="w-full p-2 bg-gray-200 rounded-md"
          />
          {loading && <p className="mt-2 text-blue-500">Uploading...</p>}
        </div>

        {/* User Info */}
        <div className="mb-4">
          <label className="text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            value={userSettings.name}
            onChange={(e) => setUserSettings({ ...userSettings, name: e.target.value })}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            value={userSettings.email}
            onChange={(e) => setUserSettings({ ...userSettings, email: e.target.value })}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Save Changes
          </button>

          {/* Log Out Button */}
          <button
            onClick={() => navigate('/logout')}  // Navigate to logout page
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
