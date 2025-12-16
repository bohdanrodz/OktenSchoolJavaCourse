import {useEffect, useState} from "react";
import type TodoModel from "../../models/TodoModel.ts";
import {fetchTodos} from "../../services/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import './TodosComponent.css'

export const TodosComponent = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);
    useEffect(() => {
        fetchTodos().then((data:TodoModel[]) => setTodos(data));

        // const fillTodos = async ()=>{
        //     setTodos(await fetchTodos())
        // }
        // fillTodos()
    },[])



    return (
        <div className={'todos-container'}>
            {
                todos.map((todo:TodoModel) => <TodoComponent todo={todo} key={todo.id}/>)
            }
        </div>
    );
};