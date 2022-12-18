import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Payment = () => {
  const publicKey = "pk_test_3ddb02c577ba79c3ee00bbc42d8cea88b4ac01ec";
  const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <div className="item">
            <img alt="logo" />
            <div className="item-details">
              <p>Dancing Shoes</p>
              <p>{amount}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <form className="flex flex-col">
              <label>Name</label>
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-blue-400"
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email</label>
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-blue-400"
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Phone</label>
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-blue-400"
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </form>
            <PaystackButton
              className="w-46 h-16 border-2 bg-blue-600 text-white"
              {...componentProps}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
