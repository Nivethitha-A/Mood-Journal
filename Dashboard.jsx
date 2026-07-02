import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [editing, setEditing] = useState(null); // journal being edited
  const [editMood, setEditMood] = useState("");
  const [editNote, setEditNote] = useState("");

  const token = localStorage.getItem("token");
 
  // Fetch journals
  const fetchJournal = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/journal", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEntries(res.data);
    } catch (err) {
      console.error("Error fetching journal:", err);
    }
  };

  useEffect(() => {
    fetchJournal();
  }, []);

  // 🔥 DELETE ENTRY
  const deleteEntry = async (id) => {
    if (!window.confirm("Delete this journal?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/journal/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEntries(entries.filter((e) => e._id !== id)); // remove from UI
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  // 🔥 OPEN EDIT MODAL
  const startEdit = (entry) => {
    setEditing(entry);
    setEditMood(entry.mood);
    setEditNote(entry.note);
  };

  // 🔥 SAVE EDITED ENTRY
  const saveEdit = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/journal/${editing._id}`,
        { mood: editMood, note: editNote },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update UI
      setEntries(
        entries.map((e) => (e._id === editing._id ? res.data : e))
      );

      setEditing(null); // close modal
    } catch (err) {
      console.log("Edit error:", err);
    }
  };

  return (
    <div className="dashboard fade-in">
      <h1>🌸 Your Mood Dashboard</h1>
      <p>Track your emotions beautifully every day ✨</p>

      <a className="add-entry-btn" href="/add-entry">
        ➕ Add New Journal
      </a>

      <div className="entries-list">
        {entries.length === 0 ? (
          <p className="no-entries">💭 No journal entries yet...</p>
        ) : (
          entries.map((entry) => (
            <div className="entry-card" key={entry._id}>
              <h3 className={`mood-tag mood-${entry.mood.toLowerCase()}`}>
                {entry.mood}
              </h3>

              <p>{entry.note}</p>

              <small>
                {new Date(entry.createdAt).toLocaleDateString()}{" "}
                {new Date(entry.createdAt).toLocaleTimeString()}
              </small>

              {/* ⭐ EDIT & DELETE BUTTONS */}
              <div className="entry-actions">
                <button className="edit-btn" onClick={() => startEdit(entry)}>
                  ✏ Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteEntry(entry._id)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ⭐ EDIT POPUP MODAL */}
      {editing && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Edit Journal</h3>

            <select
              value={editMood}
              onChange={(e) => setEditMood(e.target.value)}
            >
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Calm">Calm</option>
              <option value="Excited">Excited</option>
              <option value="Angry">Angry</option>
            </select>

            <textarea
              value={editNote}
              onChange={(e) => setEditNote(e.target.value)}
            ></textarea>

            <button onClick={saveEdit} className="save-btn">💾 Save</button>
            <button onClick={() => setEditing(null)} className="close-btn">
              ❌ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
