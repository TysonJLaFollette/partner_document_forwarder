import Image from "next/image";
import ToFromBox from "./ToFromBox";
import SelectDocumentBox from "./SelectDocumentBox";
import CensorNowBox from "./CensorNowBox";
import VerifyCensorBox from "./VerifyCensorBox";
import SendBox from "./SendBox";
import ResultBox from "./ResultBox";

export default function ForwardForm() {
  return (
    <div className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden">
      <div className="bg-blue-200 p-1">
        <h1>Partner Document Forwarder</h1>
      </div>
      <div className="p-1">
        <p>Send anonymized documents from our business partners to our clients.</p>
        <ToFromBox></ToFromBox>
        <SelectDocumentBox></SelectDocumentBox>
        <CensorNowBox></CensorNowBox>
        <VerifyCensorBox></VerifyCensorBox>
        <SendBox></SendBox>
        <ResultBox></ResultBox>
      </div>
    </div>
  );
}
