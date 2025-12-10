import type { ICourse } from "../../models/Course";
import type {FC, ReactNode} from "react";
import './CourseComponent.css'

interface ICourseComponentProps {
    course: ICourse;
    children: ReactNode;
}

export const CourseComponent:FC<ICourseComponentProps> = ({course, children}) => {
    return (
        <>
            <li className={'border-y-2 main-list__element'}>
                <h3 className={'text-2xl mb-2'}>{course.title}</h3>
                <p className={'text-lg'}>Duration in Months: {course.monthDuration}</p>
                <p className={'text-lg mb-2'}>Duration in Hours: {course.hourDuration}</p>
                <p className={'text-xl'}>Modules</p>
                <ul className={'secondary-list  mb-2'}>{children}</ul>
            </li>
        </>
    );
};