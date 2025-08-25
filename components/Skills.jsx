import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants/data.js';
import Section from './Section.jsx';

const Skills = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <Section id="skills" title="Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILL_CATEGORIES.map((category, index) => (
                    <motion.div 
                        key={index}
                        className="rounded-xl shadow-lg p-1"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ 
                            y: -8, 
                            scale: 1.03,
                            background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
                            transition: { type: 'spring', stiffness: 300 }
                        }}
                    >
                        <div className="w-full h-full bg-light-card dark:bg-dark-card rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4 text-accent">{category.title}</h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map(skill => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            className="flex items-center gap-2 bg-light-secondary dark:bg-dark-secondary p-2 rounded-lg"
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.1, y: -2, transition: { type: 'spring', stiffness: 300 } }}
                                            title={skill.name}
                                        >
                                            <span className="text-accent"><Icon /></span>
                                            <span className="font-medium">{skill.name}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;