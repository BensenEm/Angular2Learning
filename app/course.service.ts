export class CourseService{
    static courses: string[]= ["C1", "C2", "C3"];
    getCourses():string[]{
        return CourseService.courses;
    }
    static setCourse(course:string){
        CourseService.courses[CourseService.courses.length]=course;
    }
}