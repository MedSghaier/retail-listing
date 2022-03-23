import { render, screen } from "@testing-library/react";
import Chip from "./Chip";
describe("Chip", () => {
  it("should render a chip", () => {
    render(<Chip label="label" />);
    expect(screen.getByText("label")).toBeInTheDocument();
  });
});
