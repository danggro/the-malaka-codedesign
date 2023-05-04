export default function ItemFooter(props) {
  return (
    <div className="w-4/12">
      <h6 className="text-sm font-bold tracking-widest uppercase text-white/60">
        {props.title}
      </h6>
      <ul className="mt-5 space-y-2">{props.children}</ul>
    </div>
  );
}
