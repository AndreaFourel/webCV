import CardSlider from "./components/CardSlider";
import { getProjects } from '../../data';

export interface Project {
  id: number;
  title : string;
  description : string;
  image : string;
  appUrl : string;
  gitUrl : string;
}

export default  function page() {
  
  const projects:Project[] = getProjects();

  return (
    <section>
      <h1 className="font-courgette text-dark-green text-4xl mb-6 p-2">My projects</h1>
      <CardSlider projects= {projects}/>
    </section>
  )
}
