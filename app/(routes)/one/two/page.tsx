import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowPrevious from "@/app/components/ArrowPrevious";
import ArrowNext from "@/app/components/ArrowNext";

const THROW_NOT_FOUND = false;
const THROW_ERROR = false;

export default function Page() {
  if (THROW_NOT_FOUND) {
    // triggers not-found.tsx
    notFound();
  }

  if (THROW_ERROR) {
    // triggers error.tsx
    throw new Error("This is an intentional error");
  }

  return (
    <div className="p-4 bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Two Page Content</h2>
      <p className="mb-4">
        This is the second level of our nested routing example. Notice how the
        layouts are wrapping each other, and the template is providing some
        interactive elements.
      </p>
      <div className="space-x-4">
        <ul className="space-y-2">
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/one" className="text-cyan-400 ">
              <ArrowPrevious /> Back to One
            </Link>
          </li>
          <li className="transition-all duration-300 hover:translate-x-2">
            <Link href="/one/two/three" className="text-cyan-400">
              Go to One/Two/Three <ArrowNext />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
