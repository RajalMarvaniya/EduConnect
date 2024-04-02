import React from 'react';
import '../CSS/index.css'; 
import Navbar from './navbar'
import Bg from '../../images/index.gif'
import Blue from '../../images/homepage.jpg'
import { useNavigate } from 'react-router-dom';

const Index = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect to the home page
    navigate('/knowmore');
  };

  return ( 
    <>
      <Navbar/>
      <div className="page-content">
        <h6 className='p1'>
          Connect with EduConnect to Unlock a world 
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of endless learning opportunities 
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and broaden your horizons <br></br>
          <button className='btn_index' onClick={handleButtonClick}><b>Know More</b></button>
        </h6>
        {/* <button className='btn_index' onClick={handleButtonClick}><b>Know More</b></button> */}
      </div>
      <div className="image-container">
        <img src={Bg} alt='' />
      </div>
      <div className='blue'>
        <img src={Blue} alt='' />
      </div>
    </>
  );
}

export default Index;
