export async function generateStaticParams() {
  // const data = await fetch('https://.../some-data-api').then((res) => res.json())
  // rework data to return an array of objects with an id property

  return [
    {
      id: "1234",
    },
    {
      id: "5678",
    },
  ];
}

export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { id } = params;
  const { name, surname } = searchParams;
  return (
    <div>
      <div className="p-4 bg-gray-800">My dynamic parameter: {id}</div>
      <div className="p-4 bg-gray-800">
        My search parameter: {name} {surname}
      </div>
    </div>
  );
}
