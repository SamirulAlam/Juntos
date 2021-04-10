import { Button } from '@material-ui/core';
import React from 'react';
import "./EventItem.css";
import {Link} from "react-router-dom"

const EventItem=({url,title,description,float},ref)=> {
    return (
        <div className="eventItem" style={{float: float}}>
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
                    <Link to="/help">
                    <Button>Help Them</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EventItem
