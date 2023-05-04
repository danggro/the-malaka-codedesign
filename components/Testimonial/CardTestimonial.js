import Image from "next/image";

export default function CardTestimonial(props) {
  return (
    <div className="p-[30px] w-4/12 bg-white shadow-box-black-large rounded-[10px]">
      <p className="text-dark">{props.desc}</p>
      <div className="flex gap-4 mt-[30px]">
        <Image src={props.src} alt={props.alt} className="flex-shrink-0" />
        <div>
          <p className="font-medium text-dark">{props.name}</p>
          <p className="mt-1 text-sm font-medium text-dark/80">
            {props.status}
          </p>
        </div>
      </div>
    </div>
  );
}
