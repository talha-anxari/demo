import React, { useState } from 'react';

const riceData = [
  //... (same riceData array as before)
];

const Modal = ({ selectedRice, onOrder, onCancel }) => {
    const [formData, setFormData] = useState({ name: '', mobile: '', quantity: '', price: ''});

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      if (formData.quantity) {
        onOrder(formData);
        setFormData({ name: '', mobile: '', quantity: '', price: '' }); // Reset form after order
      }
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h3 className="text-2xl font-semibold mb-4">Order {selectedRice.name}</h3>
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity in KG"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <div className='flex gap-2'>
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Cash
        </button>
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Card
        </button>
        </div>
        
        <button
          onClick={onCancel}
          className="w-full mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
