import { render, screen } from "@testing-library/react";
import Home from "../../app/page";

test("renders the Home page heading", () => {
  render(<Home />);
  const heading = screen.getByText("To get started, edit the page.tsx file.");
  expect(heading).toBeInTheDocument();
});
