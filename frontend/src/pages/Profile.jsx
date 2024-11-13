import  { useState, useEffect } from 'react';

const Profile = () => {
  // State to store user profile data (this could be fetched from an API or local storage)
  const [userProfile, setUserProfile] = useState({
    name: 'Aditya Pandey',
    email: 'aditya.2314@example.com',
    bio: 'A passionate developer exploring the world of blockchain and web3 Ecoscystem EcoDao.',
    profilePicture: 'https://via.placeholder.com/150',
  });

  // Edit Mode State
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile);

  // Handle profile update (this could be an API call to save the changes)
  const handleUpdateProfile = () => {
    setUserProfile(editedProfile);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  // Simulate fetching user data (e.g., from an API)
  useEffect(() => {
    // Fetch user profile data here (e.g., from API or localStorage)
    // For now, we just use the hardcoded `userProfile` state
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Your Profile</h2>
        
        <div className="flex justify-center mb-6">
          {/* Profile Picture */}
          <img
            src={userProfile.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 font-semibold">Name</label>
          {isEditing ? (
            <input
              type="text"
              value={editedProfile.name}
              onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="text-gray-600 mt-2">{userProfile.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="text-gray-700 font-semibold">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={editedProfile.email}
              onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="text-gray-600 mt-2">{userProfile.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="text-gray-700 font-semibold">Bio</label>
          {isEditing ? (
            <textarea
              value={editedProfile.bio}
              onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              rows="4"
            />
          ) : (
            <p className="text-gray-600 mt-2">{userProfile.bio}</p>
          )}
        </div>

        <div className="flex justify-between items-center">
          {isEditing ? (
            <button
              onClick={handleUpdateProfile}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all"
            >
              Edit Profile
            </button>
          )}

          {/* Logout Button */}
          <button
            onClick={() => alert('Logged out successfully!')}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
