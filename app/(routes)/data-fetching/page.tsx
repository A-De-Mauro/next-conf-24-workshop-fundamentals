import ArrowNext from "@/app/components/ArrowNext";
import ArrowPrevious from "@/app/components/ArrowPrevious";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4 bg-gray-800">
      <div className="space-x-4">
        <ul className="space-y-2">
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link
              href="/data-fetching/route-handlers"
              className="text-yellow-500"
            >
              <ArrowNext /> Items
            </Link>
          </li>
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link
              href="/data-fetching/route-handlers/1?search=hello"
              className="text-yellow-500"
            >
              <ArrowPrevious /> Item number one (with searchParams)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
