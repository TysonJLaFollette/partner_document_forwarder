'use client';
import { Card, MenuItem, Select, Typography } from "@mui/material";

export default function ToFromBox() {
  return (
    <Card className="w-3/4 m-auto h-full bg-gray-50 rounded-md border overflow-hidden shadow-md">
      <div className="w-full bg-blue-100 p-1 shadow-md">
        <Typography variant="h2">
          Step 1: Select document source and recipient.
        </Typography>
      </div>
      <div className="p-1">
        <span>Send anonymized document from </span>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          label="Age"
          onChange={() =>{}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <span> to </span>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          label="Age"
          onChange={() => {}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
    </Card>
  );
}
