//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

 
interface itCourse { 
    courseName: string;

    location: string;

    onsiteStudent: number;

    onlineStudent: number;

}

let  itCourse : itCourse = {
    courseName:
    "Cloud Applied Generative AI Engineering",

    location: "Governer Sindh House",

    onsiteStudent: 50000,

    onlineStudent: 50000,



};
console.log(itCourse);