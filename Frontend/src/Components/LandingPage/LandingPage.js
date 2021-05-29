import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonFill, ButtonOutline } from "../UI Elements/Buttons/Buttons";
import Navbar from "../UI Elements/Navbar/Navbar";
import "./LandingPage.css";
import food from "../../assets/icons/food.svg";
import donor from "../../assets/icons/donor.png";
import water from "../../assets/icons/water.svg";
import medical from "../../assets/icons/medical.svg";
import education from "../../assets/icons/education.svg";
import img2 from "../../assets/LandingPage/img2.png";
import CampaignCard from "../UI Elements/CampaignCard/CampaignCard";
import Carousel from "react-elastic-carousel";
import Loader from "../UI Elements/Loader/Loader";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Loader />
      <section className="section1">
        <Navbar />
        <div className="LP-heading">
          <p className="LP-h1">
            Your small contributon can make big changes in the world
          </p>
          <p className="LP-h2">
            By Sharing your extra good you can make someone’s life better.
          </p>
          <div className="LP-btn-container">
            <Link to="/">
              <ButtonFill>Donate</ButtonFill>
            </Link>
            <Link to="/">
              <ButtonOutline>Continue as NGO</ButtonOutline>
            </Link>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="s2-heading">
          <p>Connects Nonprofits, donors, &amp; Companies in Every Country</p>
          <img src={donor} alt="donor hands" />
        </div>
        <div className="category-container">
          <div className="s2-category">
            <img src={food} alt="food" />
            <div>
              <p>Healthy food</p>
              <p>
                We help local nonprofit access the funding, tool, training, and
                support they need to become more
              </p>
            </div>
          </div>
          <div className="s2-category">
            <img src={medical} alt="medical help" />
            <div>
              <p>Medical Help</p>
              <p>
                We help local nonprofit access the funding, tool, training, and
                support they need to become more
              </p>
            </div>
          </div>
        </div>

        <div className="category-container">
          <div className="s2-category">
            <img src={water} alt="water" />
            <div>
              <p>Clean Water</p>
              <p>
                We help local nonprofit access the funding, tool, training, and
                support they need to become more
              </p>
            </div>
          </div>
          <div className="s2-category">
            <img src={education} alt="education" />
            <div>
              <p>Education</p>
              <p>
                We help local nonprofit access the funding, tool, training, and
                support they need to become more
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <img src={img2} alt="img2" />
        <div>
          <p className="LP-h3">Help Small - Change Big</p>
          <p className="s3-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
            auctor pretium, amet proin nisi, egestas elit. Nisi, lorem commodo
            pretium pellentesque vitae. Vel pulvinar et, porta dictum nisi
            gravida tempor vestibulum. Sit velit arcu facilisis ullamcorper duis
            quis tincidunt platea.
          </p>
          <ButtonFill>CTA Button</ButtonFill>
        </div>
      </section>
      <section className="section4">
        <div>
          <p className="LP-h3">Our Vision</p>
          <p className="s3-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
            auctor pretium, amet proin nisi, egestas elit. Nisi, lorem commodo
            pretium pellentesque vitae. Vel pulvinar et, porta dictum nisi
            gravida tempor vestibulum. Sit velit arcu facilisis ullamcorper duis
            quis tincidunt platea.
          </p>
          <ButtonFill>CTA Button</ButtonFill>
        </div>
        <div className="s4-card1"></div>
        <div className="s4-card2"></div>
        <div className="s4-card3"></div>
      </section>
      <section className="section5">
        <p className="LP-h4">Active Campaigns</p>
        <Carousel
          itemsToShow={3.4}
          itemPadding={[20, 20, 20, 20]}
          pagination={false}
          outerSpacing={80}
        >
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </Carousel>
      </section>
      <section className="footer"></section>
    </div>
  );
};

export default LandingPage;
