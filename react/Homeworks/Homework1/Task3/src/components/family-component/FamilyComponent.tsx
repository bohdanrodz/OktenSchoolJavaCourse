import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";
import type {SimpsonsType} from "../../models/SimpsonsType.tsx";
import './FamilyComponent.css'

export const FamilyComponent = () => {
    return (
        <>
            <div className={'main'}>
                {
                    simpsons.map((character: SimpsonsType, index) => {
                        return <CharacterComponent character={character} key={index}>
                            {character.info}

                        </CharacterComponent>
                    })
                }</div>
        </>
    );
};