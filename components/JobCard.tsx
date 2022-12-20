import React from "react";
import Card from "./Card";
import TechnologyChip from "./TechnologyChip";
import Project from "../context/models/Project";
import Link from "next/link";
import {SlLink} from "react-icons/sl";

export default function JobCard(props: Props) {
    return (
        <Card title={props.occupation} subtitle={props.time}>
            <div className="text-gray-700 text-sm mb-2">
                {props.company}, <Link
                className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                href={props.website} target="_blank">{props.website}</Link>
            </div>
            {props.projects.map((project, index) =>
                <div key={index}>
                    <p className="mb-2">
                        {project.description} {project.url &&
                        <Link className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                              href={project.url} target="_blank"><SlLink/></Link>}
                    </p>
                    {project.activities &&
                        <p className={"mb-2 text-sm text-gray-700"}>
                            Hauptaufgaben: {project.activities.join(', ')}
                        </p>}
                    <div className="mb-4">
                        {project.technologies && project.technologies.map((technology, index) =>
                            <TechnologyChip key={index} id={technology.id} name={technology.name}/>)
                        }
                    </div>
                </div>
            )}
        </Card>
    )
}

interface Props {
    company: string,
    website: string,
    occupation: string,
    time: string,
    projects: Project[]
}