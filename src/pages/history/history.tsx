import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const HistoryTimeline: React.FC = () => {
    return (
        <section className="home">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2196f3', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #2196f3' }}
                    date="Nov 2020 - July 2021"
                    iconStyle={{ background: '#2196f3', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Started University</h3>
                    <p>First time dipping my toes in the tech world.</p>
                    <p>Python, Sql, C#</p>
                    <p>First Hackathon - python</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 2021 - June 2022"
                    iconStyle={{ background: '#f44336', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Second Year of University</h3>
                    <p>Java, R, Kotlin, C++.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Aug 2022 - Nov 2022"
                    iconStyle={{ background: '#f44336', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Internship</h3>
                    <p>PHP Lens.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Dec 2022 - Aug 2023"
                    iconStyle={{ background: '#f44336', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Third Year of University</h3>
                    <p>ASP MVC, Blockchain, Flutter</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Dec 2023 - Now"
                    iconStyle={{ background: '#f44336', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Agmo Studio</h3>
                    <p>OutSystems, C# ASP.NET, Nest.js</p>
                </VerticalTimelineElement>


            </VerticalTimeline>
        </section>

    );
};
