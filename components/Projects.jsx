import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants/data.js';
import Section from './Section.jsx';

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS_DATA.map((project, index) => (
                    <motion.div 
                        key={index}
                        className="bg-light-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden flex flex-col p-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ 
                            y: -8, 
                            scale: 1.03,
                            background: 'linear-gradient(to right, #3b82f6, #14b8a6)',
                            transition: { type: 'spring', stiffness: 200 }
                        }}
                    >
                        <div className="w-full h-full bg-light-card dark:bg-dark-card rounded-md overflow-hidden flex flex-col">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-light-text/80 dark:text-dark-text/80 mb-4 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</span>
                                    ))}
                                </div>
                                <div className="mt-auto flex items-center gap-4">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>
                                    {project.liveUrl && project.liveUrl !== '#' && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Live Demo</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;