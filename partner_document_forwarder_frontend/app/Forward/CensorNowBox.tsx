import Image from "next/image";

export default function CensorNowBox() {
  return (
    <div className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden">
      <div className="w-full bg-blue-100 p-1">
        <h2>Step 3: Censor business partner's identifying info using AI.</h2>
      </div>
      <div className="p-1">
        <button>Censor With AI Now</button>
      </div>
    </div>
  );
}
