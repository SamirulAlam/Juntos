import React from 'react'
import "./Help.css"
import {Link} from "react-router-dom"
import { Button } from '@material-ui/core'

function Help() {
    return (
        <div className="help">
            <div className="help__cards">
                <div className="help__card">
                    <div className="help__image">
                        <img src="https://media.istockphoto.com/photos/poor-indian-children-asking-for-food-india-picture-id524903696?k=6&m=524903696&s=612x612&w=0&h=jXnK45SU2CACLaNSoSJK_vjn0ZPn3dP3bh9NNlTgyCo=" alt=""/>
                    </div>
                    <div className="help__content">
                        <h2>Food</h2>
                        <p>If you want to share your foods with them click the button below and give your address we will pick them from you</p>
                        <div className="help__button">
                            <Link to="/cloths">
                            <Button>Proceed</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="help__card">
                    <div className="help__image">
                        <img src="https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image_flex/uploads/+0Regular_Roundup/NaturalDisasterRelief/SaveTheChildren-01.jpg" alt=""/>
                    </div>
                    <div className="help__content">
                        <h2>Cloths</h2>
                        <p>If you want to share your cloths with them click the button below and give your address we will pick them from you</p>
                        <div className="help__button">
                            <Link to="/cloths">
                            <Button>Proceed</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="help__card">
                    <div className="help__image">
                        <img src="https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image/uploads/+0Regular_Roundup/NaturalDisasterRelief/GlobalLiving-02.jpg" alt=""/>
                    </div>
                    <div className="help__content">
                        <h2>Money</h2>
                        <p>If you want to donate some money click the button below and choose any payment procedure you like</p>
                        <div className="help__button">
                            <Link to="/cloths">
                            <Button>Proceed</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help
