export {};

function foobar<SomeType>(url:string):Promise<SomeType>{
    return fetch(url)
        .then((response:Response):Promise<SomeType> => {
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            return response.json() as Promise<SomeType>;
        })
}

interface ToDo{
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}

const apiResponce = await foobar<ToDo>('https://jsonplaceholder.typicode.com/todos/1')
console.log(apiResponce);