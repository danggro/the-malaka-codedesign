export default function Button(props) {
  const variants = {
    small: "px-[30px] py-[15px] font-bold text-lg text-dark bg-white",
    "large-blue":
      "bg-primary px-[45px] font-bold py-[25px] shadow-[0px_15px_30px_0_rgba(0,186,199,0.33)]",
  };
  const pickedVariant = variants[props.variant];
  return (
    <button
      className={`${pickedVariant} ${props.className} hover:opacity-80 rounded-full`}
    >
      {props.children}
    </button>
  );
}
