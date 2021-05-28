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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CampaignCard from "../UI Elements/CampaignCard/CampaignCard";

const LandingPage = () => {
  return (
    <div className="LandingPage">
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
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass="c-item"
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </Carousel>
      </section>
    </div>
  );
};

export default LandingPage;