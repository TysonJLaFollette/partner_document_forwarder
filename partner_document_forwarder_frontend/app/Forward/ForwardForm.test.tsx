import React from "react";
import { render, screen } from "@testing-library/react";
import ForwardForm from "./ForwardForm";
import ToFromBox from "./ToFromBox";
import SelectDocumentBox from "./SelectDocumentBox";

jest.mock("./ToFromBox", () => jest.fn(() => <></>)); // mock Child as an empty fragment
jest.mock("./SelectDocumentBox", () => jest.fn(() => <></>));

test("renders ToFromBox component", () => {
  render(<ForwardForm />);
  expect(ToFromBox).toHaveBeenCalled();
});

test("renders SelectDocumentBox component", () => {
  render(<ForwardForm />);
  expect(SelectDocumentBox).toHaveBeenCalled();
});

test("renders h1 with correct text", () => {
  render(<ForwardForm />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("Partner Document Forwarder");
});
