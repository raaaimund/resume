import React from "react";

interface Props {
    imgSrc: string,
    alt: string
}

export default function ProfileImage(props: Props) {
    return (
        <img className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
             src={props.imgSrc}
             alt={props.alt}/>
    )
}