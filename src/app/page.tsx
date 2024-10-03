"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Menu, X } from "lucide-react";

// =========================================================================
interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
}

const BlogGrid: React.FC = () => {
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "The Art of Ballet",
            excerpt: "Explore the elegance, discipline, and history behind ballet...",
            image: "/ballet.jpg",
            date: "May 15, 2023",
        },
        {
            id: 2,
            title: "5 Tips for Beginner Dancers",
            excerpt: "Start your dance journey on the right foot with these essential tips...",
            image: "/beginner-dance.jpg",
            date: "June 2, 2023",
        },
        {
            id: 3,
            title: "The History of Hip-Hop",
            excerpt: "Dive into the origins and evolution of Hip-Hop culture and dance...",
            image: "/hiphop.jpg",
            date: "June 20, 2023",
        },
        {
            id: 4,
            title: "Mastering Salsa: A Beginner's Guide",
            excerpt: "Learn the basics of Salsa and take your first steps toward mastering this vibrant dance style...",
            image: "/salsa.jpg",
            date: "July 10, 2023",
        },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <motion.article
                    key={post.id}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#202020] shadow-2xl shadow-black rounded-2xl  overflow-hidden"
                >
                    <div className="relative w-full h-48">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-0 left-0 bg-[#ffcc00] text-[#30323d] px-3 py-1 m-4 rounded-full text-sm font-semibold">{post.date}</div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-[#ffeb99]">{post.title}</h3>
                        <p className="text-[#ffe270] mb-4 text-sm">{post.excerpt}</p>
                        <Link href={`/blog/${post.id}`} className="inline-block bg-[#ffcc00] text-[#30323d] py-2 px-4 rounded-full text-sm font-semibold hover:bg-[#ffda47] transition-colors">
                            Read More
                        </Link>
                    </div>
                </motion.article>
            ))}
        </div>
    );
};
// =========================================================================
const CallToActionSection: React.FC = () => {
    return (
        <motion.section
            className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 text-center bg-gradient-to-r from-[#202020] to-[#333533] relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div className="absolute inset-0 opacity-10" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 20 L40 20 M20 0 L20 40" stroke="#ffeb99" strokeWidth="1" fill="none" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
            </motion.div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl mb-8 text-[#ffeb99] font-bold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Join the Dance Revolution
                </motion.h2>
                <motion.p className="text-xl sm:text-2xl md:text-3xl mb-12 text-[#ffeb99]" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                    Ready to unleash your inner dancer? Let's create magic on the dance floor together!
                </motion.p>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-[#ffcc00] text-[#30323d] py-4 px-10 rounded-full text-2xl font-bold hover:bg-[#ffda47] transition-all duration-300 shadow-lg group"
                    >
                        Start Your Journey
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};
// =========================================================================
interface DanceClass {
    id: number;
    title: string;
    description: string;
    image: string;
    level: string;
}
const DanceClasses: React.FC = () => {
    const classes: DanceClass[] = [
        {
            id: 1,
            title: "Ballet Basics",
            description: "Learn the fundamentals of Ballet and develop grace and poise.",
            image: "/ballet-class.jpg",
            level: "Beginner",
        },
        {
            id: 2,
            title: "Hip-Hop Grooves",
            description: "Master the energetic and dynamic moves of Hip-Hop dance.",
            image: "/hiphop-class.jpg",
            level: "Intermediate",
        },
        {
            id: 3,
            title: "Salsa Rhythms",
            description: "Immerse yourself in the vibrant rhythms and steps of Salsa.",
            image: "/salsa-class.jpg",
            level: "All Levels",
        },
        {
            id: 4,
            title: "Contemporary Flow",
            description: "Express yourself through the fluid and versatile styles of Contemporary dance.",
            image: "/contemporary-class.jpg",
            level: "Advanced",
        },
        {
            id: 5,
            title: "Tango Passion",
            description: "Experience the intensity and connection of Tango dancing.",
            image: "/tango-class.jpg",
            level: "Intermediate",
        },
        {
            id: 6,
            title: "Kathak Beats",
            description: "Delve into the intricate rhythms and storytelling of Kathak.",
            image: "/kathak-class.jpg",
            level: "All Levels",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {classes.map((danceClass) => (
                <motion.div
                    key={danceClass.id}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#202020]  shadow-2xl shadow-black rounded-2xl overflow-hidden"
                >
                    <div className="relative h-48">
                        <Image src={danceClass.image} alt={danceClass.title} fill className="object-cover" />
                        <div className="absolute top-0 right-0 bg-[#ffcc00] text-[#30323d] px-3 py-1 m-4 rounded-full text-sm font-semibold">{danceClass.level}</div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-[#ffeb99]">{danceClass.title}</h3>
                        <p className="text-[#ffe270] mb-4 text-sm">{danceClass.description}</p>
                        <button className="bg-[#ffcc00] text-[#30323d] py-2 px-4 rounded-full text-sm font-semibold hover:bg-[#ffda47] transition-colors">Enroll Now</button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
// =========================================================================
interface Performance {
    id: number;
    title: string;
    image: string;
}
const PerformanceCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
    const performances: Performance[] = [
        {
            id: 1,
            title: "Ballet Showcase",
            image: "/ballet-showcase.jpg",
        },
        {
            id: 2,
            title: "Hip-Hop Battle",
            image: "/hiphop-battle.jpg",
        },
        {
            id: 3,
            title: "Salsa Nights",
            image: "/salsa-nights.jpg",
        },
        {
            id: 4,
            title: "Tango Elegance",
            image: "/tango-elegance.jpg",
        },
        {
            id: 5,
            title: "Kathak Fiesta",
            image: "/kathak-fiesta.jpg",
        },
    ];
    const nextSlide = (): void => setCurrentIndex((prevIndex) => (prevIndex + 1) % performances.length);
    const prevSlide = (): void => setCurrentIndex((prevIndex) => (prevIndex - 1 + performances.length) % performances.length);
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlay) interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlay]);

    return (
        <div className="relative w-full h-[80vh] overflow-hidden group  shadow-2xl shadow-black rounded-2xl">
            <AnimatePresence initial={false}>
                <motion.div key={currentIndex} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    <Image src={performances[currentIndex].image} alt={performances[currentIndex].title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-4xl sm:text-6xl font-bold text-[#ffeb99] text-center">{performances[currentIndex].title}</h2>
                    </div>
                </motion.div>
            </AnimatePresence>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {performances.map((_, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#ffcc00]" : "bg-[#ffeb99]"}`} />
                ))}
            </div>
            <button onClick={() => setIsAutoPlay(!isAutoPlay)} className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded">
                {isAutoPlay ? "Pause" : "Play"}
            </button>
        </div>
    );
};
// =========================================================================
const ResponsiveNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks: any[] = [
        { href: "/blog", label: "Blog" },
        { href: "/home", label: "Home" },
        { href: "/classes", label: "Classes" },
        { href: "/contact", label: "Contact" },
        { href: "/performances", label: "Performances" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl text-[#ffeb99] shadow-lg shadow-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold">
                            Dance Studio
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="hover:text-[#ffcc00] transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-[#ffeb99] hover:text-[#ffcc00] focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="hover:text-[#ffcc00] transition-colors block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
// =========================================================================
const Home: React.FC = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    return (
        <motion.main initial="initial" animate="animate" className="min-h-screen bg-gradient-to-b from-[#202020] to-[#333533] text-[#ffeb99] overflow-x-hidden">
            <ResponsiveNavbar />
            <motion.section className="relative h-screen flex items-center justify-center px-8 sm:px-12" variants={fadeIn}>
                <div className="absolute inset-0 w-full h-full">
                    <motion.img
                        src="/hero-background.jpg"
                        alt="Dance studio background"
                        className="object-cover w-full h-full"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2 }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>
                <motion.div className="relative z-10 text-center max-w-4xl" variants={staggerChildren}>
                    <motion.h1 className="text-5xl sm:text-7xl md:text-8xl mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ffeb99]" variants={fadeIn}>
                        Dance to the Rhythm of the World
                    </motion.h1>
                    <motion.p className="text-xl sm:text-2xl md:text-3xl mb-8 text-[#ffeb99]" variants={fadeIn}>
                        Experience the passion and diversity of global dance styles
                    </motion.p>
                    <motion.div variants={fadeIn}>
                        <a href="#classes" className="inline-block bg-[#ffcc00] text-[#30323d] py-3 px-8 rounded-full text-xl font-bold hover:bg-[#ffda47] transition-colors shadow-lg">
                            Explore Classes
                        </a>
                    </motion.div>
                </motion.div>
            </motion.section>
            <CallToActionSection />
            <motion.section id="performances" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#333533]" variants={fadeIn}>
                <motion.h2 className="text-4xl sm:text-5xl md:text-6xl text-center mb-12 text-[#ffeb99] font-bold" variants={fadeIn}>
                    Captivating Performances
                </motion.h2>
                <PerformanceCarousel />
            </motion.section>
            <motion.section id="classes" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#202020]" variants={fadeIn}>
                <motion.h2 className="text-4xl sm:text-5xl md:text-6xl text-center mb-12 text-[#ffeb99] font-bold" variants={fadeIn}>
                    Our Classes
                </motion.h2>
                <DanceClasses />
            </motion.section>
            <motion.section id="blog" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#333533]" variants={fadeIn}>
                <motion.h2 className="text-4xl sm:text-5xl md:text-6xl text-center mb-12 text-[#ffeb99] font-bold" variants={fadeIn}>
                    Dance Insights
                </motion.h2>
                <BlogGrid />
            </motion.section>
            <footer className="bg-[#202020] text-[#ffeb99] py-8 px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Dance Studio</h3>
                        <p>Inspiring passion through movement</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
                        <ul>
                            <li>
                                <a href="#" className="hover:text-[#ffcc00]">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#classes" className="hover:text-[#ffcc00]">
                                    Classes
                                </a>
                            </li>
                            <li>
                                <a href="#performances" className="hover:text-[#ffcc00]">
                                    Performances
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="hover:text-[#ffcc00]">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
                        <p>123 Dance Avenue, Rhythmville</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@dancestudio.com</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2023 Dance Studio. All rights reserved.</p>
                </div>
            </footer>
        </motion.main>
    );
};

export default Home;
