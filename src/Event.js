import React from 'react';
import "./Event.css"
import EventItem from './EventItem';

function Event() {

    return (
        <div className="event">
            <EventItem
                url="https://www.unicef.org/bangladesh/sites/unicef.org.bangladesh/files/styles/press_release_feature/public/UNICEF_Flood_Kurigram_15.jpg?itok=gfENVTgF"
                title="Flood in Bangladesh"
                description="The catastrophic floods has started July and has affected 57,300 square kilometres (22,100 sq mi) of land, (about 40% of the total area of the country) till now and was estimated as a once in 30-70 year event. The seriously affected regions were on the western side of the Brahmaputra, the area below the confluence of the Ganges and the Brahmaputra and considerable areas north of Khulna."
                float="left"
            />
            <EventItem
                url="https://www.pasadenastarnews.com/wp-content/uploads/2017/09/earthquake-photo-0012011.jpg?w=620"
                title="Earthquake in United States"
                description="Whittier Narrows earthquake occurred in the southern San Gabriel Valley and surrounding communities of southern California, United States, at 7:42 a.m. PDT on October 1. Many homes and businesses were affected, along with roadway disruptions, mainly in Los Angeles and Orange counties. Damage estimates ranged from $213–358 million, with 200 injuries and three directly-related deaths."
                float="right"
            />
        </div>
    )
}

export default Event
