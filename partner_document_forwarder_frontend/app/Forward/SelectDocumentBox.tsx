'use client';
import { Card, Typography } from "@mui/material";

type SelectDocumentBoxProps = {
  shouldRender: boolean
};

export default function SelectDocumentBox({shouldRender}: SelectDocumentBoxProps) {
  if (!shouldRender){
    return (<></>);
  } else {
    return (
      <Card className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden shadow-md">
        <div className="w-full bg-blue-100 p-1 shadow-md">
          <Typography variant="h2">
            Step 2: Select business partner's document.
          </Typography>
        </div>
        <div className="p-1">
          {/* Carousel goes here */}
        </div>
      </Card>
    );
  }
}
