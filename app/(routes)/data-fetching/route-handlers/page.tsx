import AddItem from "./AddItem";

export interface Item {
  name: string;
  id: string;
}

async function getItems() {
  const res = await fetch("http://localhost:3000/api/default");
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}

async function getItem(id: string) {
  const res = await fetch(`http://localhost:3000/api/default/${id}`);
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}

export default async function Page() {
  const items: Item[] = await getItems();
  const item: Item = await getItem("1");

  return (
    <div>
      <h1 className="p-4">Items</h1>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.name}
            className="transition-all duration-300 hover:translate-x-2"
          >
            {item.name}
          </li>
        ))}
        <li className="transition-all duration-300 hover:translate-x-2">
          One (dynamic) item: {item.name}
        </li>
      </ul>
      <AddItem />
    </div>
  );
}
