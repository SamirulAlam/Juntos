import { Button } from '@material-ui/core';
import React from 'react';
import "./EventItem.css"

function EventItem({url,title,description}) {
    return (
        <div className="eventItem" style={{float: 'left'}}>
            <div className="eventItem__left">
                <img src={url} alt=""/>
            </div>
            <div className="eventItem__right">
                <div className="eventItem__title">
                    <h1>{title}</h1>
                </div>
                <div className="eventItem__description">
                    <p>{description}</p>
                </div>
                <div className="eventItem__button">
                    <Button>Enter</Button>
                </div>
            </div>
        </div>
    )
}

export default EventItem
