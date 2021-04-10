import React from 'react';
import "./Event.css"
import EventItem from './EventItem';

function Event() {
    return (
        <div className="event">
            <EventItem
                url="https://www.unicef.org/bangladesh/sites/unicef.org.bangladesh/files/styles/press_release_feature/public/UNICEF_Flood_Kurigram_15.jpg?itok=gfENVTgF"
                title="Flood in Bangladesh"
                description="asjlajslajslajslajslasl"
            />
        </div>
    )
}

export default Event
