export default function LinkNav(props) {
  return (
    <li>
      <a
        href={props.href}
        className={`hover:underline ${
          props.active ? "font-bold" : "text-white/80"
        }`}
      >
        {props.children}
      </a>
    </li>
  );
}
