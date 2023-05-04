import Link from "next/link";

export default function LinkFooter(props) {
  return (
    <li>
      <Link
        href={props.href}
        className="leading-[28px] text-white/80 hover:underline"
      >
        {props.children}
      </Link>
    </li>
  );
}
