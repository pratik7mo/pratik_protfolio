import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA } from '../constants/data.js';
import Section from './Section.jsx';

const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                <motion.div 
                    className="md:col-span-1 flex justify-center"
                    initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 0.1 }}
                >
                    <img 
                        src={PERSONAL_DATA.profilePic} 
                        alt={PERSONAL_DATA.name}
                        className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg border-4 border-light-card dark:border-dark-card"
                    />
                </motion.div>
                <motion.div 
                    className="md:col-span-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-lg text-light-text/90 dark:text-dark-text/90 leading-relaxed">
                        {PERSONAL_DATA.about}
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;