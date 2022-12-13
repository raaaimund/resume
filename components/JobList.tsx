import Job from "./Job";
import React from "react";
import {useSelectedTechnologies} from "../context/SelectedTechnologyContext";

export default function JobList() {
    const {state, dispatch} = useSelectedTechnologies()
    return (<>
            {
                state.jobs &&
                state.jobs.map((job, index) =>
                    <Job key={index} company={job.company} website={job.website}
                         occupation={job.occupation} time={job.time}
                         projects={job.projects}/>
                )
            }
        </>
    )
}