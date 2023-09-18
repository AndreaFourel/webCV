import Image from "next/image";
import Card from "./components/Card";

export default function page() {
  return (
    <div>
      <h1 className="font-courgette text-dark-green text-4xl mb-6 p-2">My projects</h1>
      <Card />
    </div>
  )
}
