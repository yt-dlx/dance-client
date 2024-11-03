// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdHome, MdContacts } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { FaPlay, FaPause, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Home: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const blogPosts = [
        {
            id: 1,
            url: "#",
            title: "HipHop",
            image: "/hiphop.jpg",
            date: "June 20, 2023",
            youtubeLink: "https://www.youtube.com/@TheFreedomDance",
            facebookLink: "https://www.facebook.com/profile.php?id=61567729653619&mibextid=ZbWKwL",
            excerpt: "Explore the evolution of hip-hop dance, its cultural roots, and how it’s influenced modern styles.",
            instagramLink: "https://www.instagram.com/the_freedom_dance/profilecard/?igsh=MTRndjBndnNhZGQycA==",
        },
        {
            id: 2,
            url: "#",
            title: "Contemporary",
            date: "June 20, 2023",
            image: "/contemporary.jpg",
            youtubeLink: "https://www.youtube.com/@TheFreedomDance",
            facebookLink: "https://www.facebook.com/profile.php?id=61567729653619&mibextid=ZbWKwL",
            instagramLink: "https://www.instagram.com/the_freedom_dance/profilecard/?igsh=MTRndjBndnNhZGQycA==",
            excerpt: "Dive into contemporary dance, where fluidity meets storytelling to connect with audiences on a deeper level.",
        },
        {
            id: 3,
            url: "#",
            title: "Freestyle",
            image: "/freestyle.jpg",
            date: "June 20, 2023",
            youtubeLink: "https://www.youtube.com/@TheFreedomDance",
            facebookLink: "https://www.facebook.com/profile.php?id=61567729653619&mibextid=ZbWKwL",
            excerpt: "Discover the art of freestyle dance, where dancers express creativity and individuality without limits.",
            instagramLink: "https://www.instagram.com/the_freedom_dance/profilecard/?igsh=MTRndjBndnNhZGQycA==",
        },
    ];

    const performances = [
        {
            id: 1,
            title: "Hip-Hop Highlights",
            image: "/hiphop.jpg",
        },
        {
            id: 2,
            title: "Contemporary Fusion",
            image: "/contemporary.jpg",
        },
        {
            id: 3,
            title: "Freestyle Expressions",
            image: "/freestyle.jpg",
        },
    ];

    const nextSlide = (): void => setCurrentIndex((prevIndex) => (prevIndex + 1) % performances.length);
    const prevSlide = (): void => setCurrentIndex((prevIndex) => (prevIndex - 1 + performances.length) % performances.length);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlay) interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const menuVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -20 },
    };
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    return (
        <motion.main initial="initial" animate="animate" className="min-h-screen bg-gradient-to-b from-[#F0F0F0] to-[#E0E0E0] text-yellow-950 overflow-x-hidden">
            {/* Navigation Bar */}
            <motion.nav
                className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-xl text-yellow-950 shadow"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <motion.div className="flex items-center" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                            <Link href="#home" className="text-2xl font-bold">
                                Freedom Dance Studio
                            </Link>
                        </motion.div>
                        <div className="hidden md:block">
                            <motion.div className="ml-10 flex items-baseline space-x-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, staggerChildren: 0.1 }}>
                                {[
                                    { label: "Home", icon: <MdHome />, href: "#home" },
                                    { label: "Contact", icon: <MdContacts />, href: "#contact" },
                                    { label: "Performances", icon: <FaPlay />, href: "#performances" },
                                ].map(({ label, icon, href }) => (
                                    <motion.div key={label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Link href={href} className="hover:text-green-700 transition-colors px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2">
                                            {icon}
                                            <span>{label}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        <div className="md:hidden">
                            <motion.button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-yellow-950 hover:text-green-700 focus:outline-none"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div className="md:hidden" initial="closed" animate="open" exit="closed" variants={menuVariants}>
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {[
                                    { label: "Home", icon: <MdHome />, href: "#home" },
                                    { label: "Contact", icon: <MdContacts />, href: "#contact" },
                                    { label: "Performances", icon: <FaPlay />, href: "#performances" },
                                ].map(({ label, icon, href }) => (
                                    <motion.div key={label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Link
                                            href={href}
                                            className="hover:text-green-700 transition-colors px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {icon}
                                            <span>{label}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero Section */}
            <motion.section className="relative h-screen flex items-center justify-center px-8 sm:px-12 bg-gradient-to-r from-[#F0F0F0] to-[#E0E0E0]" variants={fadeInUp}>
                <div className="absolute inset-0 opacity-10">
                    <motion.div className="w-full h-full" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="200%" height="200%">
                            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M0 20 L40 20 M20 0 L20 40" stroke="#000000" strokeWidth="1" fill="none" />
                            </pattern>
                            <rect width="200%" height="200%" fill="url(#pattern)" />
                        </svg>
                    </motion.div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.h2 className="text-5xl sm:text-6xl md:text-7xl mb-8 text-yellow-900 font-bold" variants={fadeInUp}>
                        Join the Dance Revolution
                    </motion.h2>
                    <motion.p className="text-xl sm:text-2xl md:text-3xl mb-12 text-yellow-950" variants={fadeInUp}>
                        Ready to unleash your inner dancer? Let's create magic on the dance floor together!
                    </motion.p>

                    {/* Enlarged Circular Image (hiphop.jpg) */}
                    <motion.div className="flex justify-center mb-6" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
                        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/hiphop.jpg" // Ensure this path is correct and the image exists in the public folder
                                alt="HipHop Dance"
                                width={224} // Adjusted width for larger image
                                height={224} // Adjusted height for larger image
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Start Your Journey Button */}
                    <motion.div variants={fadeInUp}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="#performances"
                                className="inline-flex items-center bg-green-700 text-white py-4 px-10 rounded-xl text-2xl font-bold hover:bg-[#ff8c00] transition-all duration-300 shadow group"
                            >
                                Start Your Journey
                                <motion.div className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <FaArrowRight />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Performances Section */}
            <motion.section id="performances" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white" variants={fadeInUp}>
                <motion.h2 className="text-4xl sm:text-5xl md:text-6xl text-center mb-12 text-yellow-900 font-bold" variants={fadeInUp}>
                    Captivating Performances
                </motion.h2>
                <div className="relative w-full h-[80vh] overflow-hidden group shadow rounded-xl">
                    <AnimatePresence initial={false}>
                        <motion.div key={currentIndex} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                            <Image src={performances[currentIndex].image} alt={performances[currentIndex].title} fill className="object-cover" unoptimized />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <motion.h2 className="text-4xl sm:text-6xl font-bold text-white text-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                                    {performances[currentIndex].title}
                                </motion.h2>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <motion.button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-xl text-yellow-950 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-xl text-yellow-950 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight size={24} />
                    </motion.button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {performances.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-xl ${index === currentIndex ? "bg-green-700" : "bg-white"}`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            />
                        ))}
                    </div>
                    <motion.button
                        onClick={() => setIsAutoPlay(!isAutoPlay)}
                        className="absolute bottom-4 right-4 bg-white/50 text-yellow-950 px-3 py-1 rounded"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isAutoPlay ? <FaPause /> : <FaPlay />}
                    </motion.button>
                </div>
            </motion.section>

            {/* Blog Section */}
            <motion.section id="blog" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white" variants={fadeInUp}>
                <motion.h2 className="text-4xl sm:text-5xl md:text-6xl text-center mb-12 text-yellow-900 font-bold" variants={fadeInUp}>
                    Dance Insights
                </motion.h2>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerChildren} initial="hidden" animate="visible">
                    {blogPosts.map((post) => (
                        <motion.article key={post.id} variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white shadow shadow-black border-2 border-black rounded-xl overflow-hidden">
                            <div className="relative w-full h-80">
                                <Image src={post.image} alt={post.title} fill className="object-cover" />
                                <motion.div
                                    className="absolute top-0 left-0 bg-yellow-500 text-yellow-950 px-3 py-1 m-4 rounded-xl text-sm font-semibold"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {post.date}
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-yellow-950">{post.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                                {/* Social Media Buttons */}
                                <motion.div className="flex space-x-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                    <motion.a
                                        href={post.youtubeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="YouTube"
                                    >
                                        <FaYoutube size={20} />
                                    </motion.a>
                                    <motion.a
                                        href={post.instagramLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram size={20} />
                                    </motion.a>
                                    <motion.a
                                        href={post.facebookLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Facebook"
                                    >
                                        <FaFacebook size={20} />
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </motion.section>

            {/* Footer */}
            <motion.footer className="bg-[#F0F0F0] text-yellow-950 py-8 px-4 sm:px-6 md:px-8 lg:px-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
                    <motion.div className="w-full md:w-1/3 mb-6 md:mb-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                        <h3 className="text-2xl font-bold mb-2">Freedom Dance Studio</h3>
                        <p>Inspiring passion through the art of dance</p>
                    </motion.div>
                    <motion.div className="w-full md:w-1/3 mb-6 md:mb-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
                        <ul>
                            {["Home", "Performances", "Blog"].map((label) => (
                                <motion.li whileHover={{ x: 5 }} key={label}>
                                    <a href="#" className="hover:text-green-700">
                                        {label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div className="w-full md:w-1/3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                        <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
                        <p>
                            <FaMapMarkerAlt className="inline-block mr-2" /> 123 Bhangra Avenue, Mumbai
                        </p>
                        <p>
                            <FaPhone className="inline-block mr-2" /> Phone: (91) 123-456-7890
                        </p>
                        <p>
                            <FaEnvelope className="inline-block mr-2" /> Email: info@FreedomDanceStudio.com
                        </p>
                    </motion.div>
                </div>
                <motion.div className="mt-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                    <p>&copy; 2023 Freedom Dance Studio All rights reserved.</p>
                </motion.div>
            </motion.footer>
        </motion.main>
    );
};

export default Home;
