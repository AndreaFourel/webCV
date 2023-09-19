"use client"
import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight} from "react-icons/hi";
import Card from "./Card";
import { Project } from "../page";

interface Props {
  projects: Project[];
}

export default function CardSlider({projects}: Props) {

  const [current, setCurrent] = useState(1);
  const length = projects.length;

  const nextProject = () => {
    setCurrent(current === length ? 1 : current + 1);
  }

  const prevProject = () => {
    setCurrent(current === 1 ? length : current - 1);
  }

  if(!Array.isArray(projects) || length <= 0) {
    return null;
  }

  return (
    <div className="relative">
      <HiOutlineChevronLeft onClick={prevProject} className="absolute z-10 top-32 -left-16 text-5xl text-dark-green hover:text-light-green cursor-pointer select-none"/>
      <HiOutlineChevronRight onClick={nextProject} className="absolute z-10 top-32 -right-16 text-5xl text-dark-green hover:text-light-green cursor-pointer select-none"/>
      {projects.map(project => {
        return (
          <div key={project.id} className={project.id == current ? 'active' : ''}>
            {project.id == current && ( <Card project={project}/>)}
          </div>
        )
      })}
    </div>
  )
}
