import Chip from "../Chip/Chip";

const Card = ({ product, clickHandler }) => {
  const { image_link, title, price, gender } = product;

  return (
    <button
      className="relative block bg-white rounded shadow-sm"
      data-testid="card"
      tabIndex={0}
      onClick={() => clickHandler(product)}
    >
      <div className="relative pb-[75%] overflow-hidden group cursor-pointer">
        {/* More about browser image lazy loading */}
        {/* https://web.dev/browser-level-image-lazy-loading/ */}
        <img
          className="absolute top-0 left-0 z-0 object-cover w-full h-full transition-transform duration-500 ease-in-out scale-100 group-hover:scale-75"
          src={image_link ?? ""}
          alt={title ?? ""}
          loading="lazy"
        />
        <div className="absolute top-2 right-2 z-[1]">
          <Chip label={`${gender}`.toUpperCase()} />
        </div>
      </div>
      <div className="p-4">
        {title && (
          <h2
            className="mb-2 text-lg font-bold cursor-default font-lato"
            data-testid="card-title"
          >
            {title}
          </h2>
        )}
        {price && (
          <h3
            className="text-sm text-gray-600 font-lato"
            data-testid="card-price"
          >
            {price}
          </h3>
        )}
      </div>
    </button>
  );
};

export default Card;
