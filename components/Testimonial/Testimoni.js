import ArrowR from "./ArrowR";
import CardTestimonial from "./CardTestimonial";
import Ava1 from "@/public/testimonial/Ava1.png";
import Ava2 from "@/public/testimonial/Ava2.png";
import Ava3 from "@/public/testimonial/Ava3.png";

export default function Testimoni() {
  return (
    <>
      <div className="flex gap-[30px] ">
        <CardTestimonial
          src={Ava1}
          alt="Ava1"
          desc="“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”"
          name="Ahamd Saugi"
          status="Mahasiswa"
        />
        <CardTestimonial
          src={Ava2}
          alt="Ava2"
          desc="“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”"
          name="Dedik Sugiharto"
          status="Front-end Engineer"
        />
        <CardTestimonial
          src={Ava3}
          alt="Ava3"
          desc="“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”"
          name="Lutfi Hanafiah Ramadhan"
          status="IT Support"
        />
      </div>
      <button className="absolute -right-[25px] w-[50px] h-[50px] rounded-full bg-primary shadow-box grid place-items-center top-[105px] z-[60]">
        <ArrowR />
      </button>
      <button className="absolute -left-[25px] w-[50px] h-[50px] rounded-full bg-primary shadow-box grid place-items-center top-[105px] z-[60] ">
        <div className="rotate-180">
          <ArrowR />
        </div>
      </button>
      <div className="flex gap-2 mx-auto w-fit mt-[46px]">
        <span className="bullet-testi bg-primary"></span>
        <span className="bullet-testi bg-dark/10"></span>
        <span className="bullet-testi bg-dark/10"></span>
        <span className="bullet-testi bg-dark/10"></span>
      </div>
    </>
  );
}
