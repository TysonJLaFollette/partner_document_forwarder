import React from "react";
import { findByText, render, screen, waitFor } from "@testing-library/react";
import ToFromBox from "./ToFromBox";
import fetchMock from 'jest-fetch-mock';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("ToFromBox", () => {
  it("renders h2 with correct text", () => {
    render(<ToFromBox />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Step 1: Select document source and recipient.");
  });

  it("displays correct description", () => {
    render(<ToFromBox />);
    const description = screen.getByText("Send anonymized document from");
    expect(description).toBeInTheDocument();
  });

  it('renders the business partner Select component', () => {
    const { container } = render(<ToFromBox />);
    const businessSelect = container.querySelector('#business-partner-select');
    expect(businessSelect).toBeInTheDocument();
  });

  it('renders the client Select component', () => {
    const { container } = render(<ToFromBox />);
    const clientSelect = container.querySelector('#client-select');
    expect(clientSelect).toBeInTheDocument();
  });

  // it('renders a MenuItem for each BusinessPartner fetched', async () => {
  //   fetchMock.enableMocks();
  //   const mockData = {
  //     1: 'Acme Inc',
  //     2: 'Beta Corp',
  //     3: 'Gamma LLC',
  //   };

  //   fetchMock.mockResponseOnce(JSON.stringify(mockData));

  //   render(<ToFromBox />);

  //   const user = userEvent.setup();
  //   const select = screen.getByTestId('business-partner-select');
  //   await user.click(select);

  //   await waitFor(() => {
  //     expect(screen.getByText('Acme Inc')).toBeInTheDocument();
  //   });

  //   for (const name of Object.values(mockData)) {
  //     expect(screen.getByText(name)).toBeInTheDocument();
  //   }
  // });
});
