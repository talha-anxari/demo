import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Modal from "./pages/Modal";
// import SalesChart from "./pages/OrderTable";
import CustomerOrderTable from "./pages/CustomerOrderTable";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card  />} />
        <Route path="/modal" element={<Modal  />} />
        <Route path="/salesChart" element={<CustomerOrderTable  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
