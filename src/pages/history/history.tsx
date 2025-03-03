import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import assets from '../../assets/assets';
import './history.css';

export const HistoryTimeline: React.FC = () => {
    return (
        <section className="background">
            <VerticalTimeline>
                <VerticalTimelineElement
                    date="Nov 2020 - July 2021"
                    icon={<div className="timeline-icon">
                        <img src={assets.university} />
                    </div>}
                    textClassName="vertical-timeline-box"
                >
                    <h1>Started University</h1>
                    <p>First time dipping my toes in the tech world.</p>
                    <p>Learned python, and made a sport center management system.</p>
                    <p>Next up was SQL, where i make DB system for airlines.</p>
                    <p>Last lesson was C# where i learned the concept of OOP.</p>
                    <div className='vertical-timeline-box-image'>
                        <img className="text-icon" src={assets.python} />
                        <img className="text-icon" src={assets.cSharp} />
                        <img className="text-icon" src={assets.sql} />
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="Sept 2021 - June 2022"
                    icon={<div className="timeline-icon">
                        <img src={assets.university} />
                    </div>}
                    textClassName="vertical-timeline-box"
                >
                    <h1>Second Year of University</h1>
                    <p></p>
                    <p>Further learned OOP concept with using Java. Made a desktop app.</p>
                    <p>Went into mobile development. Built a mobile app using Kotlin.</p>
                    <p>Dived into data structure basic concepts using C++.</p>
                    <div className='vertical-timeline-box-image'>
                        <img className="text-icon" src={assets.java} />
                        <img className="text-icon" src={assets.cpp} />
                        <img className="text-icon" src={assets.kotlin} />
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="Aug 2022 - Nov 2022"
                    icon={<div className="timeline-icon">
                        <img src={assets.work} />
                    </div>}
                    textClassName="vertical-timeline-box"
                >
                    <h1>Internship at Juris Tech</h1>
                    <p>Used PHP Lens, a framework for fullstack by php, html, css, and js.</p>
                    <p>Deepen my knowledge of SQL by learning PL/SQL in database.</p>
                    <p>First time learning about GIT version control.</p>
                    <div className='vertical-timeline-box-image'>
                        <img className="text-icon" src={assets.php} />
                        <img className="text-icon" src={assets.oracle} />
                        <img className="text-icon" src={assets.plsql} />
                        <img className="text-icon" src={assets.git} />
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="Dec 2022 - Aug 2023"
                    icon={<div className="timeline-icon">
                        <img src={assets.university} />
                    </div>}
                    textClassName="vertical-timeline-box"
                >
                    <h1>Third Year of University</h1>
                    <p>Plunged into ASP C# with MVC concepts.</p>
                    <p>Initial exposure to AWS cloud services.</p>
                    <p>Picked up blockchain development concepts using Java.</p>
                    <p>Created food scanner mobile app using Flutter and Supabase.</p>
                    <div className='vertical-timeline-box-image'>
                        <img className="text-icon" src={assets.aspmvc} />
                        <img className="text-icon" src={assets.aws} />
                        <img className="text-icon" src={assets.blockchain} />
                        <img className="text-icon" src={assets.flutter} />
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="Dec 2023 - Now"
                    icon={<div className="timeline-icon">
                        <img src={assets.work} />
                    </div>}
                    textClassName="vertical-timeline-box"
                >
                    <h1>Backend Developer at Agmo Studio</h1>
                    <p>Lowcode OutSystems certified developer.</p>
                    <p>C# ASP.NET backend REST API developer.</p>
                    <p>Nest.js (typescript) backend REST API developer.</p>
                    <div className='vertical-timeline-box-image'>
                        <img className="text-icon" src={assets.asp} />
                        <img className="text-icon" src={assets.outsystems} />
                        <img className="text-icon" src={assets.nestjs} />
                        <img className="text-icon" src={assets.docker} />
                    </div>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </section>

    );
};
