import { NextResponse } from "next/server";

const items = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Cristina" },
  { id: 3, name: "Carlo" },
];

export async function GET() {
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const { name } = await request.json();

  if (!name) {
    return NextResponse.json(
      { error: "Error: name required" },
      { status: 400 }
    );
  }

  const newItem = { id: items.length + 1, name };
  items.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}
