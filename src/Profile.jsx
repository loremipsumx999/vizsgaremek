import React, { useState } from "react";

function Profile({ token }) {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify({
          username: newUsername,
          newPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error during profile update");
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="New Username"
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Profile;
