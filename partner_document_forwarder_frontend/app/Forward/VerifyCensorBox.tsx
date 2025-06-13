'use client';
import {Button, ButtonGroup, Card, Typography} from '@mui/material';

export default function VerifyCensorBox() {
  return (
    <Card className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden shadow-md">
      <div className="w-full bg-blue-100 p-1 shadow-md">
        <Typography variant="h2">
          Step 4: Verify removal of business partner's identifying info.
        </Typography>
      </div>
      <div className="p-1">
        {/* Censored image goes here. */}
        <p>Was our business partner's identifying info correctly censored by the AI?</p>
        <ButtonGroup>
          <Button variant="contained">Yes</Button>
          <Button variant="contained">No</Button>
        </ButtonGroup>
      </div>
    </Card>
  );
}
