import Card from "./components/Card/Card";

function App() {
  const products = [
    {
      title: "Weekday THURSDAY Jeans Slim Fit black",
      gtin: 2001007926858,
      gender: "female",
      sale_price: "39.95 EUR",
      price: "39.95 EUR",
      image_link:
        "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
      additional_image_link:
        "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
    },
    {
      title: "Weekday THURSDAY Jeans Slim Fit black",
      gtin: 2001008772980,
      gender: "female",
      sale_price: "39.95 EUR",
      price: "39.95 EUR",
      image_link:
        "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
      additional_image_link:
        "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
    },
    {
      title: "Weekday THURSDAY Jeans Slim Fit black",
      gtin: 2001008773000,
      gender: "female",
      sale_price: "39.95 EUR",
      price: "39.95 EUR",
      image_link:
        "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
      additional_image_link:
        "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg",
    },
  ];
  return (
    <div className="h-screen w-screen bg-gray-200 p-2">
      <div className="h-full w-full rounded bg-white p-4 shadow-md">
        <div className="grid gap-4 grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
