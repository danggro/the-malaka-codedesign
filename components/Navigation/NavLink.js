import LinkNav from "./LinkNav";

export default function NavLink() {
  return (
    <ul className="flex gap-[50px]">
      <LinkNav href="#" active>
        Top
      </LinkNav>
      <LinkNav href="#">For Everyone</LinkNav>
      <LinkNav href="#">Benefit</LinkNav>
      <LinkNav href="#">Preview</LinkNav>
      <LinkNav href="#">Penulis</LinkNav>
    </ul>
  );
}
