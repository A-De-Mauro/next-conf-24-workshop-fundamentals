import { NextResponse, type NextRequest } from "next/server";

const items = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Cristina" },
  { id: 3, name: "Carlo" },
];

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const item = items.find((item) => item.id === parseInt(params.id));
  const searchParams = request.nextUrl.searchParams;
  const searchTerm = searchParams.get("search");

  console.log("*** Search term:", searchTerm);

  if (item) {
    return NextResponse.json(item, {
      status: 200,
      headers: { "X-Custom-Alice": item.name },
    });
  } else {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
}
