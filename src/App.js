import { useMemo, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

// Components
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import SelectBox from "./components/SelectBox/SelectBox";
import SearchField from "./components/SearchField/SearchField";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SwitchBox from "./components/SwitchBox/SwitchBox";
// Utils
import parser from "./utils/parser";
// Hooks
import useFetch from "./hooks/useFetch";
function App() {
  // Gender select optionsList
  // Needs to be memoised to object referential integrity
  const genderFilterOptions = useMemo(
    () => [
      { id: 1, name: "All", value: null },
      { id: 2, name: "Female", value: "female" },
      { id: 3, name: "Male", value: "male" },
      { id: 4, name: "Unisex", value: "unisex" },
    ],
    []
  );
  // Gender filter state
  const [filter, setFilter] = useState(genderFilterOptions[0]);
  // Currently selected product state
  const [clickedProduct, setClickedProduct] = useState(null);
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Sales switch state
  const [showOnSale, setShowOnSale] = useState(false);
  // Search field state
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useFetch(`${process.env.PUBLIC_URL}/products.csv`);

  const productsList = useMemo(() => {
    if (data) {
      // Filter by gender if sales filter has a value
      if (filter.value && !showOnSale) {
        return parser(data)
          .filter(
            (product) =>
              product.gender === filter.value &&
              product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          )
          .slice(0, 100);
      }
      if (showOnSale) {
        return parser(data)
          .filter((product) =>
            filter.value
              ? product.sale_price < product.price &&
                product.gender === filter.value &&
                product.title
                  .toLowerCase()
                  .startsWith(searchQuery.toLowerCase())
              : product.sale_price < product.price &&
                product.title
                  .toLowerCase()
                  .startsWith(searchQuery.toLowerCase())
          )
          .slice(0, 100);
      }
      // Return all products
      return parser(data)
        .filter((product) =>
          product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
        .slice(0, 100);
    }
    return null;
  }, [data, filter.value, showOnSale, searchQuery]);

  const productClickHandler = (product) => {
    // Set selected product
    setClickedProduct(product);
    // Open modal with with the selected product
    setIsModalOpen(true);
  };

  const onSearchFieldSelection = (product) => {
    setSearchQuery(product.title);
    console.log(product);
  };
  return (
    <div className="w-screen h-screen p-2 overflow-hidden bg-gray-200">
      <div className="w-full h-full p-4 overflow-auto bg-white rounded shadow-md">
        <div className="grid items-end grid-cols-3 gap-4 my-5">
          <SearchField
            options={productsList ?? []}
            value={searchQuery}
            onChange={setSearchQuery}
            onSelect={onSearchFieldSelection}
            placeholder="Search"
          />
          <SelectBox
            selected={filter}
            options={genderFilterOptions}
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
          isOpen={Boolean(isModalOpen && clickedProduct)}
          title={`${clickedProduct?.title} - ${clickedProduct?.price}`}
          onClose={() => {
            setIsModalOpen(false);
            setClickedProduct(null);
          }}
        >
          <ImageGallery
            imageLinks={clickedProduct?.additional_image_link.split(", ")}
          />
          <div className="absolute top-2 right-3">
            <Button onClick={() => setIsModalOpen(false)}>
              <RiCloseLine />
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
