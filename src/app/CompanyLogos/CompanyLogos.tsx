import React from "react";

const companyLogos = [
    { src: "/images/spotify-logo.png", alt: "Spotify" },
    { src: "/images/slack-logo.png", alt: "Slack" },
    { src: "/images/envato-logo.png", alt: "Envato" },
    { src: "/images/google-logo.png", alt: "Google" },
    { src: "/images/netflix-logo.png", alt: "Netflix" },
];

const CompanyLogos: React.FC = () => {
    return (
        <section className="bg-blue-800 py-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {companyLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-12 object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyLogos;
