export default async function Page(props: { params: Promise<{ id: string[] }> }) {
  const params = await props.params;
  const { id: ids } = params;
  return (
    <div className="p-4 bg-gray-800">
      My dynamic parameter(s): {ids.join(", ")}
    </div>
  );
}
