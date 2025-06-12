import Image from "next/image";

export default function ResultBox() {
  return (
    <div className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden">
      <div className="w-full bg-blue-100 p-1">
        <h2>Document sent!</h2>
      </div>
    </div>
  );
}
