import { useMemo, useState, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import { VariableSizeList as List } from "react-window";

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
import arrayToMatrix from "./utils/arrayToMatrix";
// Hooks
import useFetch from "./hooks/useFetch";
function App() {
  // Gender select optionsList
  // Needs to be memoised for object referential integrity
  const genderFilterOptions = useMemo(
    () => [
      { id: 1, name: "All", value: null },
      { id: 2, name: "Female", value: "female" },
      { id: 3, name: "Male", value: "male" },
      { id: 4, name: "Unisex", value: "unisex" },
    ],
    []
  );

  // Paper wrapper ref
  const paperWrapperRef = useRef(null);
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
        return parser(data).filter(
          (product) =>
            product.gender === filter.value &&
            product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
      }
      // Show products on sale
      // Check if other filters are set and filter accordingly
      if (showOnSale) {
        return parser(data).filter((product) =>
          filter.value
            ? product.sale_price < product.price &&
              product.gender === filter.value &&
              product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            : product.sale_price < product.price &&
              product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
      }
      // Return all products
      return parser(data).filter((product) =>
        product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
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
  };

  return (
    <div className="w-screen h-screen p-2 overflow-hidden bg-gray-200">
      <div
        className="w-full h-full p-4 overflow-hidden bg-white rounded shadow-md"
        ref={paperWrapperRef}
      >
        <div className="sticky z-30 px-4 py-5 -mx-4 bg-white -top-6">
          <div className="grid items-end grid-cols-3 gap-4">
            {/* Search by title */}
            <SearchField
              options={productsList?.slice(0, 100) ?? []}
              value={searchQuery}
              onChange={setSearchQuery}
              onSelect={onSearchFieldSelection}
              placeholder="Search"
            />
            {/* Filter by gender */}
            <SelectBox
              selected={filter}
              options={genderFilterOptions}
              onChange={(selected) => setFilter(selected)}
            />
            {/* Show items on sale */}
            <SwitchBox
              label="Sales"
              enabled={showOnSale}
              onChange={setShowOnSale}
            />
          </div>
        </div>
        {productsList && productsList.length > 0 && (
          <List
            height={paperWrapperRef?.current?.clientHeight}
            itemCount={arrayToMatrix(productsList)?.length}
            itemSize={() => Math.ceil(paperWrapperRef.current.clientWidth / 3)}
            width={paperWrapperRef?.current?.clientWidth}
          >
            {({ index, style }) => (
              <div className="flex gap-4 py-5 pr-5" style={{ ...style }}>
                {arrayToMatrix(productsList) &&
                  arrayToMatrix(productsList).length &&
                  arrayToMatrix(productsList)[index]?.map((item) => (
                    <div className="flex-grow-0 w-1/3 h-full" key={item.gtin}>
                      <Card product={item} clickHandler={productClickHandler} />
                    </div>
                  ))}
              </div>
            )}
          </List>
        )}
        {/* ImageGallery Modal */}
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
