import type {FC} from "react";
import type {ICourse} from "../../models/CourseModel.tsx";
import './CourseComponent.css'

type PropsType = {
    course: ICourse
}

export const CourseComponent:FC<PropsType> = ({course}) => {
    return (
        <li>
            {course.title} {course.monthDuration}
        </li>
    );
};