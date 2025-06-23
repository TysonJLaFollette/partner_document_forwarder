import React from "react";
import { findByText, render, screen } from "@testing-library/react";
import ForwardForm from "./ForwardForm";
import ToFromBox from "./ToFromBox";
import SelectDocumentBox from "./SelectDocumentBox";
import CensorNowBox from "./CensorNowBox";
import VerifyCensorBox from "./VerifyCensorBox";
import SendBox from "./SendBox";
import ResultBox from "./ResultBox";

jest.mock("./ToFromBox", () => jest.fn(() => <></>)); // mock Child as an empty fragment
jest.mock("./SelectDocumentBox", () => jest.fn(() => <></>));
jest.mock("./CensorNowBox", () => jest.fn(() => <></>));
jest.mock("./VerifyCensorBox", () => jest.fn(() => <></>));
jest.mock("./SendBox", () => jest.fn(() => <></>));
jest.mock("./ResultBox", () => jest.fn(() => <></>));

describe("ForwardForm", () => {
  it("renders expected child components", () => {
    render(<ForwardForm />);
    expect(ToFromBox).toHaveBeenCalled();
    expect(SelectDocumentBox).toHaveBeenCalled();
    expect(CensorNowBox).toHaveBeenCalled();
    expect(VerifyCensorBox).toHaveBeenCalled();
    expect(SendBox).toHaveBeenCalled();
    expect(ResultBox).toHaveBeenCalled();
  });

  it("renders h1 with correct text", () => {
    render(<ForwardForm />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Partner Document Forwarder");
  });

  it("displays correct description", () => {
    render(<ForwardForm></ForwardForm>);
    const description = screen.getByText("Send anonymized documents from our business partners to our clients.");
    expect(description).toBeInTheDocument();
  });
});
