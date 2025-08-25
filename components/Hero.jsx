import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA, SOCIAL_LINKS } from '../constants/data.js';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons.jsx';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 500, damping: 30 },
  },
};

const Hero = () => {
  const name = PERSONAL_DATA.name.split("");

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        {/* Animated Name */}
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-light-text dark:text-dark-text"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {"Hi, I'm ".split("").map((char, index) => (
            <motion.span key={`intro-${index}`} variants={letter}>
              {char}
            </motion.span>
          ))}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 dark:to-teal-400"
            style={{ backgroundSize: '200% auto', display: 'inline-block' }}
            animate={{ backgroundPosition: ["-200% center", "200% center"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
              delay: 1.5,
            }}
          >
            {name.map((char, index) => (
              <motion.span key={`name-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.span>
          {".".split("").map((char, index) => (
            <motion.span key={`outro-${index}`} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Job Title */}
        <motion.p
          className="mt-4 text-xl sm:text-2xl text-light-text/80 dark:text-dark-text/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {PERSONAL_DATA.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg text-light-text/70 dark:text-dark-text/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {PERSONAL_DATA.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {/* Resume Button */}
          <motion.a
            href={PERSONAL_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Resume"
            aria-label="View Resume PDF"
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-accent-hover transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            View Resume
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0">
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-light-card dark:bg-dark-card rounded-full shadow-md"
              whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-light-card dark:bg-dark-card rounded-full shadow-md"
              whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <LinkedinIcon />
            </motion.a>

            <motion.a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-3 bg-light-card dark:bg-dark-card rounded-full shadow-md"
              whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <LeetcodeIcon />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
