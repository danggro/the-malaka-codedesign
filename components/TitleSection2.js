export default function TitleSection2(props) {
  const colors = {
    light: "bg-[#C6F4F8] text-primary",
    dark: "bg-[#C6F4F8]/10 text-primary",
  };
  const pickedColor = colors[props.color];
  return (
    <div
      className={`${pickedColor} text-sm px-5 py-[10px]  w-fit mx-auto rounded-full font-bold  tracking-widest uppercase`}
    >
      {props.children}
    </div>
  );
}
