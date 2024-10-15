import ArrowPrevious from "@/app/components/ArrowPrevious";
import Link from "next/link";

export default function Page({ params }: { params: { id?: string[] } }) {
  const { id } = params;
  return (
    <div className="p-4 bg-gray-800">
      My dynamic parameter(s): {id ? id.join(", ") : "none"}
    </div>
  );
}
