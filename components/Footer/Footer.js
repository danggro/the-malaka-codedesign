import Button from "../Button";
import Container from "../Container";
import ItemFooter from "./ItemFooter";
import LinkFooter from "./LinkFooter";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-dark rounded-tr-[50px]">
      <Container>
        <div className="flex justify-between py-[50px] items-center">
          <div className="w-6/12">
            <h3 className="text-[26px] font-medium">
              Sudah siap meningkatkan skill kamu?
            </h3>
            <p className="text-lg font-medium text-white/80">
              Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
              pertanyaan kamu di halaman bantuan.
            </p>
          </div>
          <div className="flex gap-[30px]">
            <Button variant="footer-dark">Pusat Bantuan</Button>
            <Button variant="footer-blue">Mendaftar</Button>
          </div>
        </div>
        <div className="flex py-[50px] gap-[30px] ">
          <div className="w-6/12 ">
            <Logo />
            <h5 className="text-lg font-bold my-[15px]">The Malaka</h5>
            <p className="text-white-/80">
              Malaka adalah situs penyedia kursus ilmu komputer berbahasa
              Indonesia, mulai dari pengembangan hingga desain grafis.
            </p>
          </div>
          <div className="flex w-6/12 gap-[30px]">
            <ItemFooter title="products">
              <LinkFooter href="/">Courses</LinkFooter>
              <LinkFooter href="/">Books</LinkFooter>
              <LinkFooter href="/">Freebies</LinkFooter>
              <LinkFooter href="/">Classes</LinkFooter>
            </ItemFooter>
            <ItemFooter title="Company">
              <LinkFooter href="/">About Us</LinkFooter>
              <LinkFooter href="/">Contact</LinkFooter>
              <LinkFooter href="/">Privacy Policy</LinkFooter>
              <LinkFooter href="/">Terms of Service</LinkFooter>
              <LinkFooter href="/">Help</LinkFooter>
            </ItemFooter>
            <ItemFooter title="Get in touch">
              <LinkFooter href="/">Twitter</LinkFooter>
              <LinkFooter href="/">Facebook</LinkFooter>
              <LinkFooter href="/">Dribble</LinkFooter>
            </ItemFooter>
          </div>
        </div>
        <div className="text-center py-[50px]">
          <p className="text-xs font-bold tracking-widest uppercase text-white/40">
            COPYRIGHT &copy; 2022 — DESIGN NAUVAL
          </p>
        </div>
      </Container>
    </footer>
  );
}
