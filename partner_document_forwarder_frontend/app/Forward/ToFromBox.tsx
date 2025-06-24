'use client';
import { Card, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function ToFromBox() {
  const [businessPartners, setBusinessPartners] = useState<Record<number, string>>({});

  useEffect(() => {
    fetch('/api/businessPartners')
      .then((res) => res.json())
      .then((data) => {
        console.log('RAW response:', data);
        setBusinessPartners(data)
      });
  }, []);
  
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
          labelId="business-partner-select-label"
          id="business-partner-select"
          data-testid="business-partner-select"
          value={""}
          label="Business Partner"
          onChange={() =>{}}
        >
          {
            Object.entries(businessPartners).map(([id, name]) => (
              <MenuItem key={id} value={id}>{name}</MenuItem>
            ))
          }
        </Select>
        <span> to </span>
        <Select
          labelId="client-select-label"
          id="client-select"
          data-testid="client-select"
          value={10}
          label="Client"
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
