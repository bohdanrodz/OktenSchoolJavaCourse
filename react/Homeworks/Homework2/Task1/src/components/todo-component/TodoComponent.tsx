import type {FC} from "react";
import type {TodosModel} from "../../models/TodosModel.ts";
import './TodoComponent.css'

type TodoProps = {
    todo: TodosModel
}

export const TodoComponent:FC<TodoProps> = ({todo:{id,title,completed}}) => {
    return (
        <>
            <div className={'todo-item'}>
                {id + ' ' + title + ' ' + completed.toString()}
            </div>
        </>
    );
};