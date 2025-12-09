import {coursesAndDurationArray} from "../../assets/arrays.ts";
import type {ICourse} from "../../models/CourseModel.tsx";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
        <>
            <ul>
                {
                    coursesAndDurationArray.map((course:ICourse, index:number) => {
                        return <CourseComponent course={course} key={index}/>
                    })
                }
            </ul>
        </>
    );
};