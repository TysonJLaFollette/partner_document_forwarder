'use client';
import { Card, Typography } from "@mui/material";

export default function ToFromBox() {
  return (
    <Card className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden shadow-md">
      <div className="w-full bg-blue-100 p-1 shadow-md">
        <Typography variant="h2">
          Step 1: Select document source and recipient.
        </Typography>
      </div>
      <div className="p-1">
        <p>Send anonymized document from PARTNERDROPDOWN to CLIENTDROPDOWN.</p>
      </div>
    </Card>
  );
}
