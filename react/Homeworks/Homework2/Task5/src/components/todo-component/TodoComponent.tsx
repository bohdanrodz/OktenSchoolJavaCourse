import type TodoModel from "../../models/TodoModel";
import type {FC} from "react";
import './TodoComponent.css'

type TodoProps = {
    todo: TodoModel;
}

export const TodoComponent:FC<TodoProps> = ({todo:{id, todo, completed, userId}}) => {
    return (
        <div className={'todo'}>
            <h3 className={'text-3xl font-mono'}>To do #{id} is {completed ? 'completed' : 'not completed'} by user #{userId}</h3>
            <p className={'text-xl font-serif'}>{todo}</p>
        </div>
    );
};