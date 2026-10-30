import { Link } from "react-router-dom";

export default function CradMenu({ to, img, title, desc }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-10 text-center shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    >
      <img src={img} alt={title} className="h-36 w-36 object-contain" />
      <h2 className="mt-6 text-base font-bold">{title}</h2>
      <p className="mt-3 text-sm font-light text-gray-500">{desc}</p>
    </Link>
  );
}