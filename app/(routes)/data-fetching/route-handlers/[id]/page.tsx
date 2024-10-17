import { notFound } from "next/navigation";

async function getItems(id: string) {
  const res = await fetch(`http://localhost:3000/api/default/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const item = await getItems(params.id);

  if (!item) {
    notFound();
  }

  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
}
