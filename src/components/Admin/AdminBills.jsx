import { useEffect, useState } from "react";

export default function AdminBills() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [items, setItems] = useState([{ description: "", amount: "", status: "Unpaid" }]);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(storedPatients);

    const storedBills = JSON.parse(localStorage.getItem("bills")) || [];
    setBills(storedBills);
  }, []);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { description: "", amount: "", status: "Unpaid" }]);
  };

  const generateBill = () => {
    if (!selectedPatient) {
      alert("Please select a patient");
      return;
    }

    const totalPaid = items.reduce(
      (sum, item) => sum + (item.status === "Paid" ? Number(item.amount || 0) : 0),
      0
    );

    const totalUnpaid = items.reduce(
      (sum, item) => sum + (item.status === "Unpaid" ? Number(item.amount || 0) : 0),
      0
    );

    const newBill = {
      id: `BILL-${Date.now()}`,
      patientEmail: selectedPatient,
      date: new Date().toISOString().split("T")[0],
      items,
      totalPaid,
      totalUnpaid,
    };

    const updatedBills = [...bills, newBill];
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills));

    alert("Bill generated and sent to patient!");
    setItems([{ description: "", amount: "", status: "Unpaid" }]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Generate Patient Bill</h2>

      {/* Select Patient */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Select Patient</label>
        <select
          value={selectedPatient}
          onChange={(e) => setSelectedPatient(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full"
        >
          <option value="">-- Choose Patient --</option>
          {patients.map((p, idx) => (
            <option key={idx} value={p.email}>
              {p.firstname} {p.lastname} ({p.email})
            </option>
          ))}
        </select>
      </div>

      {/* Bill Items */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Bill Items</h3>
        {items.map((item, idx) => (
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
              placeholder="Amount (₦)"
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
        <button
          onClick={addItem}
          className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
        >
          + Add Item
        </button>
      </div>

      <button
        onClick={generateBill}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
      >
        Generate Bill
      </button>
    </div>
  );
}
