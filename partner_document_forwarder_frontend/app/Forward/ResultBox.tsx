'use client';
import { Card, Typography } from "@mui/material";

export default function ResultBox() {
  return (
    <Card className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden shadow-md">
      <div className="w-full bg-green-100 p-1 shadow-md">
        <Typography variant="h2">
          Document sent!
        </Typography>
      </div>
    </Card>
  );
}
