import NavBar from "./NavBar";
import ToggleLanguage from "./LanguageToggler";

export default function Header() {
  return (
    <header className="relative flex justify-start">
      <div className="fixed w-0 h-0 border-solid border-250 border-t-dark-green border-l-dark-green border-r-transparent border-b-transparent">
        <div className="fixed top-[100px] left-[180px] bg-[url('../public/profile_pic.png')] bg-cover w-[200px] h-[200px] rounded-full bg-[center_top_30%] bg-no-repeat">
        </div>
      </div>
      <NavBar />
      <ToggleLanguage />
    </header>
  )
}
