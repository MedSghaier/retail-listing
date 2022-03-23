import Chip from "../Chip/Chip";

const Card = ({ product }) => {
  const { image_link, title, sale_price, price, gender } = product;

  return (
    <div
      className="rounded shadow-sm relative bg-white block"
      data-testid="card"
    >
      <div className="relative pb-[75%] overflow-hidden group cursor-pointer">
        <img
          className="absolute z-0 top-0 left-0 w-full h-full scale-100 object-cover group-hover:scale-75 transition-transform ease-in-out duration-500"
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
            className="text-lg font-lato mb-2 font-bold cursor-default"
            data-testid="card-title"
          >
            {title}
          </h2>
        )}
        {price && (
          <h3
            className="text-sm font-lato text-gray-600"
            data-testid="card-price"
          >
            {price}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Card;
