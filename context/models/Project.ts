import Technology from "./Technology";

export default interface Project {
    description: string
    url: string
    activities?: string[]
    technologies: Technology[]
}