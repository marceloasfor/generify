import React from 'react';
import Button from 'react-bootstrap/Button'

const Home = () => {
    return (
      <>
      <div className="main-banner">
        <div className="main-text">
          <p style={{
            fontFamily:  "Sofia", 
            fontSize: "60pt", 
            color: "#ffffff",
            letterSpacing: "0px",
            fontWeight: "normal"
          }}>Generify</p>
          <p>Assine agora, ligue o play e esqueça o mundo</p>
          <a  href="#">
            <Button className="main-button main-button1" style={{fontWeight: "normal"}}>
              ASSINAR
            </Button>
          </a>

        </div>
      </div>
      </>
    );
  };

export default Home;