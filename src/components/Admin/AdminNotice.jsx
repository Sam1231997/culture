import { useState, useEffect } from "react";

export default function AdminNotice() {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState("");

  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem("notices")) || [];
    setNotices(storedNotices);
  }, []);

  const addNotice = () => {
    if (!newNotice.trim()) return;

    const updatedNotices = [
      ...notices,
      {
        id: Date.now(),
        text: newNotice,
        date: new Date().toLocaleString(),
      },
    ];

    setNotices(updatedNotices);
    localStorage.setItem("notices", JSON.stringify(updatedNotices));
    setNewNotice("");
  };

  const deleteNotice = (id) => {
    const updatedNotices = notices.filter((n) => n.id !== id);
    setNotices(updatedNotices);
    localStorage.setItem("notices", JSON.stringify(updatedNotices));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Notice Board</h2>

      {/* Add new notice */}
      <div className="flex mb-4">
        <input
          type="text"
          value={newNotice}
          onChange={(e) => setNewNotice(e.target.value)}
          placeholder="Write a new notice..."
          className="flex-grow border px-3 py-2 rounded-l-md focus:outline-none"
        />
        <button
          onClick={addNotice}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
        >
          Post
        </button>
      </div>

      {/* List notices */}
      {notices.length === 0 ? (
        <p className="text-gray-500">No notices yet.</p>
      ) : (
        <ul className="space-y-3">
          {notices.map((notice) => (
            <li
              key={notice.id}
              className="p-3 border rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="text-gray-800">{notice.text}</p>
                <span className="text-xs text-gray-500">
                  Posted: {notice.date}
                </span>
              </div>
              <button
                onClick={() => deleteNotice(notice.id)}
                className="text-red-600 hover:underline text-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
