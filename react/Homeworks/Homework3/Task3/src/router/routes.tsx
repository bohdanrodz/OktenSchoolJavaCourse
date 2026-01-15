import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {UsersJsonplaceholderComponent} from "../components/users-jsonplaceholder-component/UsersJsonplaceholderComponent.tsx";
import {UsersDummyjsonComponent} from "../components/users-dummyjson-component/UsersDummyjsonComponent.tsx";
import {CommentsComponent} from "../components/comments-component/CommentsComponent.tsx";
import {CommentsJsonplaceholderComponent} from "../components/comments-jsonplaceholder-component/CommentsJsonplaceholderComponent.tsx";
import {CommentsDummyjsonComponent} from "../components/comments-dummyjson-component/CommentsDummyjsonComponent.tsx";
import {PostsComponent} from "../components/posts-component/PostsComponent.tsx";
import {PostsJsonplaceholderComponent} from "../components/posts-jsonplaceholder-component/PostsJsonplaceholderComponent.tsx";
import {PostsDummyjsonComponent} from "../components/posts-dummyjson-component/PostsDummyjsonComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "users", element: <UsersComponent/>, children: [
                    {path: "jsonplaceholder", element: <UsersJsonplaceholderComponent/>},
                    {path: "dummyjson", element: <UsersDummyjsonComponent/>}
                ]},
            {path: "posts", element: <PostsComponent/>, children: [
                    {path: "jsonplaceholder", element: <PostsJsonplaceholderComponent/>},
                    {path: "dummyjson", element: <PostsDummyjsonComponent/>}
                ]},
            {path: "comments", element: <CommentsComponent/>, children: [
                    {path: "jsonplaceholder", element: <CommentsJsonplaceholderComponent/>},
                    {path: "dummyjson", element: <CommentsDummyjsonComponent/>}
                ]}
        ]
    }
])