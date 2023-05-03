export default function ItemSelain(props) {
  return (
    <div className="flex gap-5 p-[30px] rounded-[15px] bg-white group shadow-box-black">
      {props.icon}
      <div className="flex gap-[15px] items-center">
        <div>
          <h6 className="text-lg font-medium text-primary">{props.title}</h6>
          <p className="text-dark/80 leading-[30px]">{props.desc}</p>
        </div>
        <button className="grid flex-shrink-0 w-10 h-10 transition-all duration-200 ease-out rounded-full bg-primary/10 text-primary place-items-center group-hover:bg-primary group-hover:text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
            viewBox="0 0 24 25"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12.803h14M12 5.802l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
