export default function TitleSection(props) {
  return (
    <div className="flex gap-[10px] items-center">
      <span className={`block ${props.colorLine} w-[30px] h-[2px]`}></span>
      <h6
        className={`font-bold text-sm tracking-widest uppercase ${props.colorText}`}
      >
        {props.children}
      </h6>
    </div>
  );
}
