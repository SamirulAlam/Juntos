import React, { useState } from 'react'
import "./Help.css"
import { Button,Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
    const top = 50;
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

function Help() {

    const classes=useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [openModal,setOpenModal]=useState(false);
  const [openPayment,setOpenPayment]=useState(false);
    return (
        <div className="help">
            <Modal
          open={openModal}
          onClose={()=>setOpenModal(false)}
          
      >
      <div style={modalStyle} className={classes.paper}>
      <form className="help__modal">
          <center>
              <h1>Juntos</h1>
          </center>
        <Input
          placeholder="Name"
          type="text"
        />
        <Input
          placeholder="Email"
          type="email"
        />
        <Input
            placeholder="Country"
        />
        <Input
            placeholder="City"
        />
        <Input
            placeholder="Street"
        />
        <Input
            placeholder="House No"
        />
        <Button>Submit</Button>

      </form>
      </div>
      </Modal>
            <Modal
          open={openPayment}
          onClose={()=>setOpenPayment(false)}
          
      >
      <div style={modalStyle} className={classes.paper}>
            <div className="help__payment">
            <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c530.png" alt=""/>
            <img src=" https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-512.png" alt=""/>
            </div>
      </div>
      </Modal>
      
            <div className="help__cards">
                <div className="help__card">
                    <div className="help__image">
                        <img src="https://media.istockphoto.com/photos/poor-indian-children-asking-for-food-india-picture-id524903696?k=6&m=524903696&s=612x612&w=0&h=jXnK45SU2CACLaNSoSJK_vjn0ZPn3dP3bh9NNlTgyCo=" alt=""/>
                    </div>
                    <div className="help__content">
                        <h2>Food</h2>
                        <p>If you want to share your foods with them click the button below and give your address we will pick them from you</p>
                        <div className="help__button">
                            <Button onClick={()=>setOpenModal(true)}>Proceed</Button>
                        </div>
                    </div>
                </div>
                <div className="help__card">
                    <div className="help__image">
                        <img src="https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image_flex/uploads/+0Regular_Roundup/NaturalDisasterRelief/SaveTheChildren-01.jpg" alt=""/>
                    </div>
                    <div className="help__content">
                        <h2>Clothes</h2>
                        <p>If you want to share your cloths with them click the button below and give your address we will pick them from you</p>
                        <div className="help__button">
                        <Button onClick={()=>setOpenModal(true)}>Proceed</Button>
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
                            
                            <Button onClick={()=>setOpenPayment(true)}>Proceed</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help
