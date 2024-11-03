import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        fontFamily: {
            Kurale: ["var(--font-Kurale)"],
        },
    },
    plugins: [],
};
export default config;
