import { useEffect, useState } from "react";

export default function PatientProfile() {
  const [patient, setPatient] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    age: "",
    email: "",
  });

  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInPatient");

    if (loggedInEmail) {
      const patients = JSON.parse(localStorage.getItem("patients")) || [];
      const foundPatient = patients.find((p) => p.email === loggedInEmail);
      setPatient(foundPatient);
      setFormData(foundPatient); // preload form when editing
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Get all patients
    const patients = JSON.parse(localStorage.getItem("patients")) || [];

    // Update this patient in the array
    const updatedPatients = patients.map((p) =>
      p.email === patient.email ? { ...p, ...formData } : p
    );

    // Save back to localStorage
    localStorage.setItem("patients", JSON.stringify(updatedPatients));
    localStorage.setItem("loggedInPatient", formData.email);

    setPatient(formData); // update local state
    setIsEditing(false);
  };

  if (!patient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <p className="text-gray-600 text-lg">
          No patient data found. Please log in.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-100 bg-blue-50">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Patient Profile
        </h2>

        {!isEditing ? (
          <>
            {/* Profile Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-500 font-medium">First Name</p>
                <p className="text-lg font-semibold">{patient.firstname}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Last Name</p>
                <p className="text-lg font-semibold">{patient.lastname}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Gender</p>
                <p className="text-lg font-semibold capitalize">
                  {patient.gender}
                </p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Age</p>
                <p className="text-lg font-semibold">{patient.age}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Email</p>
                <p className="text-lg font-semibold">{patient.email}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Edit Profile
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("loggedInPatient");
                  window.location.href = "/patient";
                }}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Edit Form */}
            <form className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-600 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-600 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-600 mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </form>

            {/* Save / Cancel */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setFormData(patient); // reset form
                }}
                className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
