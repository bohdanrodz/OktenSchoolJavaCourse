export const retrieveLocalStorage = <T>(     // create function to retrieve data from local storage
    key: string
) => {
    const object = localStorage.getItem(key) || '';     // retrieve object from local storage if exists
    if (!object) {      // check if object exists
        return {} as T;     // return empty object with forced generic typization if not exists
    }
    const parse = JSON.parse(object);   // parse object
    return parse as T;  // return object with force generic typization

}