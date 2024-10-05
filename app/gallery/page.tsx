"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Info } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";

const topicData = {
    Ballet: {
        title: "Ballet",
        description:
            "Ballet is a type of performance dance that originated during the Italian Renaissance in the fifteenth century and later developed into a concert dance form in France and Russia. It has since become a widespread, highly technical form of dance with its own vocabulary based on French terminology.",
        images: [
            {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.belomediagroup.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fballet-stage-1024x683.jpg&f=1&nofb=1&ipt=a2e825580592201db11ce9632dba7aa10fcc59ec0b3a899dd9dd10e3cc3b66f4&ipo=images",
                alt: "Ballet dancers performing on stage",
            },
            {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.balletaz.org%2Fwp-content%2Fuploads%2F2020%2F07%2Ftutus_divertimento15.jpg&f=1&nofb=1&ipt=883e766f35269151ae90f603ef5f39cdc2d347395deb3d2f589049317014ab25&ipo=images",
                alt: "Ballet dancer in a tutu",
            },
            {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fpassion-makes-performance-group-young-ballet-dancers-practicing-their-routine-dance-studio-269081027.jpg&f=1&nofb=1&ipt=5aa9b7802346b44a53144281f4a213ce89ce4b3fed2e8422ecc1553c5c5178f1&ipo=images",
                alt: "Group of ballet dancers practicing",
            },
        ],
        facts: [
            "Ballet originated in the Italian Renaissance courts of the 15th century.",
            "The first ballet dance academy was the Académie Royale de Danse, opened in Paris in 1661.",
            "Ballet shoes are also called pointe shoes.",
        ],
    },
    HipHop: {
        title: "HipHop",
        description:
            "Hip-hop dance refers to street dance styles primarily performed to hip-hop music or that have evolved as part of hip-hop culture. It includes a wide range of styles primarily breaking, locking, and popping which were created in the 1970s and made popular by dance crews in the United States.",
        images: [
            {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobal-uploads.webflow.com%2F5e2b8863ba7fff8df8949888%2F5ea9e312990e08746d80d094_5e28eadaff920783b494509b_hIP-HOP-DANCE-BLOG.jpeg&f=1&nofb=1&ipt=4f8e6fd8371a81ec17d7e9d25758c3aecef863dbcef820cfe5c0c20ab22d53b5&ipo=images",
                alt: "Hip-hop dancers performing",
            },
            {
                src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbreakdancingninja.com%2Fimages%2FProfessional_Breakdancers%2Ffullsize%2FFreeze_fs.jpg&f=1&nofb=1&ipt=32b07ae053a06c7d22b35ebcc4364e692a9b4e6dc927a61c9fc80f6ee8e23c8c&ipo=images",
                alt: "B-boy doing a freeze",
            },
        ],
        facts: [
            "Hip-hop dance began with DJ Kool Herc and was spread by groups like Rock Steady Crew.",
            "Breaking was created in the Bronx, New York in the early 1970s.",
            "Hip-hop dance is a major element of hip-hop culture, alongside MCing, DJing, and graffiti.",
        ],
    },
    Salsa: {
        title: "Salsa",
        description:
            "Salsa is a lively and energetic Latin dance that originated in the Caribbean. It blends elements from Cuban, Puerto Rican, and African music and dance traditions, and has become a popular social dance worldwide.",
        images: [
            {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.worldatlas.com%2Fr%2Fw1200%2Fupload%2F14%2F7d%2F01%2F10029299773-d952d8c23e-z.jpg&f=1&nofb=1&ipt=8f73473b212367ebe298d73d9670f424a1c584b5eceb40a8cfe324e1db9219dd&ipo=images",
                alt: "Salsa dance basic steps diagram",
            },
            {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1316457.jpg&f=1&nofb=1&ipt=04eed879db256421c6fce6a4effc8a7775f6c246283b6b5b97365a459a3ec644&ipo=images",
                alt: "Dancing salsa to rhythmic Latin music",
            },
            {
                src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbudapestevent.hu%2Fwp-content%2Fuploads%2F2020%2F09%2FFree-Latin-Salsa-Show2.jpg&f=1&nofb=1&ipt=9c590891531e0927993f1a831bd1fc28c1c54ecd88f1d21951afd9a32df3584d&ipo=images",
                alt: "Salsa dancers performing a cross-body lead",
            },
        ],
        facts: [
            "Salsa's rhythm is based on a syncopated beat known as the 'clave.'",
            "Basic salsa steps follow a pattern of quick-quick-slow movements over eight counts.",
            "The most fundamental moves include the cross-body lead and the side-to-side step.",
        ],
    },
};

function GalleryContent() {
    const searchParams = useSearchParams();
    const [data, setData] = useState<any>(null);
    const [showInfo, setShowInfo] = useState(false);
    const [topic, setTopic] = useState<string | null>(null);

    useEffect(() => {
        const topicParam = searchParams.get("name");
        if (topicParam) {
            const formattedTopic = (Object.keys(topicData) as Array<keyof typeof topicData>).find((topic) => topic.toLowerCase() === topicParam.toLowerCase());
            if (formattedTopic) {
                setTopic(formattedTopic);
                setData(topicData[formattedTopic]);
            } else setData(null);
        }
    }, [searchParams]);

    if (!topic || !data) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <p className="text-2xl text-gray-800">Topic not found or loading...</p>
            </div>
        );
    }

    const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } };
    const slideUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

    return (
        <motion.main initial="hidden" animate="visible" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div variants={fadeIn} className="mb-12">
                    <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Home
                    </Link>
                </motion.div>
                <motion.h1 variants={slideUp} className="text-5xl font-extrabold text-gray-900 mb-4">
                    {data.title}
                </motion.h1>
                <motion.p variants={slideUp} className="text-xl text-gray-600 mb-12 max-w-3xl">
                    {data.description}
                </motion.p>
                <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {data.images.map((image: { src: string; alt: string }, index: number) => (
                        <motion.div key={index} whileHover={{ scale: 1.05 }} className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
                            <Image src={image.src} alt={image.alt} fill style={{ objectFit: "cover" }} className="transition-transform duration-300 hover:scale-110" />
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div variants={slideUp} className="bg-white rounded-lg shadow-2xl p-8 relative">
                    <button onClick={() => setShowInfo(!showInfo)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900">
                        <Info size={24} />
                    </button>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h2>
                    {showInfo && (
                        <ul className="space-y-2">
                            {data.facts.map((fact: string, index: number) => (
                                <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="text-gray-700 flex items-start">
                                    <span className="text-indigo-500 mr-2">•</span>
                                    {fact}
                                </motion.li>
                            ))}
                        </ul>
                    )}
                </motion.div>
            </div>
        </motion.main>
    );
}

export default function GalleryPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GalleryContent />
        </Suspense>
    );
}
