export default function SubTitleSection(props) {
  return (
    <h2 className={`text-32 font-medium ${props.color}`}>{props.children}</h2>
  );
}
