const Chip = (props) => {
  const { label } = props;

  return (
    <p className="inline-flex justify-center items-center rounded-full h-5 px-2 border-2  bg-red-600 border-white font-poppins">
      <span className="text-[10px] leading-[1] text-white">{label}</span>
    </p>
  );
};

export default Chip;
