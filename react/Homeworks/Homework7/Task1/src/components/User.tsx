import {type FC, memo} from "react";

export const User: FC<{ foo?: () => void, arr: number[] }> = memo( ({arr}) => {
    console.log('user')
    console.log(arr);
    return (
        'user'
    );
});