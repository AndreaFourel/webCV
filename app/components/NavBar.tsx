import Link from "next/link";
import LanguageButton from "./LanguageButton";

export default function NavBar() {
  const links = ["About", "Projects", "Skills", "Education", "Work History"];
  return (
    <nav className="flex font-courgette">
      {links.map((link, index)=>(
        <Link 
          className="pt-5 md:text-reg mdl:text-lg lg:text-xl xl:text-2xl text-dark-green md:mx-3 mdl:mx-4 xl:mx-5 
          2xl:mx-6 3xl:mx-7 4xl:mx-10
          relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-dark-green 
          after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 
          after:origin-center" 
          key={index} href={link == "About" ? '/' : link.toLowerCase()}>{link}
        </Link> 
      ))}
      <span className="fixed md:right-5 3xl:right-7 4xl:right-8 mt-5">
      <LanguageButton />
      </span>
    </nav>
  )
}
