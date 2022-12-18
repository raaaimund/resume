import ProfileImage from "./ProfileImage";
import SocialLinkList from "./SocialLinkList";
import {SlHome, SlSocialGithub, SlSocialLinkedin} from "react-icons/sl";
import Card from "./Card";
import React from "react";

export default function ProfileCard() {
    return (
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
    )
}