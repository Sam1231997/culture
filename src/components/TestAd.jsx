import  { useState, useEffect } from 'react';
import axios from 'axios';

const TestAd = () => {
  const [submissions, setSubmissions] = useState([]);

  // Fetch submissions on component mount
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/submissions');
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };
  
    fetchSubmissions();
  }, []);
  
  // Handle delete
  const handleDelete = (id) => {
    console.log('Deleting submission with ID:', id); // Debug
    axios
    .delete(`http://localhost:5000/submissions/${id}`) // Singular 'submission'
    .then(() => {
      setSubmissions(submissions.filter((submission) => submission.id !== id));
    })
    .catch((error) => console.error('Error deleting submission:', error));
  
  };
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="table-auto w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-2 py-2">Name</th>
            <th className="px-2 py-2">Phone Number</th>
            <th className="px-2 py-2">Email</th>
            <th className="px-2 py-2">Date</th>
            <th className="px-2 py-2">Message</th>
            <th className="px-2 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map(submission => (
            <tr key={submission.id}>
              <td className="border px-2 py-2">{submission.name}</td>
              <td className="border px-2 py-2">{submission.phoneNumber}</td>
              <td className="border px-2 py-2">{submission.email}</td>
              <td className="border px-2 py-2">{submission.date}</td>
              <td className="border px-2 py-2">{submission.message}</td>
              <td className="border px-2 py-2">
                <button
                  onClick={() => handleDelete(submission.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestAd;
