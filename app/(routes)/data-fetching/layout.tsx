export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen border-4 border-yellow-500">
      {/* Main content */}
      <div className="flex-grow p-4">
        <div className="text-yellow-500 mb-2">Data fetching</div>
        {children}
      </div>
    </div>
  );
}
