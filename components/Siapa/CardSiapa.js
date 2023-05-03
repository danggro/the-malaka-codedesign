import Image from "next/image";

export default function CardSiapa(props) {
  return (
    <div className="flex-shrink-0 w-4/12">
      <Image src={props.src} alt={props.alt} className="w-full" />
      <div className="text-center">
        <h4 className="text-xl font-medium text-black mt-5 mb-[10px]">
          {props.title}
        </h4>
        <p className="text-dark/80 leading-[32px] px-2">{props.desc}</p>
      </div>
    </div>
  );
}
