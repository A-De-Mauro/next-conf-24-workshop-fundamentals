import Link from "next/link";
import AddItem from "./AddItem";
import ArrowNext from "@/app/components/ArrowNext";

export interface Item {
  name: string;
  id: string;
}

async function getItems() {
  const res = await fetch("http://localhost:3000/api/default");
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}

export default async function Page() {
  const items: Item[] = await getItems();

  return (
    <div>
      <h1 className="p-4">Items</h1>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.name}
            className="transition-all duration-300 hover:translate-x-2"
          >
            <Link
              className="text-yellow-500"
              href={`/data-fetching/route-handlers/${item.id}`}
            >
              <ArrowNext /> {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <AddItem />
    </div>
  );
}
