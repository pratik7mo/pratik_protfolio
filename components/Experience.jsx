import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants/data.js';
import Section from './Section.jsx';

const Experience = () => {
    return (
        <Section id="experience" title="Experience">
            <div className="relative border-l-2 border-accent/30 ml-4 md:ml-0">
                <motion.div
                    className="absolute left-[-1.5px] top-0 w-1 h-full bg-accent origin-top"
                    style={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'circOut' }}
                />
                {EXPERIENCE_DATA.map((job, index) => (
                    <motion.div 
                        key={index} 
                        className="mb-12 ml-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5, delay: index * 0.2 }
                            }
                        }}
                    >
                        <motion.span 
                            className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-light-secondary dark:ring-dark-secondary"
                            variants={{
                                hidden: { scale: 0 },
                                visible: { scale: 1 }
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 }}
                        >
                           <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        </motion.span>
                        <motion.div 
                            className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md border border-transparent"
                            whileHover={{
                                boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)',
                                borderColor: 'rgba(59, 130, 246, 0.5)',
                                y: -4
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">{job.role}</h3>
                            <p className="text-md font-medium text-accent">{job.company}</p>
                            <p className="text-sm text-light-text/70 dark:text-dark-text/70 mb-4">{job.duration}</p>
                            <ul className="list-disc list-inside space-y-2">
                                {job.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;