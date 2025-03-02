import React from "react";
import "./projectItem.css";

interface ProjectButton {
    label: string;
    link?: string;
}

interface ProjectItemProps {
    title: string;
    description: string[];
    image: string;
    buttons: ProjectButton[];  // Accept an array of buttons
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, image, buttons }) => {
    const handleButtonClick = (button: ProjectButton) => {
        if (button.link) {
            // If the link is a PDF or document, force download
            if (button.link.endsWith(".pdf") || button.link.endsWith(".docx")) {
                const a = document.createElement("a");
                a.href = button.link;
                a.download = button.link.split("/").pop() || "download";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                // Open normal links in a new tab
                window.open(button.link, "_blank");
            }
        }
    };

    return (
        <div className="container">
            <div className="text-section">
                <div>
                    <h1>{title}</h1>
                    {description.map((text) => (
                        <p>{text}</p>
                    ))}
                    <div className="button-container">
                        {buttons.map((button, index) => (
                            <button
                                key={index}
                                className="custom-button"
                                onClick={() => handleButtonClick(button)}
                            >
                                {button.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="image-section">
                <img src={image} alt={title} />
            </div>
        </div>
    );
};

export default ProjectItem;
