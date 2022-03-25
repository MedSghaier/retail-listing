import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  describe("Render", () => {
    it("Should render correctly", () => {
      const { container } = render(<Button>Hello</Button>);
      expect(screen.getByText("Hello")).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
  describe("Behavior", () => {
    it("Should trigger click callback", () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>Hello</Button>);

      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
