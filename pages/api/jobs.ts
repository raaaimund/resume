// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import JobEntry from "../../context/models/JobEntry";
import Project from "../../context/models/Project";
import Technology from "../../context/models/Technology";

type Data = {
    jobs: JobEntry[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(initialJobs)
}

const initialJobs = {
    jobs: <JobEntry[]>[
        {
            company: "Wagner Sicherheit GmbH",
            website: "www.wagner-sicherheit.at",
            occupation: "Software Engineer",
            time: "2012 bis 2022",
            projects:
                <Project[]>[
                    {
                        description: "Some task without chips.",
                        technologies: <Technology[]>[]
                    },
                    {
                        description: "Gestaltung der Firmenwebseite (www.wagner-sicherheit.at).",
                        technologies: <Technology[]>[
                            {id: 1, name: "Joomla"}
                        ]
                    },
                    {
                        description: "Gestaltung und Umsetzung der Webseite im Rahmen eines EU Projektes (www.sicherimburgenland.at).",
                        technologies: <Technology[]>[
                            {id: 1, name: "Joomla"}
                        ]
                    },
                    {
                        description: "Gestaltung und Umsetzung der Webseite im Rahmen eines EU Projektes (www.sicheresburgenland.at).",
                        technologies: <Technology[]>[
                            {id: 2, name: "Typo3"},
                            {id: 3, name: "AdobeXD"}
                        ]
                    },
                ]
        }
    ]
}