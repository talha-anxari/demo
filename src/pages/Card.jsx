import React, { useState } from "react";
import Header from "./Header";
import CustomerOrderTable from "./CustomerOrderTable";

const riceData = [
  {
    name: "DELIGHT KING",
    price: 340,
    stock: 1000,
  },
  {
    name: "DELIGHT GOLD",
    price: 340,
    stock: 800,
  },
  {
    name: "DELIGHT PAKWAAN SELLA",
    price: 340,
    stock: 1200,
  },
  {
    name: "DELIGHT SELLA",
    price: 340,
    stock: 500,
  },
  {
    name: "DELIGHT SUPREME",
    price: 340,
    stock: 1500,
  },
  {
    name: "ECONOMY DHAMAKA PONIA",
    price: 340,
    stock: 600,
  },
  {
    name: "DELIGHT SHORT GRAIN",
    price: 340,
    stock: 1500,
  },
  {
    name: "ECONOMY PONIA",
    price: 340,
    stock: 600,
  },
];

const Card = () => {
  const [selectedRice, setSelectedRice] = useState([]);
  const [riceStock, setRiceStock] = useState(riceData);
  const [customerName, setCustomerName] = useState("");
  const [customerCell, setCustomerCell] = useState("");
  const [orders, setOrders] = useState([]);

  const handleKgChange = (index, kg) => {
    const chosen = [...selectedRice];
    chosen[index].kgs = kg;
    chosen[index].totalPrice = kg * chosen[index].price;
    setSelectedRice(chosen);
  };

  const handleConfirm = () => {
    if (
      customerName &&
      customerCell &&
      selectedRice.every((item) => item.kgs > 0)
    ) {
      const updatedStock = [...riceStock];
      selectedRice.forEach((order) => {
        const stockIndex = updatedStock.findIndex(
          (rice) => rice.name === order.name
        );
        updatedStock[stockIndex].stock -= order.kgs;
        order.customerName = customerName;
        order.customerCell = customerCell;
        order.date = new Date().toLocaleDateString();
      });

      setRiceStock(updatedStock);
      setOrders([...orders, ...selectedRice]);
      setSelectedRice([]);
      setCustomerName("");
      setCustomerCell("");
    } else {
      alert(
        "Please fill out all fields and ensure all quantities are greater than 0."
      );
    }
  };

  const addItem = (ind) => {
    const item = riceStock[ind];
    const chosen = [...selectedRice];
    const isSelected = chosen.findIndex((data) => data.name === item.name);

    if (isSelected === -1) {
      const obj = {
        name: item.name,
        price: item.price,
        kgs: 0,
        totalPrice: 0,
      };
      chosen.push(obj);
      setSelectedRice(chosen);
    }
  };

  const handleDeleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  return (
    <>
      <Header />
      <div className="p-4 bg-gray-100 min-h-screen">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Rice Store</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
            {riceStock.map((rice, index) => (
              <div
                key={index}
                className="border cursor-pointer border-gray-300 p-4 rounded-lg shadow-lg min-h-50 hover:shadow-xl transition-shadow duration-300 bg-white"
                onClick={() => addItem(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {rice.name}
                </h3>
                <p className="text-2xl font-bold text-green-600">
                  Total Stock: {rice.stock} KG
                </p>
              </div>
            ))}
          </div>

          <div className="p-3">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="border rounded p-2 mr-4 w-full sm:w-auto"
              />
              <input
                type="text"
                placeholder="Customer Cell Number"
                value={customerCell}
                onChange={(e) => setCustomerCell(e.target.value)}
                className="border rounded p-2 w-full sm:w-auto mt-4 sm:mt-0"
              />
            </div>

            <div className="shadow bg-white rounded-md p-4">
              {selectedRice.length > 0 ? (
                selectedRice.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center w-40  sm:w-auto">
                      <h1 className="text-lg font-semibold mr-4">
                        {data.name}
                      </h1>
                      <h1 className="text-gray-700">{data.price} PKR per KG</h1>
                    </div>
                    <div className="flex items-center mt-4 sm:mt-0 w-full sm:w-auto">
                      <label className="flex items-center mr-4 w-56">
                        <span className="mr-2">KG</span>
                        <input
                          type="number"
                          value={data.kgs > 0 ? data.kgs : ""}
                          placeholder="Enter kg"
                          onChange={(e) =>
                            handleKgChange(index, Number(e.target.value))
                          }
                          className="border rounded p-2 w-32"
                        />
                      </label>

                      <h1 className="text-green-600 font-semibold">
                        Total: {data.totalPrice} PKR
                      </h1>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No items selected</p>
              )}

              <div className="text-right mt-6">
                <button
                  onClick={handleConfirm}
                  className="py-2 px-5 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition duration-300"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>

        <CustomerOrderTable orders={orders} onDeleteOrder={handleDeleteOrder} />
      </div>
    </>
  );
};

export default Card;
