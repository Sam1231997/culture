import { useEffect, useState } from "react";

export default function AdminPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(storedPatients);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Registered Clients</h2>
      {patients.length === 0 ? (
        <p className="text-gray-500">No Client registered yet.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">First Name</th>
              <th className="p-2 border">Last Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Gender</th>
              <th className="p-2 border">Age</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-2 border">{patient.firstname}</td>
                <td className="p-2 border">{patient.lastname}</td>
                <td className="p-2 border">{patient.email}</td>
                <td className="p-2 border capitalize">{patient.gender}</td>
                <td className="p-2 border">{patient.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
