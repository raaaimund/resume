import React from "react";
import {useSelectedTechnologies} from "../context/SelectedTechnologyContext";

export default function TechnologyChip(props: Props) {
    const {state, dispatch} = useSelectedTechnologies()
    const isSelected = state.selectedTechnologies.find(selectedTechnology => selectedTechnology.id === props.id)
    return (
        <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className={`
                inline-block px-1 py-0.5 mr-1 border border-gray-300 text-gray-500 font-semibold text-xs
                hover:bg-blue-100 hover:shadow-lg
                focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-200 active:shadow-lg
                transition duration-150 ease-in-out ${isSelected ? "bg-blue-100" : ""}
            `}
            onClick={_ => dispatch({type: 'add', selectedTechnology: props})}
        >
            {props.name}
        </button>
    )
}

interface Props {
    id: number,
    name: string
}