import { render, screen } from "@testing-library/react";

import Card from "./Card";
const product = {
  title: "Weekday THURSDAY Jeans Slim Fit black",
  gtin: 2001008773000,
  gender: "female",
  sale_price: "39.95 EUR",
  price: "39.95 EUR",
  image_link:
    "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
  additional_image_link:
    "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
};
describe("Card", () => {
  it("should render without crashing", () => {
    const { container } = render(<Card product={product} />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("card-title")).toBeInTheDocument();
    expect(screen.getByTestId("card-price")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render a product correctly", () => {
    render(<Card product={product} />);
    const title = screen.getByTestId("card-title");
    const price = screen.getByTestId("card-price");
    expect(title).toHaveTextContent("Weekday THURSDAY Jeans Slim Fit black");
    expect(price).toHaveTextContent("39.95 EUR");
  });
});
