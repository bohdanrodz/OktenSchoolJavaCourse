import {createBrowserRouter} from "react-router";
import {UsersComponent} from "../components/UsersComponent.tsx";
import {UsersJsonPlaceholderComponent} from "../components/UsersJsonPlaceholderComponent.tsx";
import {UsersDummyJsonComponent} from "../components/UsersDummyJsonComponent.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import {PostsJsonPlaceholderComponent} from "../components/PostsJsonPlaceholderComponent.tsx";
import {PostsDummyJsonComponent} from "../components/PostsDummyJsonComponent.tsx";
import {CommentsComponent} from "../components/CommentsComponent.tsx";
import {CommentsJsonPlaceholderComponent} from "../components/CommentsJsonPlaceholderComponent.tsx";
import App from "../App.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "users", element: <UsersComponent/>, children:[
                    {path: "jsonplaceholder", element: <UsersJsonPlaceholderComponent/>},
                    {path: "dummyjson", element: <UsersDummyJsonComponent/>}
                ]},
            {path: "posts", element: <PostsComponent/>, children:[
                    {path: "jsonplaceholder", element: <PostsJsonPlaceholderComponent/>},
                    {path: "dummyjson", element: <PostsDummyJsonComponent/>}
                ]},
            {path: "comments", element: <CommentsComponent/>, children:[
                    {path: "jsonplaceholder", element: <CommentsJsonPlaceholderComponent/>},
                    {path: "dummyjson", element: <PostsDummyJsonComponent/>}
                ]}
        ]
    }
])