import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/AddEntry.css";

const EditEntry = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");

  // Load existing journal entry
  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `http://localhost:5000/api/journal/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Set the existing values
        setMood(res.data.mood);
        setNote(res.data.note);

      } catch (err) {
        console.log("Error loading entry:", err);
      }
    };

    fetchEntry();
  }, [id]);

  // Update the journal
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/journal/${id}`,
        { mood, note },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Journal updated!");
      navigate("/dashboard");
    } catch (err) {
      alert("Error updating journal!");
      console.log(err);
    }
  };

  return (
    <div className="entry-container fade-in">
      <h2>Edit Journal Entry ✏</h2>

      <form onSubmit={handleUpdate}>
        <select value={mood} onChange={(e) => setMood(e.target.value)} required>
          <option value="">Select Mood</option>
          <option value="Happy">😊 Happy</option>
          <option value="Sad">😢 Sad</option>
          <option value="Calm">😌 Calm</option>
          <option value="Excited">🤩 Excited</option>
          <option value="Angry">😠 Angry</option>
        </select>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Edit your note..."
          required
        ></textarea>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditEntry;
