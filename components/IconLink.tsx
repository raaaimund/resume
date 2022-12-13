import Link from "next/link";
import React from "react";

export default function IconLink(props: Props) {
    return (
        <Link
            className="text-blue-600 p-2 max-lg:p-1 max-md:p-2 hover:bg-blue-100 hover:border hover:border-blue-100 hover:rounded"
            href={props.href} target="_blank">{props.icon}</Link>
    )
}

interface Props {
    href: string,
    icon: JSX.Element
}