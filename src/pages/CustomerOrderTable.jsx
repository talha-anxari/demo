import React from "react";

const CustomerOrderTable = ({ orders }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Customer Orders</h2>
      {orders.length > 0 ? (
        <table className="min-w-full bg-white border rounded-md shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Cell Number</th>
              <th className="py-2 px-4 border-b">Rice Name</th>
              <th className="py-2 px-4 border-b">Quantity (KG)</th>
              <th className="py-2 px-4 border-b">Total Price (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center">{order.date}</td>
                <td className="py-2 px-4 border-b text-center">{order.customerName}</td>
                <td className="py-2 px-4 border-b text-center">{order.customerCell}</td>
                <td className="py-2 px-4 border-b text-center">{order.name}</td>
                <td className="py-2 px-4 border-b text-center">{order.kgs} kg</td>
                <td className="py-2 px-4 border-b text-center">{order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No orders placed yet.</p>
      )}
    </div>
  );
};

export default CustomerOrderTable;
