export default function ItemManfaat(props) {
  return (
    <li className="flex items-center gap-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="47"
        fill="none"
        viewBox="0 0 30 47"
        className="flex-shrink-0"
      >
        <rect width="30" height="30" y="8.815" fill="#20D27D" rx="15"></rect>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 20.377l-6.875 6.875L10 24.127"
        ></path>
      </svg>
      <p className="text-dark/80 leading-[30px]">{props.children}</p>
    </li>
  );
}
