const endpoint = import.meta.env.VITE_API_BASE_URL;
const todosEndpoint = endpoint + '/todos';


const loadTodos = async () => {
    const response = await fetch(todosEndpoint).then(res => res.json());
    return response;
}

export default loadTodos;
