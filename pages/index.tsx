import Head from 'next/head'
import {SlSocialGithub} from "react-icons/sl";
import React from "react";
import {
    SelectedTechnologyProvider,
} from "../context/SelectedTechnologyContext";
import Link from "next/link";
import dynamic from "next/dynamic";

export default function Home() {
    const ProfileCard = dynamic(() => import('../components/ProfileCard'), {
        loading: () => <span>Loading profile ...</span>,
    })
    const JobList = dynamic(() => import('../components/JobList'), {
        loading: () => <span>Loading jobs ...</span>,
    })
    const UsedTechnologyCard = dynamic(() => import('../components/UsedTechnologyCard'), {
        loading: () => <span>Loading used technologies ...</span>,
    })
    return (
        <div>
            <Head>
                <title>Raimund Rittnauer</title>
            </Head>

            <SelectedTechnologyProvider>
                <main className="flex flex-row max-md:flex-col gap-5 p-10 lg:container m-auto">
                    <div className="flex flex-col gap-5 basis-1/3 max-xl:basis-1/2">
                        <ProfileCard/>
                        <UsedTechnologyCard/>
                    </div>

                    <div className="flex flex-col gap-5 basis-2/3 max-w-lg:basis-1/2">
                        <JobList/>
                    </div>
                </main>
            </SelectedTechnologyProvider>

            <footer className="text-center lg:text-left text-gray-600">
                <div className="text-center p-6">
                    <Link className="text-blue-600 hover:text-blue-700 hover:underline"
                          href="https://github.com/raaaimund/resume" target="_blank">
                        Code on <SlSocialGithub/>
                    </Link>
                </div>
            </footer>
        </div>
    )
}