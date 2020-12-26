import React from "react";
import ReactDOM from 'react-dom';
import './AboutUs.css'

function AboutUs() {
  return (
    <div>
      <div className='blurRec'></div>
      <img src='/Images/aboutUs.jpg' className="skyline"></img>
      <h1 className='aboutUs'>About Us</h1>

      <div className="column">
        <h3 className='header'><strong>What is Stocks Squared?</strong></h3>
        <p className="ptext">
        Stocks Squared is a community driven social media platform designed for
        users interested in the stock market. Profiles connect with one another
        to communicate ideas, share financial tips, and become educated in the
        stock market world. Profiles can also join communities and trading
        groups to further connect with others.
        </p>
      </div>

      <div className="column">
        <h3 className='header'><strong>Who is Stocks Squared for?</strong></h3>
        <p className="ptext">
          Stocks Squared is dedicated for both experienced and inexperienced
          users of all ages. We aim to help high school and college students
          understand finance and set up a long-term strategy in the markets.
          We help to minimize the risk you take to get started with a small
          account. We also aim to allow experienced users to
          share tips and information to the inexpereinced users.
        </p>
      </div>

      <div className="column">
        <h3 className='header'><strong>How is Stocks Squared used?</strong></h3>
        <p className="ptext">
        Do you have a passion for teaching people about finance? Our
        platform allows you to create a highly-configurable group. Share
        your knowledge through posts, videos, infographics, and more. Do you
        want to learn more about the world of stocks? Our platform allows
        users to communicate on various topics dedicated to stock, find others
        who share similar views, and deepen one's understanding in the world
        of stocks.
        </p>
      </div>


      <div className="teamImage">
        <h3 className="ourNames">Matthew Blackert</h3>
        <img src="/Images/TeamImages/temp.png" className="perImage"></img>
      </div>
      <div className="teamImage">
        <h3 className="ourNames">Max Beedy</h3>
        <img src="/Images/TeamImages/temp.png" className="perImage"></img>
      </div>
      <div className="teamImage">
        <h3 className="ourNames">Ray Zhang</h3>
        <img src="/Images/TeamImages/temp.png" className="perImage"></img>
      </div>

      <div className="column">
        <h3 className='header'><strong>How did it start?</strong></h3>
          <p className='ptext'>
            Stocks Squared started as a project done for Miami's Software
            Engineering introduction course. Matthew worked with a group of
            talented individuals to develop a minimum viable product. We used
            the first project's knowledge to construct a better and
            more complete version of the application.
          </p>
      </div>

      <div className="column">
        <h3 className='header'><strong>Who are the developers?</strong></h3>
        <p className='ptext'>
          Our team consists of three
          <a href="https://www.miamioh.edu/"> Miami University </a>
          college students. Matthew and Ray actively trade in the stock market and feel that
          this application can provide financial education structure. Max is a
          passionate learner and designer looking to make education more
          accessible.
        </p>
      </div>

      <div className="column">
        <h3 className='header'><strong>What's next for Stocks Squared?</strong></h3>
          <p className='ptext'>
            We will continue to update and improve the website to give a better
            experience for all of our users. You can
            <a href='#'> request a feature </a>
            to us for future improvements. We take these requests seriously, and we
            plan to evaluate our website based on those requests. Be prepared for
            future changes!
          </p>
      </div>


    </div>
  );
}

export default AboutUs;
