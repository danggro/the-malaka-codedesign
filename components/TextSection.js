export default function TextSection(props) {
  return (
    <p className={`text-lg leading-[32px] ${props.color}`}>{props.children}</p>
  );
}
