import { useEffect, useState, useRef } from "react";

export default function PatientBills() {
  const [bills, setBills] = useState([]);
  const [patientEmail, setPatientEmail] = useState("");
  const billRefs = useRef({}); // store refs for each bill

  useEffect(() => {
    const email = localStorage.getItem("loggedInPatient");
    setPatientEmail(email);

    const storedBills = JSON.parse(localStorage.getItem("bills")) || [];
    const myBills = storedBills.filter((b) => b.patientEmail === email);
    setBills(myBills);
  }, []);

  const handlePrint = (billId) => {
    const content = billRefs.current[billId];
    if (content) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`
        <html>
          <head>
            <title>Bill - ${billId}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              h3 { margin-bottom: 5px; }
              ul { list-style: none; padding: 0; }
              li { border-bottom: 1px solid #ccc; padding: 5px 0; }
              .paid { color: green; }
              .unpaid { color: red; }
              .total { font-weight: bold; margin-top: 10px; }
            </style>
          </head>
          <body>
            ${content.innerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Bills</h2>
      {bills.length === 0 ? (
        <p>No bills found.</p>
      ) : (
        bills.map((bill) => (
          <div
            key={bill.id}
            className="mb-4 border rounded-lg p-4 bg-white shadow"
          >
            {/* Store the printable content */}
            <div ref={(el) => (billRefs.current[bill.id] = el)}>
              <h3 className="font-semibold">Bill ID: {bill.id}</h3>
              <p>Date: {bill.date}</p>
              <ul className="mt-2">
                {bill.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b py-1">
                    <span>{item.description}</span>
                    <span>
                      ₦{item.amount} -{" "}
                      <span
                        className={
                          item.status === "Paid" ? "paid" : "unpaid"
                        }
                      >
                        {item.status}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 total">Total Paid: ₦{bill.totalPaid}</p>
              <p className="total">Total Unpaid: ₦{bill.totalUnpaid}</p>
            </div>

            {/* Print button */}
            <button
              onClick={() => handlePrint(bill.id)}
              className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Print Bill
            </button>
          </div>
        ))
      )}
    </div>
  );
}
