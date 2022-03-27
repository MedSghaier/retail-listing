import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

export default function SearchField({
  options,
  value,
  onChange,
  placeholder,
  onSelect,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const ref = useRef();

  //   Option click handler
  const onOptionClick = (option) => {
    onSelect(option);
    setShowOptions(false);
  };

  //   Input change handler
  const handleChange = (userInput) => {
    onChange(userInput);
    setCursor(-1);
    if (!showOptions) {
      setShowOptions(true);
    }
  };

  //   Keyboard navigation handler
  const handleNav = (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (cursor > 0) {
          setCursor((c) => c - 1);
        }
        break;
      case "ArrowDown":
        if (cursor < options.length - 1) {
          setCursor((c) => c + 1);
        }
        break;
      case "Enter":
        if (cursor >= 0 && cursor < options.length) {
          onOptionClick(options[cursor]);
        }
        break;
    }
  };

  //   Close the dropdown on outside click
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current.contains(e.target)) {
        setShowOptions(false);
        setCursor(-1);
      }
    };

    document.addEventListener("click", listener);
    document.addEventListener("focusin", listener);
    // Remove event listeners on cleanup
    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("focusin", listener);
    };
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <input
        placeholder={placeholder}
        type="text"
        className="w-full px-4 py-2 transition-colors duration-200 ease-in-out bg-white border border-transparent rounded-lg shadow-md outline-none border-1 h-9 focus:border-gray-100"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setShowOptions(true)}
        onKeyDown={handleNav}
      />

      <div
        className={`absolute w-full max-h-96 rounded-lg overflow-y-auto shadow-md z-30 bg-white mt-1 ${
          !showOptions && "hidden"
        } select-none`}
      >
        {options.length > 0 ? (
          options.map((option, i) => {
            return (
              <p
                className={classNames(
                  "px-4  hover:bg-gray-100 cursor-pointer min-h-[48px] py-1 leading-4 flex items-center",
                  cursor === i && "bg-gray-100"
                )}
                key={option.gtin}
                onClick={() => onOptionClick(option)}
              >
                <span>{option.title}</span>
              </p>
            );
          })
        ) : (
          <p className="px-4 py-2 text-gray-800">No results</p>
        )}
      </div>
    </div>
  );
}
