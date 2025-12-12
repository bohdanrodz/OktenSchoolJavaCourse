import {useEffect, useState} from "react";
import type {TodosModel} from "../../models/TodosModel.ts";
import loadTodos from "../../services/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import './TodosComponent.css'

export const TodosComponent = () => {
    const [todos, setTodos] = useState<TodosModel[]>([]);
    useEffect(() => {
        loadTodos().then(array => setTodos(array))
    },[]);
    return (
        <>
            <div className={'todos-container'}>
                {
                    todos.map((todo:TodosModel) => <TodoComponent todo={todo} key={todo.id}/>)
                }
            </div>
        </>
    );
};