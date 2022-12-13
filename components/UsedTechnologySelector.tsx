import Card from "./Card";
import React from "react";
import TechnologyChip from "./TechnologyChip";
import {useSelectedTechnologies} from "../context/SelectedTechnologyContext";

export default function UsedTechnologySelector() {
    const {state, dispatch} = useSelectedTechnologies()
    return (
        <Card
            title="Verwendete Technologien">
            <div>
                {state.technologies.map((technology, index) =>
                    <TechnologyChip key={index} id={technology.id} name={technology.name}/>
                )}
            </div>
        </Card>
    )
}