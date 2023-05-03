export default function CardPaket(props) {
  return (
    <div className={` w-4/12  rounded-[10px] p-[60px] bg-white`}>
      <p className="mb-[10px] font-medium text-primary">{props.paket}</p>
      <h4 className="text-[#001533] font-medium text-32 mb-[30px]">
        Rp.{props.harga}
      </h4>
      <ul className={`space-y-5`}>{props.children}</ul>
      <button
        className={`mt-10 flex justify-center py-[15px] hover:opacity-75 font-semibold shadow-box rounded-[6px] bg-primary w-full`}
      >
        Beli Sekarang
      </button>
    </div>
  );
}
