import type {SimpsonsType} from "../../models/SimpsonsType.tsx";
import type {FC, ReactNode} from "react";
import ('./character-component.css')

type CharacterPropsType = {
    character: SimpsonsType;
    children?: ReactNode;
}

export const CharacterComponent:FC<CharacterPropsType> = ({character, children}) => {
    return (
        <>
            <div>
                <h3 className={'border-y-2 text-2xl'}>{character.name} {character.surname}</h3>
                <img src={character.photo} alt={character.name}/>
                <p>{children}</p>
            </div>
        </>
    );
};