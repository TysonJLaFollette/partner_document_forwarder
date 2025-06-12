import Image from "next/image";

export default function ToFromBox() {
  return (
    <div className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden">
      <div className="w-full bg-blue-100 p-1">
        <h2>Step 1: Select document source and recipient.</h2>
      </div>
      <div className="p-1">
        <p>Send anonymized document from PARTNERDROPDOWN to CLIENTDROPDOWN.</p>
      </div>
    </div>
  );
}
