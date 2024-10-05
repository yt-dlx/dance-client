"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function EnrollContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [className, setClassName] = useState<string>("");
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", danceClass: "" });

    useEffect(() => {
        const classParam = searchParams.get("class");
        if (classParam) {
            const decodedClassName = decodeURIComponent(classParam);
            setClassName(decodedClassName);
            setFormData((prevData) => ({ ...prevData, danceClass: decodedClassName }));
        }
    }, [searchParams]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Enrollment successful! We will contact you soon.");
        router.push("/");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen bg-gradient-to-b from-[#F0F0F0] to-[#E0E0E0] py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-md mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                    <h2 className="text-3xl font-bold text-center text-yellow-900 mb-8">Enroll Now: {className}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-yellow-950">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-yellow-950">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-yellow-950">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="danceClass" className="block text-sm font-medium text-yellow-950">
                                Dance Class
                            </label>
                            <input
                                type="text"
                                id="danceClass"
                                name="danceClass"
                                required
                                value={formData.danceClass}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Enroll
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
}

export default function EnrollPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EnrollContent />
        </Suspense>
    );
}
