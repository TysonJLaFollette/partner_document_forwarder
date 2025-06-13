'use client';
import ToFromBox from "./ToFromBox";
import SelectDocumentBox from "./SelectDocumentBox";
import CensorNowBox from "./CensorNowBox";
import VerifyCensorBox from "./VerifyCensorBox";
import SendBox from "./SendBox";
import ResultBox from "./ResultBox";
import { Paper, Typography } from "@mui/material";

export default function ForwardForm() {
  return (
    <Paper className="w-3/4 bg-gray-50 border overflow-hidden">
      <div className="bg-blue-200 p-1 shadow-md">
        <Typography variant="h1">
          Partner Document Forwarder
        </Typography>
      </div>
      <div className="p-1">
        <p>Send anonymized documents from our business partners to our clients.</p>
        <div className="flex flex-col gap-1">
          <ToFromBox></ToFromBox>
          <SelectDocumentBox></SelectDocumentBox>
          <CensorNowBox></CensorNowBox>
          <VerifyCensorBox></VerifyCensorBox>
          <SendBox></SendBox>
          <ResultBox></ResultBox>
        </div>
      </div>
    </Paper>
    
  );
}
