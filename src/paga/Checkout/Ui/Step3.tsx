import { useState } from "react";

export default function Step3() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  return (
    <div className="bg-[#F7F7F7] p-6 rounded-2xl max-w-3xl mx-auto">
      {/* Card Option */}
      <div
        className={`rounded-xl p-4 border transition-all ${
          paymentMethod === "card"
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 bg-white"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
              className="accent-blue-600"
            />
            <span className="text-sm font-medium text-gray-700">
              Debit /Credit Card
            </span>
          </label>

          {/* Logos */}
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="mastercard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="visa"
              className="h-6"
            />
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          {/* Card Number */}
          <div>
            <label className="text-sm text-gray-600">Card Number</label>
            <input
              type="text"
              placeholder="Enter your card number"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
            />
          </div>

          {/* Exp + CVV */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm text-gray-600">Expiration Date</label>
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex-1">
              <label className="text-sm text-gray-600">CVV</label>
              <input
                type="text"
                placeholder="XXX"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <p className="text-sm text-blue-600">
            Payment information will not be saved
          </p>
        </div>
      </div>

      {/* PayPal Option */}
      <div
        className={`mt-4 rounded-xl p-4 border flex items-center justify-between cursor-pointer ${
          paymentMethod === "paypal"
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 bg-white"
        }`}
        onClick={() => setPaymentMethod("paypal")}
      >
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="accent-blue-600"
          />
          <span className="text-sm text-gray-700">PayPal</span>
        </label>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
          alt="paypal"
          className="h-6"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between mt-6">
        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
          Back
        </button>

        <button className="px-8 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition">
          Pay now
        </button>
      </div>
    </div>
  );
}
