import Image from "next/image";

export default function SendBox() {
  return (
    <div className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden">
      <div className="w-full bg-blue-100 p-1">
        <h2>Step 5: Send the document.</h2>
      </div>
      <div className="p-1">
        <button>Send Now</button>
      </div>
    </div>
  );
}
