import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section.jsx';
import emailjs from '@emailjs/browser';   // ✅ Import EmailJS

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Send email using EmailJS
        emailjs
            .send(
                "service_pyis2cr",   // <-- Your Service ID from EmailJS
                "template_t8x3yow",    // <-- Your Template ID from EmailJS
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    message: formData.message,
                },
                "ANTSuznd_eJZx5ooq" // <-- Your Public Key from EmailJS
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setSubmitted(true);
                    setFormData({ name: '', email: '', message: '' }); // Reset form
                    setTimeout(() => setSubmitted(false), 3000);
                },
                (err) => {
                    console.error("FAILED...", err);
                    alert("Message failed to send. Check console.");
                }
            );
    };

    const inputStyles =
        "w-full px-4 py-2 rounded-lg bg-light-card dark:bg-dark-card border border-light-text/20 dark:border-dark-text/20 focus:ring-accent focus:border-accent outline-none";

    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-2xl mx-auto">
                <p className="text-center mb-8">
                    Have a question or want to work together? Feel free to reach out.
                </p>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <motion.input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputStyles}
                            whileFocus={{
                                boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.4)',
                                borderColor: 'rgba(59, 130, 246, 1)',
                            }}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <motion.input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={inputStyles}
                            whileFocus={{
                                boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.4)',
                                borderColor: 'rgba(59, 130, 246, 1)',
                            }}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <motion.textarea
                            name="message"
                            id="message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className={inputStyles}
                            whileFocus={{
                                boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.4)',
                                borderColor: 'rgba(59, 130, 246, 1)',
                            }}
                        ></motion.textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <motion.button
                            type="submit"
                            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-accent-hover transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                            Send Message
                        </motion.button>
                    </div>
                </motion.form>

                {/* Success Message */}
                {submitted && (
                    <p className="text-center mt-4 text-green-500">
                        ✅ Thank you! Your message has been sent.
                    </p>
                )}
            </div>
        </Section>
    );
};

export default Contact;
