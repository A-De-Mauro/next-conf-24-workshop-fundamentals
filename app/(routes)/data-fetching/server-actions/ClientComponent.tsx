"use client";

import { addItem } from "./actions";

export default function AddItem() {
  return (
    <div className="max-w-md mt-8">
      <form action={addItem} className="space-y-4">
        <button
          type="submit"
          className="text-black bg-yellow-500 px-4 py-2 mx-2 hover:bg-yellow-300 transition-all duration-300 ease-in-out 
transform hover:-translate-x-1 hover:-rotate-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Add Item (Client Component)
        </button>
      </form>
    </div>
  );
}
