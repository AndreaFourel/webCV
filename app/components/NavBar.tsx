import Link from "next/link";
import LanguageButton from "./LanguageButton";

export default function NavBar() {
  const links = ["About", "Projects", "Work History", "Skills", "Hobbies"];
  return (
    <nav className="">
      {links.map((link, index)=>(
        <Link className="pt-5 md:text-reg mdl:text-lg lg:text-xl xl:text-2xl text-dark-green md:mx-3 mdl:mx-4 xl:mx-5 2xl:mx-6 3xl:mx-7 4xl:mx-10" key={index} href="">{link}</Link> 
      ))}
      <span className="fixed md:right-5 3xl:right-7 4xl:right-8">
      <LanguageButton />
      </span>
    </nav>
  )
}
