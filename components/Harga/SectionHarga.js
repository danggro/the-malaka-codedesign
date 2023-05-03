import Container from "../Container";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import TitleSection2 from "../TitleSection2";
import BGHarga from "./BG-harga";
import CardPaket from "./CardPaket";
import ItemPaket from "./ItemPaket";

export default function SectionHarga() {
  return (
    <section className="relative pt-[129px] bg-[#EDFCFD]">
      <div className="absolute top-0 ">
        <BGHarga />
      </div>
      <Container>
        <div className="py-[200px] relative z-10  ">
          <div className="w-8/12 mx-auto text-center">
            <TitleSection2 color="dark">harga buku</TitleSection2>
            <SubTitleSection color="text-white mt-[10px] mb-5">
              Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di
              perangkat kamu
            </SubTitleSection>
            <TextSection color="text-white/80 w-8/12 mx-auto">
              Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis.
              Hak cipta dilindungi undang-undang.
            </TextSection>
          </div>
          <div className="flex items-center gap-[30px] my-20 relative">
            <CardPaket paket="Buku Digital" harga="100.000">
              <ItemPaket>Buku Lengkap</ItemPaket>
              <ItemPaket>Akses secara digital</ItemPaket>
              <ItemPaket not>Buku Fisik</ItemPaket>
              <ItemPaket>Mendapat pembaruan</ItemPaket>
              <ItemPaket>Konsultasi</ItemPaket>
              <ItemPaket>Dapat diunduh</ItemPaket>
            </CardPaket>
            <CardPaket paket="Buku Fisik" harga="185.000">
              <ItemPaket>Buku Lengkap</ItemPaket>
              <ItemPaket not>Akses secara digital</ItemPaket>
              <ItemPaket>Buku Fisik</ItemPaket>
              <ItemPaket not>Mendapat pembaruan</ItemPaket>
              <ItemPaket>Konsultasi</ItemPaket>
              <ItemPaket>Dapat diunduh</ItemPaket>
            </CardPaket>
            <CardPaket paket="Buku Digital + Fisik" harga="250.000">
              <ItemPaket>Buku Lengkap</ItemPaket>
              <ItemPaket>Akses secara digital</ItemPaket>
              <ItemPaket>Buku Fisik</ItemPaket>
              <ItemPaket>Mendapat pembaruan</ItemPaket>
              <ItemPaket>Konsultasi</ItemPaket>
              <ItemPaket>Dapat diunduh</ItemPaket>
            </CardPaket>
          </div>
          <div className="space-y-2 text-center text-white/80">
            <p>*Buku digital akan dikirimkan ke alamat email kamu</p>
            <p>*Buku fisik dikirim 7 hari setelah pemesanan</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
