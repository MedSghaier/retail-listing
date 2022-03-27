import { render, screen, waitFor } from "@testing-library/react";
import SwitchBox from "./SwitchBox";

describe("SwitchBox", () => {
  describe("Render", () => {
    it("Should render off by default", () => {
      const { container } = render(<SwitchBox label="Test" />);
      expect(screen.queryByTestId("switch-off")).toBeInTheDocument;
      expect(container).toMatchSnapshot();
    });
    it("Should render on by default", () => {
      render(<SwitchBox label="Test" enabled={true} />);
      expect(screen.queryByTestId("switch-on")).toBeInTheDocument;
    });
  });
  describe("Behavior", () => {
    it("Should toggle its state", () => {
      const onChange = jest.fn();
      render(<SwitchBox label="Test" onChange={onChange} />);
      expect(screen.getByTestId("switch-off")).toBeInTheDocument;
      const switchButton = screen.getByTestId("switch-button");
      switchButton.click();
      expect(screen.queryByTestId("switch-on")).toBeInTheDocument;
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
