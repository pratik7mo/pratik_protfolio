import React from 'react';
import { SOCIAL_LINKS, PERSONAL_DATA } from '../constants/data.js';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons.jsx';

const Footer = () => {
    return (
        <footer className="bg-light-card dark:bg-dark-card mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <div className="flex items-center justify-center gap-6 mb-4">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-light-text/80 dark:text-dark-text/80 hover:text-accent dark:hover:text-accent transition-colors"><GithubIcon /></a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light-text/80 dark:text-dark-text/80 hover:text-accent dark:hover:text-accent transition-colors"><LinkedinIcon /></a>
                    <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-light-text/80 dark:text-dark-text/80 hover:text-accent dark:hover:text-accent transition-colors"><LeetcodeIcon /></a>
                </div>
                <p>&copy; {new Date().getFullYear()} {PERSONAL_DATA.name}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;