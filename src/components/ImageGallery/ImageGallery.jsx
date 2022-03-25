import { useState } from "react";
import classNames from "classnames";
const ImageGallery = ({ imageLinks }) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="flex gap-5">
      <div className="flex-grow-0 w-[150px]">
        <div className="flex flex-col gap-4">
          {imageLinks &&
            imageLinks.length > 0 &&
            imageLinks.map((link, index) => (
              <img
                className={classNames(
                  "cursor-pointer aspect-video object-contain border transition-colors ease-in-out duration-200",
                  index === currentImage
                    ? " border-gray-800"
                    : "border-gray-300"
                )}
                src={link}
                alt="product"
                key={index}
                onClick={() => setCurrentImage(index)}
              />
            ))}
        </div>
      </div>
      <div className="flex justify-center flex-1 border border-gray-800 h-[420px]">
        <img
          className="w-auto max-h-full "
          src={imageLinks[currentImage]}
          alt="wide-product"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
