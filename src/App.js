import { useMemo, useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import Papa from "papaparse";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import SelectBox from "./components/SelectBox/SelectBox";
import useFetch from "./hooks/useFetch";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SwitchBox from "./components/SwitchBox/SwitchBox";

function App() {
  const filterOptions = useMemo(
    () => [
      { id: 1, name: "All", value: null },
      { id: 2, name: "Female", value: "female" },
      { id: 3, name: "Male", value: "male" },
      { id: 4, name: "Unisex", value: "unisex" },
    ],
    []
  );
  const [filter, setFilter] = useState(filterOptions[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showOnSale, setShowOnSale] = useState(false);

  const { data } = useFetch(`${process.env.PUBLIC_URL}/products.csv`);

  const productsList = useMemo(() => {
    if (data) {
      // Filter by gender if filter has a value
      if (filter.value && !showOnSale) {
        return Papa.parse(data, { delimiter: ",", header: true })
          .data.filter((product) => product.gender === filter.value)
          .slice(0, 100);
      }
      if (showOnSale) {
        return Papa.parse(data, { delimiter: ",", header: true })
          .data.filter((product) =>
            filter.value
              ? product.sale_price < product.price &&
                product.gender === filter.value
              : product.sale_price < product.price
          )
          .slice(0, 100);
      }
      // Return all products
      return Papa.parse(data, { delimiter: ",", header: true }).data.slice(
        0,
        100
      );
    }
    return null;
  }, [data, filter.value, showOnSale]);

  const productClickHandler = (product) => {
    // Set selected product
    setSelectedProduct(product);
    // Open modal with with the selected product
    setIsOpen(true);
  };

  return (
    <div className="w-screen h-screen p-2 overflow-hidden bg-gray-200">
      <div className="w-full h-full p-4 overflow-auto bg-white rounded shadow-md">
        <div className="grid items-end grid-cols-2 gap-4 my-5">
          {/* AutoComplete */}
          <SelectBox
            selected={filter}
            options={filterOptions}
            onChange={(selected) => setFilter(selected)}
          />
          <SwitchBox
            label="Sales"
            enabled={showOnSale}
            onChange={setShowOnSale}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
          {productsList &&
            productsList.length > 0 &&
            productsList.map((product) => (
              <>
                <Card
                  key={product.gtin}
                  product={product}
                  clickHandler={productClickHandler}
                />
              </>
            ))}
        </div>
        <Modal
          isOpen={Boolean(isOpen && selectedProduct)}
          title={`${selectedProduct?.title} - ${selectedProduct?.price}`}
          onClose={() => {
            setIsOpen(false);
            setSelectedProduct(null);
          }}
        >
          <ImageGallery
            imageLinks={selectedProduct?.additional_image_link.split(", ")}
          />
          <div className="absolute top-2 right-3">
            <Button onClick={() => setIsOpen(false)}>
              <RiCloseLine />
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
