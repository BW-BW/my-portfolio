import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const HistoryTimeline: React.FC = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#2196f3', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #2196f3' }}
                date="2023"
                iconStyle={{ background: '#2196f3', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Started a New Project</h3>
                <p>Started working on an innovative solution for e-commerce.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2024"
                iconStyle={{ background: '#f44336', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Achieved a Milestone</h3>
                <p>Released the first version of the application.</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};
