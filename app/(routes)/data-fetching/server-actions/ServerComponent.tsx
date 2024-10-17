export default function AddItem() {
  const addItem = async (formData: FormData) => {
    "use server";

    const name = (formData.get("name") as string) || "Server Action";

    // validate data securely
    // access secrets
    // etc.

    if (!name) {
      throw new Error("Error: name required");
    }

    return;
  };

  return (
    <div className="max-w-md mt-8">
      <form action={addItem} className="space-y-2">
        <button
          type="submit"
          className="text-black bg-yellow-500 px-4 py-2 mx-2 hover:bg-yellow-300 transition-all duration-300 ease-in-out 
transform hover:-translate-x-1 hover:-rotate-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Add Item (Server Component)
        </button>
      </form>
    </div>
  );
}
