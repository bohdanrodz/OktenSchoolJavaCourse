import {useSearchParams} from "react-router";

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get('page')) || 1;
    return (
        <div className={'pagination'}>
            <button onClick={() => {
                if (currentPage > 1) {
                    setSearchParams({page:(--currentPage).toString()})
                }
            }}>Previous</button>
            <span> | | </span>
            <button onClick={()=> {
                setSearchParams({page: (++currentPage).toString()})
            }}>Next</button>
        </div>
    );
};