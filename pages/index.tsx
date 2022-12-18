import Head from 'next/head'
import {SlSocialLinkedin, SlSocialGithub, SlHome} from "react-icons/sl";
import Card from "../components/Card";
import React from "react";
import SocialLinkList from "../components/SocialLinkList";
import ProfileImage from "../components/ProfileImage";
import UsedTechnologySelector from "../components/UsedTechnologySelector";
import {
    SelectedTechnologyProvider,
} from "../context/SelectedTechnologyContext";
import JobList from "../components/JobList";
import Link from "next/link";
import {GetServerSideProps} from "next";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Raimund Rittnauer</title>
            </Head>

            <SelectedTechnologyProvider>
                <main className="flex flex-row max-md:flex-col gap-5 p-10 lg:container m-auto">
                    <div className="flex flex-col gap-5 basis-1/3 max-xl:basis-1/2">
                        <Card
                            title="Raimund Rittnauer"
                            subtitle="Software Engineer"
                            image={<ProfileImage imgSrc={"/profile.jpg"} alt={"Me"}/>}>
                            <SocialLinkList links={[
                                {href: "http://rittnauer.at", icon: <SlHome/>},
                                {href: "https://github.com/raaaimund", icon: <SlSocialGithub/>},
                                {href: "https://www.linkedin.com/in/rittnauer", icon: <SlSocialLinkedin/>},
                            ]}/>
                        </Card>
                        <UsedTechnologySelector/>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=604800, stale-while-revalidate'
    )

    return {
        props: {},
    }
}
