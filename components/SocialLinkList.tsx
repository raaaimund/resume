import React from "react";
import SocialLink from "./SocialLink";

export default function SocialLinkList(props: Props) {
    return (
        <div className="text-gray-700 flex flex-row justify-start mt-auto card-social-links">
            {
                props.links
                && props.links.map((link, index) =>
                    <SocialLink key={index} href={link.href} icon={link.icon}/>
                )}
        </div>
    );
}

interface IconLink {
    href: string;
    icon: JSX.Element;
}

interface Props {
    links: SocialLink[]
}