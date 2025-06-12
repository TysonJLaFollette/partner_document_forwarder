import Image from "next/image";

export default function VerifyCensorBox() {
  return (
    <div className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden">
      <div className="w-full bg-blue-100 p-1">
        <h2>Step 4: Verify removal of business partner's identifying info.</h2>
      </div>
      <div className="p-1">
        {/* Censored image goes here. */}
        <p>Was our business partner's identifying info correctly censored by the AI?</p>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
}
