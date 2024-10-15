export default function Page({
  params,
}: {
  params: { firstId: string; secondId: string };
}) {
  const { firstId, secondId } = params;
  return (
    <div className="p-4 bg-gray-800">
      My dynamic parameters: {firstId} and {secondId}
    </div>
  );
}
