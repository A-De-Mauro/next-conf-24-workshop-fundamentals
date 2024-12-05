export default async function Page(
  props: {
    params: Promise<{ firstId: string; secondId: string }>;
  }
) {
  const params = await props.params;
  const { firstId, secondId } = params;
  return (
    <div className="p-4 bg-gray-800">
      My dynamic parameters: {firstId} and {secondId}
    </div>
  );
}
