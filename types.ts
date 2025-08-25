
import type React from 'react';

export interface Skill {
    name: string;
    icon: React.ComponentType;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string[];
}

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
    imageUrl: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    duration: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
}