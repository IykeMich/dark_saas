import Image from "next/image";
import logoImage from "@/assets/images/logosaas.png"
import MenuIcon from "@/assets/icons/menu.svg"


export const Navbar = () => {
  return (
    <section className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to-right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blurd-md"></div>
            <Image src={logoImage} alt="saas logo" 
            className="w-12 h-12" />
            </div>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg md:hidden">
              <MenuIcon className="text-white" />
            </div>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
              <a href="" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
              <a href="" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
              <a href="" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
              <a href="" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
              <button className="bg-white py-2 px-4 rounded-lg">
                Get for free
              </button>
            </nav>
        </div>
      </div>
    </section>
  );
};
