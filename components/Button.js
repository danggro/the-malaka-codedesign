export default function Button(props) {
  const variants = {
    small: "px-[30px] py-[15px] text-lg text-dark bg-white rounded-full",
    "large-blue":
      "bg-primary px-[45px]  py-[25px] rounded-full shadow-[0px_15px_30px_0_rgba(0,186,199,0.33)]",
    "footer-dark":
      "px-[45px] py-[25px] rounded-[10px] bg-white/5 leading-[21px]",
    "footer-blue":
      "px-[45px] py-[25px] rounded-[10px] bg-primary shadow-box leading-[21px]",
  };
  const pickedVariant = variants[props.variant];
  return (
    <button
      className={`${pickedVariant} ${props.className} hover:opacity-80 font-bold`}
    >
      {props.children}
    </button>
  );
}
