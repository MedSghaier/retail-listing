import classNames from "classnames";

const Button = ({ children, onClick, variant = "raised", ...props }) => {
  const baseClasses =
    "text-base w-8 h-8 inline-flex flex-shrink-0 rounded-full items-center justify-center leading-1 transition duration-200 focus:outline-none";
  const outline =
    "bg-white text-gray-800 border border-gray-800 ring-2 ring-transparent hover:bg-gray-200 active:bg-gray-50 active:border-gray-500 active:text-secondary active:ring-transparent focus-visible:border-gray-800 focus-visible:ring-gray-400";

  const raised =
    "bg-white shadow-md text-secondary border border-transparent ring-2 ring-transparent ring-offset-1 ring-offset-transparent hover:bg-gray-200 active:bg-gray-200 active:shadow-none active:border-gray-500 active:ring-transparent focus-visible:shadow-none focus-visible:ring-gray-400 focus-visible:ring-offset-white";
  const buttonClasses = classNames(
    baseClasses,
    variant === "outline" && outline,
    variant === "raised" && raised
  );
  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
