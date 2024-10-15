export default function Page({ params }: { params: { id: string[] } }) {
  const { id: ids } = params;
  return (
    <div className="p-4 bg-gray-800">
      My dynamic parameter(s): {ids.join(", ")}
    </div>
  );
}
