import Technology from "./models/Technology";
import JobEntry from "./models/JobEntry";
import data from "./data";

export default function selectedTechnologyReducer(state: State, action: Action): State {
    switch (action.type) {
        case "add":
            const updatedSelectedTechnologies =
                selectedTechnologyExists(state.selectedTechnologies, action.selectedTechnology)
                    ? removeFromSelectedTechnologies(state.selectedTechnologies, action.selectedTechnology)
                    : addToSelectedTechnologies(state.selectedTechnologies, action.selectedTechnology)
            return {
                ...state,
                selectedTechnologies: updatedSelectedTechnologies,
                jobs: getJobs(updatedSelectedTechnologies)
            }
        default:
            return state;
    }
};

type ActionCommand = 'add'

interface State {
    selectedTechnologies: Technology[]
    jobs: JobEntry[]
    technologies: Technology[]
}

interface Action {
    type: ActionCommand
    selectedTechnology: Technology
}

function selectedTechnologyExists(alreadySelectedTechnologies: Technology[], currentSelection: Technology) {
    return alreadySelectedTechnologies.find(technology => technology.id === currentSelection.id)
}

function removeFromSelectedTechnologies(alreadySelectedTechnology: Technology[], currentSelection: Technology) {
    return alreadySelectedTechnology.filter(technology => technology.id !== currentSelection.id)
}

function addToSelectedTechnologies(alreadySelectedTechnology: Technology[], currentSelection: Technology) {
    return [...alreadySelectedTechnology, currentSelection]
}

function hasElements(selectedTechnologies: Technology[]) {
    return selectedTechnologies.length > 0
}

function getJobsWithSelectedTechnologies(selectedTechnologies: Technology[]) {
    return getAllJobs().filter(
        job => job.projects.find(
            project => project.technologies && project.technologies.find(
                technology => selectedTechnologies.find(
                    selectedTechnology => selectedTechnology.id === technology.id
                )
            )
        )
    )
}

function getAllJobs() {
    return data.jobs
}

function getJobs(selectedTechnologies: Technology[]) {
    return hasElements(selectedTechnologies)
        ? getJobsWithSelectedTechnologies(selectedTechnologies)
        : getAllJobs()
}