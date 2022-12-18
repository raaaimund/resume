import React from "react";
import Image from "next/image";

interface Props {
    imgSrc: string,
    alt: string
}

export default function ProfileImage(props: Props) {
    return (
        <Image src={props.imgSrc} alt={props.alt} width={"200"} height={"200"}
               className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"/>
    )
}