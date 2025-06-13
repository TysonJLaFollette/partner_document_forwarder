'use client';
import { Button, Card, Typography } from '@mui/material';

export default function CensorNowBox() {
  return (
    <Card className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden shadow-md">
      <div className="w-full bg-blue-100 p-1 shadow-md">
        <Typography variant="h2">
          Step 3: Censor business partner's identifying info using AI.
        </Typography>
      </div>
      <div className="p-1">
        <Button variant="contained">Censor With AI Now</Button>
      </div>
    </Card>
  );
}
