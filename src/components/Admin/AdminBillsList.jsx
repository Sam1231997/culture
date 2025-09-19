import { useEffect, useState } from "react";

export default function AdminBillsList() {
  const [patients, setPatients] = useState([]);
  const [bills, setBills] = useState([]);
  const [editingBill, setEditingBill] = useState(null);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(storedPatients);

    const storedBills = JSON.parse(localStorage.getItem("bills")) || [];
    setBills(storedBills);
  }, []);

  const saveBills = (updated) => {
    setBills(updated);
    localStorage.setItem("bills", JSON.stringify(updated));
  };

  const handleUpdate = (bill) => {
    setEditingBill({ ...bill });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...editingBill.items];
    updatedItems[index][field] = value;
    setEditingBill({ ...editingBill, items: updatedItems });
  };

  const handleSaveUpdate = () => {
    const totalPaid = editingBill.items.reduce(
      (sum, item) =>
        sum + (item.status === "Paid" ? Number(item.amount || 0) : 0),
      0
    );
    const totalUnpaid = editingBill.items.reduce(
      (sum, item) =>
        sum + (item.status === "Unpaid" ? Number(item.amount || 0) : 0),
      0
    );

    const updatedBill = { ...editingBill, totalPaid, totalUnpaid };

    const updatedBills = bills.map((b) =>
      b.id === updatedBill.id ? updatedBill : b
    );

    saveBills(updatedBills);
    setEditingBill(null);
    alert("Bill updated successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Bills</h2>

      {/* Bills Table */}
      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-3 py-2">Bill ID</th>
            <th className="border px-3 py-2">Patient</th>
            <th className="border px-3 py-2">Date</th>
            <th className="border px-3 py-2">Total Paid</th>
            <th className="border px-3 py-2">Total Unpaid</th>
            <th className="border px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {bills.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No bills found.
              </td>
            </tr>
          ) : (
            bills.map((bill) => {
              const patient = patients.find(
                (p) => p.email === bill.patientEmail
              );
              return (
                <tr key={bill.id} className="text-center">
                  <td className="border px-3 py-2">{bill.id}</td>
                  <td className="border px-3 py-2">
                    {patient
                      ? `${patient.firstname} ${patient.lastname}`
                      : bill.patientEmail}
                  </td>
                  <td className="border px-3 py-2">{bill.date}</td>
                  <td className="border px-3 py-2">₦{bill.totalPaid}</td>
                  <td className="border px-3 py-2">₦{bill.totalUnpaid}</td>
                  <td className="border px-3 py-2">
                    <button
                      onClick={() => handleUpdate(bill)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* Modal for Update Form */}
      {editingBill && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6">
            <h3 className="text-xl font-semibold mb-4">
              Update Bill ({editingBill.id})
            </h3>

            {editingBill.items.map((item, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) =>
                    handleItemChange(idx, "description", e.target.value)
                  }
                  className="border px-2 py-1 rounded w-1/3"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={item.amount}
                  onChange={(e) =>
                    handleItemChange(idx, "amount", e.target.value)
                  }
                  className="border px-2 py-1 rounded w-1/3"
                />
                <select
                  value={item.status}
                  onChange={(e) =>
                    handleItemChange(idx, "status", e.target.value)
                  }
                  className="border px-2 py-1 rounded w-1/3"
                >
                  <option value="Unpaid">Unpaid</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
            ))}

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={handleSaveUpdate}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditingBill(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
