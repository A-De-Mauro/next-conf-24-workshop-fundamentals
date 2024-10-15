export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 border-2 border-yellow-500">
      <div className="text-yellow-500 mb-2">Three Layout (children)</div>
      {children}
    </div>
  );
}
