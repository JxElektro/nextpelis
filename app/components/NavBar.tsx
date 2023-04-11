import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-wrap items-center w-full p-3 bg-gradient-to-r from-purple-800 via-purple-700 to-blue-600">
      <div className="flex items-center">
        <Link href="/" title="PelisNext" className="flex items-center hover:opacity-75 transition ease-in-out duration-150">
            <Image
              src="/logo.png"
              alt="PelisNext"
              width={60}
              height={90}
              className="mr-3"
            />
            <h1 className="text-white font-bold text-2xl">PelisNext</h1>
          
        </Link>
      </div>
    </nav>
  );
}
