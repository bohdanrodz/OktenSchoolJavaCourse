import {coursesArray} from "../../data/data.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
import './CoursesComponent.css'
import type {ICourse} from "../../models/Course.tsx";


export const CoursesComponent = () => {
    return (
        <>
            <ul className={'main-list'}>
                {
                    coursesArray.map((course:ICourse, index) => {
                        return <CourseComponent course={course} key={index}>
                            {course.modules.map((module:string, index: number) => {
                                return (
                                    <li key={index}>{module}</li>
                                )
                            })}
                        </CourseComponent>
                    })
                }
            </ul>
        </>
    );
};