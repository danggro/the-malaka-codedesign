import Button from "../Button";
import Container from "../Container";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavRight from "./NavRight";

export default function NavBar() {
  return (
    <nav className="relative z-50 pt-12">
      <Container>
        <div className="flex items-center justify-between">
          <NavLogo />
          <NavLink />
          <Button variant="small">Download</Button>
        </div>
      </Container>
    </nav>
  );
}
