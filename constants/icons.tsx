import React from 'react';

// A generic wrapper for icons to reduce boilerplate
const IconWrapper = ({ children, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {children}
    </svg>
);

export const JavaIcon = () => <IconWrapper><path d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7zm5 12a4 4 0 0 1-4-4h8a4 4 0 0 1-4 4zm-4-6a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></IconWrapper>;
export const SpringIcon = () => <IconWrapper><path d="M12 2a10 10 0 0 0-10 10c0 3.3 1.6 6.2 4 8 .3.1.5-.2.4-.5-.1-.4-.2-.8-.2-1.3 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .5-.1 1-.2 1.3-.1.3.1.6.4.5 2.4-1.8 4-4.7 4-8A10 10 0 0 0 12 2z"/></IconWrapper>;
export const MicroservicesIcon = () => <IconWrapper><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></IconWrapper>;
export const ReactIcon = () => (
    <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
    </svg>
);
export const TailwindIcon = () => <IconWrapper><path d="M12 12c-3 0-6 3-6 6s3 6 6 6 6-3 6-6-3-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-6-18h12v2H6zm6 6c3 0 6-3 6-6s-3-6-6-6-6 3-6 6 3 6 6 6zm0-10c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"/></IconWrapper>;
export const DockerIcon = () => <IconWrapper><path d="M21.5 12.5c0-4.2-3.1-7.8-7.3-8.4-1-.1-1.7.6-1.7 1.5v.3c0 .8.6 1.4 1.4 1.4.9 0 1.7-.6 1.7-1.4v-.2c2.8.6 5 3.1 5 6.1s-2.1 5.5-4.9 6.1v-.2c0-.8-.7-1.4-1.6-1.4-.8 0-1.4.6-1.4 1.4v.3c0 .9.7 1.6 1.6 1.5 4.3-.6 7.4-4.2 7.4-8.4zM12 10.3c-.9 0-1.7.6-1.7 1.4v.3c0 .8.7 1.4 1.6 1.4.8 0 1.4-.6 1.4-1.4v-.3c0-.8-.6-1.4-1.3-1.4zM4.5 12.5c0-4.2 3.1-7.8 7.3-8.4-1-.1-1.7.6-1.7 1.5v.3c0 .8.6 1.4 1.4 1.4.9 0 1.7-.6 1.7-1.4v-.2c2.8.6 5 3.1 5 6.1s-2.1 5.5-4.9 6.1v-.2c0-.8-.7-1.4-1.6-1.4-.8 0-1.4.6-1.4 1.4v.3c0 .9.7 1.6 1.6 1.5 4.3-.6 7.4-4.2 7.4-8.4zM2.5 12.5c0-2.8 1.9-5.2 4.5-6.1V6c0-.8-.7-1.4-1.6-1.4-.8 0-1.4.6-1.4 1.4v.3c0 .9.7 1.6 1.6 1.5-2 .9-3.4 2.9-3.6 5.3H2c-.6 0-1 .4-1 1s.4 1 1 1h.5z"/></IconWrapper>;
export const KubernetesIcon = () => <IconWrapper><path d="M12 2l8 4.5V17l-8 4.5L4 17V6.5L12 2zM12 12.5L20 8l-4 2.25v4.5L12 17l-4-2.25v-4.5L4 8l8 4.5z"/></IconWrapper>;
export const AWSIcon = () => <IconWrapper><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></IconWrapper>;
export const JenkinsIcon = () => <IconWrapper><path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0"/><path d="M12 8v8"/><path d="M16 10v4"/></IconWrapper>;
export const GitIcon = () => <IconWrapper><path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/><path d="M10.59 10.59L3 18"/><path d="M21 3l-7.41 7.41"/></IconWrapper>;
export const PostmanIcon = () => <IconWrapper><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></IconWrapper>;
export const MySqlIcon = () => <IconWrapper><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></IconWrapper>;
export const MongoDbIcon = () => <IconWrapper><path d="M12 2a10 10 0 0 0-10 10c0 4.4 2.9 8.1 6.8 9.5.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-1-.7.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1 1 .7 2.6.5 3.2.4.1-.3.4-.5.6-.6-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-3 0 0 1-.3 3.2 1.2a11.5 11.5 0 0 1 6 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.7.1 3 1.2 1.2 1.2 2.2 0 3-4 4.3-2.6 5.2-5.1 5.5.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5C19.1 20.1 22 16.4 22 12A10 10 0 0 0 12 2z"/></IconWrapper>;
export const RedisIcon = () => <IconWrapper><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z"/></IconWrapper>;
export const PostgreSqlIcon = () => <IconWrapper><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.1 15.5c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6c1.2 0 2.3.5 3.1 1.3v-1h2.2v4.5h-1.6v-1.9c-.4-.5-1.1-.9-1.8-.9-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7c.7 0 1.4-.4 1.8-.9v-1.9h1.6v4.5c-.8.8-1.9 1.3-3.1 1.3z" /></IconWrapper>;
export const KafkaIcon = () => <IconWrapper><path d="M6 4l8 8-8 8" /><path d="M12 4l8 8-8 8" /></IconWrapper>;
export const RabbitMqIcon = () => <IconWrapper><path d="M15.5 14.5c0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.4 2.5 4.3V14h5v4.8c1.5-.9 2.5-2.5 2.5-4.3zM12 4c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm5 2h-1.5c.3 1 .5 2.1.5 3.2 0 1.2-.2 2.3-.5 3.2H17c.6-1 .9-2.1.9-3.2s-.3-2.2-.9-3.2zM7 6H5.5c-.6 1-.9 2.1-.9 3.2s.3 2.2.9 3.2H7c-.3-1-.5-2.1-.5-3.2s.2-2.3.5-3.2z" /></IconWrapper>;