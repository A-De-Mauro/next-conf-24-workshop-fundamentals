import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

export default async function Page() {
  return (
    <div>
      <h1 className="p-2">Items</h1>
      <ClientComponent />
      <ServerComponent />
    </div>
  );
}
