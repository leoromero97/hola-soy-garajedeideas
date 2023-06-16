import Image from "next/image";
import leoIMage from "@/assets/images/leonardo_romero.jpg";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="flex flex-col justify-between flex-1 py-20 px-4 border-r border-r-zinc-800 w-[20%] h-screen fixed z-10">
      <div className="flex gap-4 items-center">
        <div className="flex rounded-full h-20 w-20 overflow-hidden">
          <Image src={leoIMage} alt="Imagen de Leo Romero" className="object-cover" />
        </div>
        <span className="font-semibold text-2xl">
          Leo
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {navLinks.map(({ href, id, label }) =>
          <Link
            key={id}
            href={href}
            className="font-semibold text-xl px-6 py-3 rounded-lg hover:bg-zinc-800"
          >
            {label}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
