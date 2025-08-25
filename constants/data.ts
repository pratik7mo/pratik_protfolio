import React from 'react';
import {
    JavaIcon, SpringIcon, MicroservicesIcon, ReactIcon, TailwindIcon, DockerIcon, KubernetesIcon,
    AWSIcon, JenkinsIcon, GitIcon, PostmanIcon, MySqlIcon, MongoDbIcon, RedisIcon, PostgreSqlIcon,
    KafkaIcon, RabbitMqIcon
} from './icons.jsx';

// ────────────────────────────────────────────────────────────
// 📌 Personal Information
// ────────────────────────────────────────────────────────────
export const PERSONAL_DATA = {
    name: 'Pratik Kumar Sahoo',
    title: 'Associate Software Engineer',
    tagline:
        'Aspiring Software Engineer with growing experience in Java, Spring Boot, and React — eager to learn and build scalable applications.',
    profilePic: './profile.jpg',
    about: `I am a passionate and dedicated Associate Software Engineer with a strong foundation in backend development, particularly within the Java Spring Boot ecosystem. My expertise lies in designing, developing, and maintaining scalable microservices. I thrive in collaborative, fast-paced environments, continuously seeking to learn and apply new technologies to solve complex problems. I am committed to writing clean, efficient, and maintainable code.`,
    resumeUrl: 'https://drive.google.com/file/d/1GmXtZpA8Ur3nVKLrBB5kNyHZ3D7kbJYK/view?usp=drive_link',
};

// ────────────────────────────────────────────────────────────
// 📌 Navigation Links
// ────────────────────────────────────────────────────────────
export const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

// ────────────────────────────────────────────────────────────
// 📌 Social Profiles
// ────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/codepratik/',
    github: 'https://github.com/pratik7mo',
    leetcode: 'https://leetcode.com/u/1541013217/',
};

// ────────────────────────────────────────────────────────────
// 📌 Skills Section
// ────────────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
    {
        title: 'Backend',
        skills: [
            { name: 'Java', icon: JavaIcon },
            { name: 'Spring Boot', icon: SpringIcon },
            { name: 'Microservices', icon: MicroservicesIcon },
        ],
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'React.js', icon: ReactIcon },
            { name: 'Tailwind CSS', icon: TailwindIcon },
        ],
    },
    {
        title: 'Databases',
        skills: [
            { name: 'MySQL', icon: MySqlIcon },
            { name: 'MongoDB', icon: MongoDbIcon },
            { name: 'PostgreSQL', icon: PostgreSqlIcon },
        ],
    },
    {
        title: 'Cloud/DevOps',
        skills: [
            { name: 'Docker', icon: DockerIcon },
            { name: 'Kubernetes', icon: KubernetesIcon },
        ],
    },
    {
        title: 'Messaging',
        skills: [
            { name: 'RabbitMQ', icon: RabbitMqIcon },
            { name: 'Kafka', icon: KafkaIcon },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', icon: GitIcon },
            { name: 'Postman', icon: PostmanIcon },
        ],
    },
];

// ────────────────────────────────────────────────────────────
// 📌 Work Experience
// ────────────────────────────────────────────────────────────
export const EXPERIENCE_DATA = [
    {
        role: 'Associate Software Engineer',
        company: 'Silan Software Pvt Ltd.',
        duration: 'Jan 2025 - Present',
        description: [
           'Built responsive React.js frontends and integrated Spring Boot/MySQL backends via RESTful APIs in a microservices architecture with Eureka.', 
           'Used Kafka and RabbitMQ for asynchronous inter-service communication to improve scalability and reliability.',
           'Containerized services with Docker and followed Git workflows with code reviews for maintainable development.',
           'Contributed to Agile sprints, delivering secure, high-quality features in a fast-paced, startup-like environment.',
        ],
    },
    {
        role: 'Project Engineer',
        company: 'Aadyasha Electricals Pvt Ltd.',
        duration: 'Jan 2022 - Dec 2024',
        description: [
            'Assisted in energy monitoring and load management using EcoStruxure and Siemens Power Monitoring to improve efficiency.',
            'Supported SAS implementation and meter configuration for transformers and substations up to 220KV.',
        ],
    },
];

// ────────────────────────────────────────────────────────────
// 📌 Projects Section
// ────────────────────────────────────────────────────────────
export const PROJECTS_DATA = [
    {
        title: 'Fitness App Spring Boot Microservices',
        description:
            'A fully functional AI-powered fitness tracking application built using a microservices architecture. It includes services for user authentication, activity tracking, intelligent recommendations, and scalable deployment using service discovery and message brokers.',
        techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Kafka','RabbitMQ', 'MySQL', 'React'],
        githubUrl: 'https://github.com/pratik7mo/fitness-app-microservices-main',
        liveUrl: '#',
        imageUrl: './fitness-app.jpg',
    },
    {
        title: 'Student Management System',
        description:
            'A comprehensive student management system that allows for efficient management of student data, course registrations, and academic records. It features a user-friendly interface and robust backend services.',
        techStack: ['Java', 'Spring Boot', 'React', 'MySQL'],
        githubUrl: 'https://github.com/pratik7mo/StudentManagementSystem',
        liveUrl: '#',
        imageUrl:
            './images.jpg',
    },
    {
        title: 'API Gateway & Service Discovery',
        description:
            'Implemented an API Gateway using Spring Cloud Gateway for routing and a service discovery mechanism with Eureka for dynamic service registration and discovery.',
        techStack: ['Java', 'Spring Cloud Gateway', 'Eureka', 'Microservices'],
        githubUrl: 'https://github.com/',
        imageUrl:
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    },
];

// ────────────────────────────────────────────────────────────
// 📌 Education
// ────────────────────────────────────────────────────────────
export const EDUCATION_DATA = [
    {
        degree: 'Electrical Engineering, B.Tech',
        institution: 'Siksha \'O\' Anusandhan University',
        Cgpa:8.01,
        duration: '2015 - 2019',
    },
];

// ────────────────────────────────────────────────────────────
// 📌 Certifications
// ────────────────────────────────────────────────────────────
export const CERTIFICATIONS_DATA = [
    {
        name: 'Oracle Certified Java Programmer (OCPJP)',
        issuer: 'GreeksforGeeks',
        date: '2024',
    },
    {
        name: 'Embedded Systems and Web Development',
        issuer: 'Emertxe Information Technologies',
        date: '2023',
    },
];
