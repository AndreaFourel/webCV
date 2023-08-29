import Link from "next/link";

export default function NavBar() {
  const links = ["About", "Projects", "Work History", "Skills", "Hobbies"];
  return (
    <nav className="z-50 flex m-auto space-x-16 mt-12">
      {links.map((link, index)=>(
        <Link className="pt-5 text-2xl text-dark-green" key={index} href="">{link}</Link> 
      ))}
    </nav>
  )
}
