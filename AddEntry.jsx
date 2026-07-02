import React, { useState } from "react";
import axios from "axios";
import "../styles/AddEntry.css";
import { useNavigate } from "react-router-dom";

const AddEntry = () => {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:5000/api/journal",   // <-- FIXED
      { mood, note },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Journal added!");
    navigate("/dashboard");

  } catch (err) {
    alert("Error adding journal!");
    console.log(err);
  }
};


  return (
    <div className="entry-container fade-in">
      <h2>Write Your Journal 🌸</h2>

      <form onSubmit={handleSubmit}>
        <select value={mood} onChange={(e) => setMood(e.target.value)} required>
          <option value="">Select Mood</option>
          <option value="Happy">😊 Happy</option>
          <option value="Sad">😢 Sad</option>
          <option value="Calm">😌 Calm</option>
          <option value="Excited">🤩 Excited</option>
          <option value="Angry">😠 Angry</option>
        </select>

        <textarea
          placeholder="Write your journal here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
        ></textarea>

        <button type="submit">Post Entry</button>
      </form>
    </div>
  );
};

export default AddEntry;
