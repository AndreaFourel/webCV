import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="relative">
      <div className="fixed w-0 h-0 border-solid md:border-[150px] lg:border-[200px] xl:border-250 border-t-dark-green 
      border-l-dark-green border-r-transparent border-b-transparent">
        <div className="bg-[url('../public/profile_pic.png')] bg-cover rounded-full bg-[center_top_30%] bg-no-repeat fixed 
        md:top-[70px] md:left-[120px] lg:top-[80px] lg:left-[150px] xl:top-[100px] xl:left-[180px] 
        md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px]">
        </div>
      </div>
      <div className="fixed md:left-[18rem] lg:left-[23rem] xl:left-[30rem] 2xl:left-[32rem] 3xl:left-[35rem] 4xl:left-[38rem] mt-12">
      <NavBar />
      </div>
    </header>
  )
}
