export default function LanguageButton() {
  return (
    <button className="relative inline-flex items-center justify-start md:px-5 xl:px-7 border-[1px] border-dark-green overflow-hidden font-normal 
    transition-all bg-ligth-sand rounded hover:bg-light-sand group">
    <span className="w-48 h-48 rounded rotate-[-40deg] bg-dark-green absolute bottom-0 left-0 -translate-x-full 
    ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 
    group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-dark-green transition-colors duration-300 ease-in-out 
    group-hover:text-light-sand md:text-reg lg:text-xl">Fr</span>
    </button>
  )
}
