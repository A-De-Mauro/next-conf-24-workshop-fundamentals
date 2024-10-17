"use server";

export async function addItem(formData: FormData) {
  const name = (formData.get("name") as string) || "Server Action";

  // validate data securely
  // access secrets
  // etc.

  if (!name) {
    throw new Error("Error: name required");
  }

  return;
}
