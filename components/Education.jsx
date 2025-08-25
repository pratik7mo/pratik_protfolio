import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../constants/data.js';
import Section from './Section.jsx';

const Education = () => {
    return (
        <Section id="education" title="Education & Certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Education</h3>
                    {EDUCATION_DATA.map((edu, index) => (
                        <motion.div 
                            key={index}
                            className="rounded-lg shadow-md mb-6 p-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ 
                                y: -8, 
                                scale: 1.03,
                                background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
                                transition: { type: 'spring', stiffness: 300 }
                            }}
                        >
                            <div className="w-full h-full bg-light-card dark:bg-dark-card rounded-md p-6">
                                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                                <p className="text-accent">{edu.institution}</p>
                                <p className="text-sm text-light-text/70 dark:text-dark-text/70">{edu.duration}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Certifications</h3>
                    {CERTIFICATIONS_DATA.map((cert, index) => (
                        <motion.div 
                            key={index}
                            className="rounded-lg shadow-md mb-6 p-1"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ 
                                y: -8, 
                                scale: 1.03,
                                background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
                                transition: { type: 'spring', stiffness: 300 }
                            }}
                        >
                            <div className="w-full h-full bg-light-card dark:bg-dark-card rounded-md p-6">
                                <h4 className="text-xl font-semibold">{cert.name}</h4>
                                <p className="text-accent">{cert.issuer}</p>
                                <p className="text-sm text-light-text/70 dark:text-dark-text/70">{cert.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Education;