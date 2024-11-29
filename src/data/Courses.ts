

interface Course  {
    id: number;
    course_title: string;
    description: string;
    course_duration: string;
    level: level ;
    author: string;
    image1: string;
    image2: string;
    image3: string;
    curriclum: CourseDetails[];
};

enum level {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
}

interface CourseDetails  {
    id: number;
    unit: string;
    topic: string;
    info: Lessons[];
};

interface Lessons  {
    id: number;
    lesson_title: string;
    lesson_number: string;
    lesson_duration: string;
};

const courses: Course[] = [
    {
        id: 1,
        course_title: "Web Design Fundamentals",
        description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        course_duration: "4 Weeks",
        level: level.Beginner,
        author: "By John Smith",
        image1: "src/assets/img/Courses/image2.png",
        image2: "src/assets/img/Courses/image1.png",
        image3: "src/assets/img/Courses/image.png",
        curriclum: [
            {
                id: 1,
                unit: "01",
                topic: "Introduction to HTML",
                info: [
                    {id: 1,lesson_title: "Understanding Web Design Principles",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Importance of User Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "The Role of Web Design in Product Development",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 2,
                unit: "02",
                topic: "Styling with CSS",
                info: [
                    {id: 1,lesson_title: "Conducting User Research and Interviews",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing User Needs and Behavior",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating User Personas and Scenarios",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 3,
                unit: "03",
                topic: "Introduction to Responsive Design",
                info: [
                    {id: 1,lesson_title: "Introduction to Responsive Design",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Creating responsive templates",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Prototyping and Interactive Mockups",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 4,
                unit: "04",
                topic: "Design Principles for Web",
                info: [
                    {id: 1,lesson_title: "Color Theory and Typography in web Design",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Visual Hierarchy and Layout Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating a Strong Brand Identity",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 5,
                unit: "05",
                topic: "Building a Basic Website",
                info: [
                    {id: 1,lesson_title: "Usability Testing Methods and Techniques",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing Usability Test Results",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Iterating and Improving Web Designs",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
        ],

    },
    {
        id: 2,
        course_title: "UI/UX Design",
        description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
        course_duration: "6 Weeks",
        level: level.Intermediate,
        author: "By Emily Johnson",
        image1: "src/assets/img/Courses/image3.png",
        image2: "src/assets/img/Courses/image4.png",
        image3: "src/assets/img/Courses/image5.png",
        curriclum: [
            {
                id: 1,
                unit: "01",
                topic: "Introduction to UI/UX Design",
                info: [
                    {id: 1,lesson_title: "Understanding UI/UX Design Principles",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Importance of User Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "The Role of UI/UX Design in Product Development",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 2,
                unit: "02",
                topic: "User Research and Personas",
                info: [
                    {id: 1,lesson_title: "Conducting User Research and Interviews",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing User Needs and Behavior",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating User Personas and Scenarios",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 3,
                unit: "03",
                topic: "Wireframing and Prototyping",
                info: [
                    {id: 1,lesson_title: "Introduction to Responsive Design",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Creating responsive templates",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Prototyping and Interactive Mockups",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 4,
                unit: "04",
                topic: "Visual Design and Branding",
                info: [
                    {id: 1,lesson_title: "Color Theory and Typography in UI/UX Design",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Visual Hierarchy and Layout Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating a Strong Brand Identity",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 5,
                unit: "05",
                topic: "Usability Testing and Iteration",
                info: [
                    {id: 1,lesson_title: "Usability Testing Methods and Techniques",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing Usability Test Results",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Iterating and Improving UI/UX Designs",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
        ],

    },
    {
        id: 3,
        course_title: "Mobile App Development",
        description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        course_duration: "8 Weeks",
        level: level.Intermediate,
        author: "By David Brown",
        image1: "src/assets/img/Courses/image6.png",
        image2: "src/assets/img/Courses/image7.png",
        image3: "src/assets/img/Courses/image8.png",
        curriclum: [
            {
                id: 1,
                unit: "01",
                topic: "Introduction to Mobile App Development",
                info: [
                    {id: 1,lesson_title: "Understanding Mobile App Development Principles",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Importance of User Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "The Role of Mobile App Development in Product Development",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 2,
                unit: "02",
                topic: "Fundamentals of Swift Programming (iOS)",
                info: [
                    {id: 1,lesson_title: "Conducting User Research and Interviews",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing User Needs and Behavior",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating User Personas and Scenarios",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 3,
                unit: "03",
                topic: "Fundamentals of Kotlin Programming (Android)",
                info: [
                    {id: 1,lesson_title: "Introduction to Responsive Design",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Creating responsive templates",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Prototyping and Interactive Mockups",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 4,
                unit: "04",
                topic: "Building User Interfaces",
                info: [
                    {id: 1,lesson_title: "Color Theory and Typography in Mobile App Designs",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Visual Hierarchy and Layout Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating a Strong Brand Identity",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 5,
                unit: "05",
                topic: "App Deployment and Testing",
                info: [
                    {id: 1,lesson_title: "Usability Testing Methods and Techniques",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing Usability Test Results",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Iterating and Improving Mobile Apps",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
        ],

    },
    {
        id: 4,
        course_title: "Graphic Design for Beginners",
        description: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        course_duration: "10 Weeks",
        level: level.Beginner,
        author: "By Sarah Thompson",
        image1: "src/assets/img/Courses/image11.png",
        image2: "src/assets/img/Courses/image10.png",
        image3: "src/assets/img/Courses/image9.png",
        curriclum: [
            {
                id: 1,
                unit: "01",
                topic: "Introduction to Graphic Design",
                info: [
                    {id: 1,lesson_title: "Understanding Graphic Design Principles",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Importance of Graphic Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "The Role of Graphic Design in Product Development",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 2,
                unit: "02",
                topic: "Typography and Color Theory",
                info: [
                    {id: 1,lesson_title: "Conducting User Research and Interviews",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing User Needs and Behavior",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating User Personas and Scenarios",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 3,
                unit: "03",
                topic: "Layout Design and Composition",
                info: [
                    {id: 1,lesson_title: "Introduction to Graphic Design",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Creating creative Graphic Designs",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Prototyping and Interactive Mockups",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 4,
                unit: "04",
                topic: "Image Editing and Manipulation",
                info: [
                    {id: 1,lesson_title: "Color Theory and Typography in Graphic Design",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Visual Hierarchy and Layout Graphic Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating a Strong Brand Identity",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 5,
                unit: "05",
                topic: "Designing for Print and Digital Media",
                info: [
                    {id: 1,lesson_title: "Usability Testing Methods and Techniques",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing Usability Test Results",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Iterating and Improving Graphic Designs",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
        ],

    },
    {
        id: 5,
        course_title: "Front-End Web Development",
        description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        course_duration: "10 Weeks",
        level: level.Intermediate,
        author: "By Michael Adams",
        image1: "src/assets/img/Courses/image12.png",
        image2: "src/assets/img/Courses/image13.png",
        image3: "src/assets/img/Courses/image14.png",
        curriclum: [
            {
                id: 1,
                unit: "01",
                topic: "HTML Fundamentals",
                info: [
                    {id: 1,lesson_title: "Understanding Web Design Principles",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Importance of User Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "The Role of Web Design in Product Development",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 2,
                unit: "02",
                topic: "CSS Styling and Layouts",
                info: [
                    {id: 1,lesson_title: "Conducting User Research and Interviews",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing User Needs and Behavior",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating User Personas and Scenarios",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 3,
                unit: "03",
                topic: "JavaScript Basics",
                info: [
                    {id: 1,lesson_title: "Introduction to JavaScript Basics",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Creating JavaScript functions",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Prototyping and Interactive Mockups",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 4,
                unit: "04",
                topic: "Building Responsive Websites",
                info: [
                    {id: 1,lesson_title: "Color Theory and Typography in web Design",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Creating responsive templates",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Visual Hierarchy and Layout Design",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 5,
                unit: "05",
                topic: "Introduction to Bootstrap and React",
                info: [
                    {id: 1,lesson_title: "Introduction to Bootstrap ",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Building a React app",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Iterating and Improving Web Designs",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
        ],

    },
    {
        id: 6,
        course_title: "Advanced JavaScript",
        description: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
        course_duration: "6 Weeks",
        level: level.Advanced,
        author: "By Jennifer Wilson",
        image1: "src/assets/img/Courses/image15.png",
        image2: "src/assets/img/Courses/image16.png",
        image3: "src/assets/img/Courses/image.png",
        curriclum: [
            {
                id: 1,
                unit: "01",
                topic: "Introduction to JavaScript",
                info: [
                    {id: 1,lesson_title: "Understanding JavaScript Principles",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Importance of JavaScript",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "The Role of JavaScript in Product Development",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 2,
                unit: "02",
                topic: "Styling with JavaScript",
                info: [
                    {id: 1,lesson_title: "Conducting User Research and Interviews",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing User Needs and Behavior",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating User Personas and Scenarios",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 3,
                unit: "03",
                topic: "Importance of JavaScript",
                info: [
                    {id: 1,lesson_title: "Importance of JavaScript",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Creating JavaScript functions",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Prototyping and Interactive Mockups",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 4,
                unit: "04",
                topic: "JavaScript Principles for Web",
                info: [
                    {id: 1,lesson_title: "Color Theory and Typography in web Design",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Visual Hierarchy and Layout Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating a Strong Brand Identity",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 5,
                unit: "05",
                topic: "Building a Basic Website using Advanced JavaScript",
                info: [
                    {id: 1,lesson_title: "Usability Testing Methods and Techniques",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing Usability Test Results",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Iterating and Improving Web Designs",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            
        ],

    },
    {
        id: 7,
        course_title: "Back-End Development",
        description: "Backend refers to the server-side of applications, managing databases, APIs, and business logic. It ensures data storage, processing, and seamless communication with front-end interfaces.",
        course_duration: "12 Weeks",
        level: level.Advanced,
        author: "By Axl Rose",
        image1: "src/assets/img/Courses/image5.png",
        image2: "src/assets/img/Courses/image7.png",
        image3: "src/assets/img/Courses/image10.png",
        curriclum: [
            {
                id: 1,
                unit: "01",
                topic: "Introduction to Back-End Development",
                info: [
                    {id: 1,lesson_title: "Understanding Back-End Development Principles",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Importance of Back-End Development",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "The Role of JavaScript in Product Development",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 2,
                unit: "02",
                topic: "Back-end with Laravel 10 ",
                info: [
                    {id: 1,lesson_title: "Conducting User Research and Interviews",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing User Needs and Behavior",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating User Personas and Scenarios",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 3,
                unit: "03",
                topic: "Importance of PHP",
                info: [
                    {id: 1,lesson_title: "Importance of JavaScript",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Creating JavaScript functions",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Prototyping and Interactive Mockups",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 4,
                unit: "04",
                topic: "JavaScript Principles for Web",
                info: [
                    {id: 1,lesson_title: "Color Theory and Typography in web Design",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Visual Hierarchy and Layout Design",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Creating a Strong Brand Identity",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            {
                id: 5,
                unit: "05",
                topic: "Building a Basic Website using Advanced JavaScript",
                info: [
                    {id: 1,lesson_title: "Usability Testing Methods and Techniques",lesson_number: "Lesson 01",lesson_duration: "45 Minutes",},
                    {id: 2,lesson_title: "Analyzing Usability Test Results",lesson_number: "Lesson 02",lesson_duration: "1 Hour",},
                    {id: 3,lesson_title: "Iterating and Improving Web Designs",lesson_number: "Lesson 03",lesson_duration: "30 Minutes",},
                ],
            },
            
        ],

    },
];

export default courses;