import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0); 

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchCount = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/journal/count", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCount(res.data.count);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
    fetchCount();
  }, []);

  if (!user) return <h2 className="loading-text">Loading profile...</h2>;

  return (
    <div className="profile-container fade-in">
      <div className="profile-card">

        {/* ⭐ Animated Avatar */}
        <div className="avatar bounce">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
          />
        </div>

        <h2>{user.username}</h2>
        <p className="email-text">{user.email}</p>

        {/* ⭐ Journal Count Box */}
        <div className="info-box">
          <p><strong>Total Journals:</strong> {count}</p>
          <p><strong>Joined:</strong> {new Date(user.createdAt).toDateString()}</p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="logout-btn"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
