"use client";

import { useState } from "react";

export default function AddItem() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/api/default", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Whatever" }),
      });

      if (response.ok) {
        const newItem = await response.json();
        setMessage(`Item added successfully: ${newItem.name}`);
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || "An error occurred");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while adding the item");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Add Item
        </button>
      </form>
      {message && (
        <p className="mt-4 text-sm text-center text-gray-600">{message}</p>
      )}
    </div>
  );
}
