import Head from 'next/head'
import React from "react";
import {
    SelectedTechnologyProvider,
} from "../context/SelectedTechnologyContext";
import dynamic from "next/dynamic";
import {InferGetStaticPropsType} from "next";

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const ProfileCard = dynamic(() => import('../components/ProfileCard'), {
        loading: () => <span>Loading profile ...</span>,
    })
    const JobList = dynamic(() => import('../components/JobList'), {
        loading: () => <span>Loading jobs ...</span>,
    })
    const UsedTechnologyCard = dynamic(() => import('../components/UsedTechnologyCard'), {
        loading: () => <span>Loading used technologies ...</span>,
    })
    const Footer = dynamic(() => import('../components/Footer'), {
        loading: () => <span>Loading footer ...</span>,
    })
    return (
        <div>
            <Head>
                <title>{props.title}</title>
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

            <Footer/>
        </div>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            title: "Raimund Rittnauer"
        },
    }
}

interface Props {
    title: string
}