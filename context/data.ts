import JobEntry from "./models/JobEntry";
import Project from "./models/Project";
import Technology from "./models/Technology";

const technologies: Technology[] = [
    {id: 1, name: "Joomla"},
    {id: 2, name: "Typo3"},
    {id: 3, name: "AdobeXD"},
    {id: 4, name: "Azure DevOps"},
    {id: 5, name: "Azure Pipelines"},
    {id: 6, name: "Docker"},
    {id: 7, name: "ASP.Net MVC"},
    {id: 8, name: "ASP.Net Web API"},
    {id: 9, name: "Swagger"},
    {id: 10, name: "Razor Pages"},
    {id: 11, name: "EF6"},
    {id: 12, name: "xUnit.net"},
    {id: 13, name: "MSSQL"},
    {id: 14, name: "SSRS"},
    {id: 15, name: "Azure DevOps"},
    {id: 16, name: "Azure Pipelines"},
    {id: 18, name: "Application Insights"},
    {id: 19, name: "ASP.Net Core Web API"},
    {id: 20, name: "EF Core"},
    {id: 21, name: "Bootstrap"},
    {id: 22, name: "basemap.at"},
    {id: 23, name: "Node.js"},
    {id: 24, name: "Restify"},
    {id: 25, name: "Leaflet"},
    {id: 26, name: "WinForms"},
    {id: 27, name: "Xamarin.Android"},
    {id: 28, name: "Android NUnit"},
    {id: 29, name: "SQLite"},
    {id: 30, name: "MSTest"},
    {id: 31, name: "Active Directory"},
    {id: 32, name: "MS Exchange Server 2016"},
    {id: 33, name: "Hyper-V & Replication"},
    {id: 34, name: "Plesk"},
    {id: 35, name: "GitHub Actions"},
    {id: 36, name: "ASP.Net Web Forms"},
    {id: 37, name: "GitHub"},
    {id: 38, name: "GitHub Pages"},
    {id: 39, name: "Jekyll"},
    {id: 40, name: "Vue.js"},
    {id: 41, name: "Nuxt"},
    {id: 42, name: "Blazor"},
    {id: 43, name: "React"},
    {id: 44, name: "Tailwind CSS"},
    {id: 45, name: "Ansible"},
    {id: 46, name: "Next.js"},
    {id: 47, name: "ASP.Net MVC Core"},
    {id: 48, name: "Java"},
    {id: 49, name: "R"},
    {id: 50, name: "Typescript"},
]

const jobs: JobEntry[] = [
    {
        company: "Sanskrithi School of Engineering",
        website: "https://www.sseptp.org",
        occupation: "Lehrbeauftragter",
        time: "2022",
        projects:
            <Project[]>[
                {
                    description: "7 Monate Unterstützung beim Unterricht im Bachelor Lehrgang für Computer Science and Engineering (BTech) an einem College im ländlichen Indien.",
                },
                {
                    description: "Gestaltung und Unterricht eines Kurses für Java Anfänger.",
                },
                {
                    description: "Gestaltung und Unterricht eines Kurses für Java OOP, etwas Software-Architektur und die Verwendung von Git.",
                },
            ]
    },
    {
        company: "Wagner Sicherheit GmbH",
        website: "https://www.wagner-sicherheit.at",
        occupation: "Software Entwickler",
        time: "2012 bis 2022",
        projects:
            <Project[]>[
                {
                    description: "Gestaltung der Firmenwebseite.",
                    url: "https://web.archive.org/web/20180801093029/http:/www.wagner-sicherheit.at/",
                    technologies: technologies.filter(technology => [1].find(id => technology.id === id))
                },
                {
                    description: "Gestaltung und Umsetzung der Webseite im Rahmen eines EU Projektes.",
                    url: "https://web.archive.org/web/20150225015939/http:/www.sicherimburgenland.at/",
                    technologies: technologies.filter(technology => [1].find(id => technology.id === id))
                },
                {
                    description: "Gestaltung und Umsetzung der Webseite im Rahmen eines EU Projektes.",
                    url: "https://web.archive.org/web/20200808205924/https:/www.sicheresburgenland.at/",
                    technologies: technologies.filter(technology => [2, 3, 4, 5, 6].find(id => technology.id === id))
                },
                {
                    description: "Relaunch des Webauftritts der Burgenländischen Krankenanstalten Gesellschaft m.b.H.",
                    url: "https://web.archive.org/web/20190709144407/http:/www.krages.at/",
                    technologies: technologies.filter(technology => [2, 3, 4, 5, 6].find(id => technology.id === id))
                },
                {
                    description: "Programmierung der digitalen Plattform \"Katastrophenschutzplan der burgenländischen Gemeinden\" im Rahmen eines EU Projektes. Ausgezeichnet mit dem \"Sicherheitspreis des Landes Burgenland\".",
                    url: "https://katplan.bgld.gv.at/",
                    technologies: technologies.filter(technology => [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 6, 18, 19, 20, 21, 22, 23, 24, 25].find(id => technology.id === id))
                },
                {
                    description: "Programmierung einer Web-Applikation für GPS Tracker. In Zusammenarbeit mit der Landespolizeidirektion Burgenland um gegen Traktordiebstähle vorzugehen.",
                    url: "",
                    technologies: technologies.filter(technology => [26, 7, 10, 11, 15, 16, 21, 25].find(id => technology.id === id))
                },
                {
                    description: "Programmierung einer Web-Applikation für Gemeinden. Bürger können per SMS und Email über verschiedenste Tätigkeiten innerhalb der Gemeinden informiert werden.",
                    url: "",
                    technologies: technologies.filter(technology => [7, 10, 11, 15, 16, 21].find(id => technology.id === id))
                },
                {
                    description: "Programmierung einer Web-Applikation und Android-Applikation für Sicherheitsfachkräfte zur Begehung und Evaluierung des Arbeitsschutzes.",
                    url: "",
                    technologies: technologies.filter(technology => [27, 28, 29, 7, 10, 30, 11, 15, 16, 13, 14, 19, 20, 9].find(id => technology.id === id))
                },
                {
                    description: "Programmierung einer Web-Applikation zur internen Mitarbeiterverwaltung so wie zur Kommunikation mit den Mitarbeitern per SMS und Email.",
                    url: "",
                    technologies: technologies.filter(technology => [7, 10, 30, 11, 15, 16, 13].find(id => technology.id === id))
                },
                {
                    description: "Programmierung einer Web-Applikation und Android-Applikation für ein Wächterkontrollsystem.",
                    url: "",
                    technologies: technologies.filter(technology => [27, 29, 19, 10, 30, 20, 15, 16, 13, 6, 47].find(id => technology.id === id))
                },
                {
                    description: "Programmierung einer Web-Applikation und Android-Applikation für die Unterstützung der Arbeitsplatzinspektion beim Bau von Windkraftanlagen.",
                    url: "",
                    technologies: technologies.filter(technology => [7, 10, 11, 15, 16, 21, 13, 14, 18].find(id => technology.id === id))
                },
                {
                    description: "Administration und Verwaltung der internen Serverstruktur und des Firmennetzwerks.",
                    url: "",
                    technologies: technologies.filter(technology => [31, 32, 33, 34, 6].find(id => technology.id === id))
                },
                {
                    description: "DevOps Tätigkeiten.",
                    url: "",
                    technologies: technologies.filter(technology => [6, 15, 16, 35].find(id => technology.id === id))
                },
                {
                    description: "Aufbau und Einrichtung der Sicherheitstechnik auf Veranstaltungen wie Donauinselfest, Nova Rock, Frequency und Urban Art Forms in Zusammenarbeit mit Rettung, Feuerwehr und Polizei."
                },
            ]
    },
    {
        company: "SMT Medtech GmbH",
        website: "https://www.smt-medtech.com",
        occupation: "Software Entwickler",
        time: "2011",
        projects:
            <Project[]>[
                {
                    description: "Mitarbeit bei diversen Softwareprojekten.",
                    technologies: technologies.filter(technology => [26, 36].find(id => technology.id === id))
                },
            ]
    },
    {
        company: "Volksbank OST Mattersburg",
        website: "https://www.volksbank.at",
        occupation: "Praktikant",
        time: "Juli bis August 2008",
        projects:
            <Project[]>[
                {
                    description: "Digitalisierung von Dokumenten und Aushilfe bei der Kundenbetreuung am Schalter.",
                },
            ]
    },
    {
        company: "Wagner Sicherheit GmbH",
        website: "https://www.wagner-sicherheit.at",
        occupation: "Eventmitarbeiter",
        time: "2006 bis 2010",
        projects:
            <Project[]>[
                {
                    description: "Mitarbeit, Koordination und Versorgung der Sicherheitsmitarbeiter auf bei diversen Veranstaltungen wie Nova Rock, Frequency, Urban Art Forms, Konzerte in der Stadthalle Wien und Graz, Gasometer, Mörbisch, Steinbruch St. Margarethen und Festivals in Wiesen.",
                },
            ]
    },
    {
        company: "Technische Universität Wien",
        website: "https://www.tuwien.ac.at",
        occupation: "Wirtschaftsinformatik",
        time: "seit 2013",
        projects:
            <Project[]>[
                {
                    description: "Bachelorstudium Wirtschaftsinformatik",
                    technologies: technologies.filter(technology => [48, 49, 50, 43].find(id => technology.id === id))
                },
                {
                    description: "Titel der Bachelorarbeit \"Enhancing the Resilience of Software Engineering Courses by Implementing Continuous Education using Computers and Smartphones exemplified by rural India\".",
                    technologies: technologies.filter(technology => [35, 37].find(id => technology.id === id))
                },
                {
                    description: "Seit 2019 Mitglied in der Fachschaft Wirtschaftsinformatik & Data Science. Journaldienst und Beratung von Studenten.",
                },
            ]
    },
    {
        company: "Universität Wien",
        website: "https://www.univie.ac.at",
        occupation: "Orientalistik",
        time: "2012",
        projects:
            <Project[]>[
                {
                    description: "Ein Semester Bachelorstudium Orientalistik",
                },
            ]
    },
    {
        company: "Österreichisches Bundesheer",
        website: "https://www.bundesheer.at",
        occupation: "Grundwehrdienst",
        time: "September 2011 bis Februar 2012",
        projects: <Project[]>[]
    },
    {
        company: "HTL Wiener Neustadt",
        website: "https://www.htlwrn.ac.at",
        occupation: "Sparte EDVO",
        time: "2004 bis 2011",
        projects: <Project[]>[
            {
                description: "Windows Anwendungen in C# und Visual Basic.",
                technologies: technologies.filter(technology => [26, 36, 13].find(id => technology.id === id))
            },
            {
                description: "Schwerpunktfächer Netzwerktechnik und System und Einsatzplanung.",
            },
        ]
    },
    {
        company: "Eigene Projekte",
        website: "http://rittnauer.at",
        occupation: "Software Entwickler",
        time: "seit 2011",
        projects: <Project[]>[
            {
                description: "Ich führe einen Blog.",
                url: "http://rittnauer.at",
                technologies: technologies.filter(technology => [37, 38, 39].find(id => technology.id === id))
            },
            {
                description: "Ein Projekt um Vue.js und Nuxt kennen zu lernen.",
                url: "https://flixwienix.at",
                technologies: technologies.filter(technology => [40, 41].find(id => technology.id === id))
            },
            {
                description: "Ein Projekt um Blazor kennen zu lernen.",
                url: "https://nö-club.at",
                technologies: technologies.filter(technology => [42, 15, 16].find(id => technology.id === id))
            },
            {
                description: "Vereinsmitglied bei ICT4D Austria. Bei der Gestaltung und Umsetzung der Webseite mitgeholfen. Hauptsächelich DevOps.",
                url: "https://www.ict4d.at/",
                technologies: technologies.filter(technology => [43, 44, 35, 37, 38].find(id => technology.id === id))
            },
            {
                description: "Ein Projekt um React und Next.js kennen zu lernen.",
                url: "http://cv.rittnauer.at",
                technologies: technologies.filter(technology => [43, 44, 46, 35, 37, 50].find(id => technology.id === id))
            },
            {
                description: "Verwaltung (mancher) Nebenprojekte via IaC.",
                technologies: technologies.filter(technology => [45].find(id => technology.id === id))
            }
        ]
    },
]

export default {
    technologies: technologies,
    jobs: jobs
}