import * as React from 'react'
import createContext from "./createContext";
import selectedTechnologyReducer from "./selectedTechnologyReducer";
import Technology from "./models/Technology";
import JobEntry from "./models/JobEntry";
import data from "../data/data";

const initialState: State = {
    selectedTechnologies: [],
    jobs: data.jobs,
    technologies: data.technologies
};
const SelectedTechnologyContext = createContext(initialState);

function SelectedTechnologyProvider(props: React.PropsWithChildren) {
    const [state, dispatch] = React.useReducer(selectedTechnologyReducer, initialState)
    return <SelectedTechnologyContext.Provider
        value={{state: state, dispatch: dispatch}} {...props} />;
}

function useSelectedTechnologies() {
    const context = React.useContext(SelectedTechnologyContext)
    if (context === undefined) {
        throw new Error('useSelectedTechnology() must be used within a UsedTechnologyProvider.')
    }
    return context
}

interface State {
    selectedTechnologies: Technology[]
    jobs: JobEntry[]
    technologies: Technology[]
}

export {SelectedTechnologyProvider, SelectedTechnologyContext, useSelectedTechnologies}