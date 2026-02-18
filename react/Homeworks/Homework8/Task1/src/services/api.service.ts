const baseUrl = 'https://jsonplaceholder.typicode.com';

export const fetchData = async <T>(endpoint: string) => {
    const response = await fetch(baseUrl + endpoint).then((response) => response.json());
    return response as T;
}