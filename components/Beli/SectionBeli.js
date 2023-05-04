import Button from "../Button";
import Container from "../Container";
import ArrowR from "../Hero/Icon/ArrowR";
import Download from "../Hero/Icon/Download";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import TitleSection2 from "../TitleSection2";

export default function SectionBeli() {
  return (
    <section>
      <Container>
        <div className="w-8/12 mx-auto py-[150px] text-center">
          <TitleSection2 color="light">beli buku</TitleSection2>
          <SubTitleSection color="text-dark mt-[10px] mb-5">
            Andaingin segera memesan buku ini?
          </SubTitleSection>
          <TextSection color="text-dark/80 w-6/12 mx-auto">
            Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.
          </TextSection>
          <div className="flex justify-center gap-10 mt-10 text-left">
            <div className="flex gap-[30px] py-[6px] text-dark">
              <Download />
              <div>
                <p className="font-bold tracking-widest text-dark/80">
                  SUDAH TERJUAL
                </p>
                <p className="text-2xl font-semibold leading-[29px] mt-[5px]">
                  501,234+
                </p>
              </div>
            </div>
            <Button variant="large-blue" className="flex items-center gap-4">
              Beli Sekarang
              <ArrowR />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
