import Project from "./Project";

export default interface JobEntry {
    company: string,
    website: string,
    occupation: string,
    time: string,
    projects: Project[]
}
