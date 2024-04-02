import React, { useRef } from 'react'
import '../CSS/knowmore.css'


const Knowmore = () => {


  return (
    <div>
      <h1 style={{marginTop:'50px',marginLeft:'600px'}}>About our Application</h1>


      <div className="about-us-container">

        <ul>
          <li><strong>User Authentication&nbsp;&nbsp;:&nbsp;&nbsp;</strong> Users can register and log in as either students or tutors. And then Sign In with input credential or google.</li>
          <li><strong>Find Tutors&nbsp;&nbsp;:&nbsp;&nbsp;</strong> Students can search for tutors based on subjects, city, state and gender. For this purpose we use apache solr finding technique for data store.</li>
          <li><strong>Book Sessions&nbsp;&nbsp;:&nbsp;&nbsp;</strong> Once a suitable tutor is found, students can book tutoring sessions directly through the application.</li>
          <li><strong>Session Management&nbsp;&nbsp;:&nbsp;&nbsp;</strong> Tutors can manage their tutoring sessions, including scheduling, rescheduling, and canceling sessions.</li>
          <li><strong>Profile Management&nbsp;&nbsp;:&nbsp;&nbsp;</strong> Student and Tutor both create his/her profile with details and also update informations.When Student search perticular tutor and find then he/she can view tutor's whole profile.</li>
          <li><strong>New Session&nbsp;&nbsp;:&nbsp;&nbsp;</strong> Tutor can add, update his/her session also view his/her activity on dashboard.</li>
          <li><strong>Payment Integration&nbsp;&nbsp;:&nbsp;&nbsp;</strong> The application integrates with payment gateways to facilitate secure payments for tutoring sessions.</li>
          <li><strong>Contact Us&nbsp;&nbsp;:&nbsp;&nbsp;</strong> Perticular user can contact owner of application by sending mail.</li>

          <li><strong>Responsive Design&nbsp;&nbsp;:&nbsp;&nbsp;</strong> The application is built with a responsive design, ensuring a seamless experience across devices, including desktops, tablets, and smartphones.</li>
        </ul>

      </div>

     
      
    </div>
  )
}

export default Knowmore