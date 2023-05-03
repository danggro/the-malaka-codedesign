import Button from "../Button";

export default function NavRight() {
  return (
    <div className="flex items-center gap-6">
      <Button variant="yellow">Masuk</Button>
      <a href="#" className="hover:underline">
        Daftar
      </a>
    </div>
  );
}
