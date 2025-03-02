import React from "react";
import "./project.css";
import assets from '../../assets/assets';
import ProjectItem from "./projectItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
    {
        title: "EV Car Charger",
        description: [
            "Backend REST APIs for EV cars to charge their car, built with NestJS framework (nodeJs), integrated with microservices and third party service for payment",
            "The first project where i act as the PIC of the backend system. This app is a one stop solution for EV car owners for easily charge their car and serve as database to lookup all nearby charging stations."
        ],
        image: assets.powerbee,
        buttons: []
    },
    {
        title: "Stock Tracker",
        description: [
            "Created some mobile APIs and most of the admin portals functionality using .NET and PostgreSQL, hosted in aliyun cloud.",
            "Stock tracker for individuals to monitor their finance portfolio by calculating the percentage ratio and give out suggestion on which stocks to buy."
        ],
        image: assets.tomi,
        buttons: []
    },
    {
        title: "Giftcard Shop",
        description: [
            "A fullstack giftcard shop made with ReactJS frontend and serverless backend architecture by implementing AWS Lambda (node js).",
            "Users can buy vouchers for their desired games to be traded in-game values."
        ],
        image: assets.ggcard,
        buttons: [
            {
                label: "Documentation",
                link: "documents/Giftcard.pdf"
            },
            {
                label: "Source Code",
                link: "https://github.com/BW-BW/GiftCardShopDDAC"
            },
        ]
    },
    {
        title: "Food Scanner",
        description: [
            "Mobile app created with Flutter and Supabase backend which serves as the database.",
            "Barcode scanner which can be used to see the details of any food with registered barcode so user can monitor their diet."
        ],
        image: assets.barcodeScanner,
        buttons: [
            {
                label: "Documentation",
                link: "documents/BarcodeScanner.pdf"
            },
            {
                label: "Demo",
                link: "https://youtu.be/9jcR6WEKnLQ"
            },
            {
                label: "Source Code",
                link: "https://github.com/BW-BW/myscanner"
            },
        ]
    },
    {
        title: "BridgeXchange",
        description: [
            "NFT marketplace for beginners made with ReactJS and smart contract.",
            "Ease newcomers to the crypto world to buy NFT without the needs to convert their FIAT to Cryptoccurency."
        ],
        image: assets.bridgeXchange,
        buttons: [
            {
                label: "Demo",
                link: "https://www.youtube.com/watch?v=FYFfMshe0Ys"
            },
            {
                label: "Source Code",
                link: "https://github.com/BW-BW/BridgeXchange"
            }
        ]
    },
    {
        title: "Personal Portfolio",
        description: [
            "A fully frontend ReactJS personal website, this website you see now.",
            "This website created to list all of my history from starting in tech world up to this point where i'm working as a software developer."
        ],
        image: assets.portfolio,
        buttons: [
            {
                label: "Demo",
                link: "https://www.youtube.com/watch?v=FYFfMshe0Ys"
            },
            {
                label: "Source Code",
                link: "https://github.com/BW-BW/BridgeXchange"
            }
        ]
    },
    {
        title: "Real Estate Blockchain",
        description: [
            "A blockchain technology used in the creation of real estate transaction using Java as both front and backend.",
            "Using hash, salt, cryptography algorithm (symmetric and asymmetric) and also digital signature to secure the transaction and add them to the blockchain."
        ],
        image: assets.blockchainRealEstate,
        buttons: [
            {
                label: "Documentation",
                link: "documents/Blockchain.pdf"
            },
            {
                label: "Source Code",
                link: "https://github.com/BW-BW/StudentSummarizer"
            },
        ]
    },
    {
        title: "Student Summarizer",
        description: [
            "Desktop app made with Python both backend and frontend to help students learn.",
            "The app contains summarizing youtube videos, pdf researches, articles, and to download pdf books by only typing in the books name."
        ],
        image: assets.summarizer,
        buttons: [
            {
                label: "Source Code",
                link: "https://github.com/BW-BW/StudentSummarizer"
            },
        ]
    },
    {
        title: "Movie Recomendation",
        description: [
            "Movies recommendation created with ASP.NET C# MVC architecture.",
            "Simple movie recomendation systems which generated from user's input favorites genres."
        ],
        image: assets.movieRecs,
        buttons: [
            {
                label: "Source Code",
                link: "https://github.com/BW-BW/MovieRecs"
            },
        ]
    },
];

const Project: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="background">
            <div>
                {projects.map((project, index) => (
                    <div key={index} data-aos="flip-down">
                        <ProjectItem
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            buttons={project.buttons}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
