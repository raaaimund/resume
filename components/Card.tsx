import React from "react";

export default function Card(props: Props) {
    return (
        <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
            {props.image}
            <div className="p-6 flex flex-col">
                <div className="text-gray-900 text-xl font-medium mb-2">{props.title}</div>
                {props.subtitle && <div className="text-gray-700 text-sm">{props.subtitle}</div>}
                {props.children}
            </div>
        </div>
    )
}

interface Props extends React.PropsWithChildren {
    image?: React.ReactNode,
    title: String,
    subtitle?: String,
}