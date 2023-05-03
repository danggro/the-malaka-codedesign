export default function ItemPaket(props) {
  return (
    <li className="flex items-center gap-[10px]">
      {!props.not ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          fill="none"
          viewBox="0 0 21 20"
        >
          <rect width="20" height="20" x="0.5" fill="#20D27D" rx="10"></rect>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.5 7.25L9 12.75l-2.5-2.5"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          fill="none"
          viewBox="0 0 21 20"
        >
          <rect width="20" height="20" x="0.5" fill="#F52E52" rx="10"></rect>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7.5l-5 5M8 7.5l5 5"
          ></path>
        </svg>
      )}

      <p className="text-[#001533]">{props.children}</p>
    </li>
  );
}
