import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, title }) => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <motion.section
            id={id}
            className="py-16 sm:py-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            aria-labelledby={`${id}-heading`}
        >
            <h2 id={`${id}-heading`} className="text-3xl sm:text-4xl font-bold text-center mb-12">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-500 to-purple-600 dark:from-accent dark:via-sky-400 dark:to-cyan-300">
                    {title}
                </span>
            </h2>
            {children}
        </motion.section>
    );
};

export default Section;