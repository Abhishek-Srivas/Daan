import React, { useEffect, useState } from "react";
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
import ServerService from "../../ServerService";
import { Instagram, LinkedIn, MailOutline } from "@material-ui/icons";

const LandingPage = () => {
  const [campaigns, setCampaigns] = useState("");

  useEffect(() => {
    ServerService.campaigns().then((res) => {
      console.log(res);
      setCampaigns(res.data.data);
    });
  }, []);

  let campaignList;
  if (campaigns) {
    campaignList = campaigns.map((data, index) => {
      return (
        <CampaignCard
          raised={data.amountRaised}
          description={data.description}
          photo={data.photo}
          title={data.title}
          goal={data.goal}
          id={data._id}
        />
      );
    });
  }

  return (
    <div className="LandingPage">
      <Loader />
      <section className="section1">
        <Navbar />
        <div className="LP-heading">
          <p className="LP-h1">
            Your small contributon can make big changes in these Hard Times.
          </p>
          <p className="LP-h2">
            By Sharing your extra goods you can make someone’s life better.
          </p>
          {/* <div className="LP-btn-container">
            <Link to="/">
              <ButtonFill>Donate</ButtonFill>
            </Link>
            <Link to="/">
              <ButtonOutline>Continue as NGO</ButtonOutline>
            </Link>
          </div> */}
        </div>
      </section>
      <section className="section2">
        <div className="s2-heading">
          <p>Connects NGO, Self Help Group, &amp; Volunteers in the Country</p>
          <img src={donor} alt="donor hands" />
        </div>
        <div className="category-container">
          <div className="s2-category">
            <img src={food} alt="food" />
            <div>
              <p>Healthy food</p>
              <p>
                Instead of wasting food donate it to those who are starving.
              </p>
            </div>
          </div>
          <div className="s2-category">
            <img src={medical} alt="medical help" />
            <div>
              <p>Medical Help</p>
              <p>
                If you are healthy, donate blood for others.It is very much
                needed right now.
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
                Everyone need fresh water to stay healthy. Donate some fresh
                water to those who can't access it.
              </p>
            </div>
          </div>
          <div className="s2-category">
            <img src={education} alt="education" />
            <div>
              <p>Education</p>
              <p>
                Education is being compramised and we are not paying much
                attention to it. So Volunteers are must needed for the same.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <img src={img2} alt="img2" />
        <div id="#about">
          <p className="LP-h3">Do Daan - Become Daani</p>
          <p className="s3-content">
            Daan means to donate something to someone without expecting
            something in return and the one who do daan is called Daani. In our
            culture a Daani had been called the biggest hero of all. So why
            don't you too become a daani. Because a small contribution can
            become a big change.
          </p>
          <Link to="/searchcampaign">
            <ButtonFill>Search Campaigns</ButtonFill>
          </Link>
        </div>
      </section>
      <section className="section4">
        <div>
          <p className="LP-h3">Our Vision</p>
          <p className="s3-content">
            We aim to provide a platform that can connect NGOs, Self Help Groups
            with the normal people who want to help other by donating
            food,freshwater, health realted things, money etc. and those who
            want to volunteer their work adn service for the good of others.
          </p>
          <ButtonFill>CTA Button</ButtonFill>
        </div>
        <div className="s4-card1">
          <img
            width="100%"
            height="100%"
            src="https://img.etimg.com/thumb/msid-63293846,width-1200,height-900,imgsize-49958,overlay-etwealth/photo.jpg"
            alt=""
          />
        </div>
        <div className="s4-card2">
          <img
            width="100%"
            height="100%"
            src="https://www.moneycrashers.com/wp-content/uploads/2014/07/volunteer-group-raising-hands-sky-cloud-1068x713.jpg"
            alt=""
          />
        </div>
        <div className="s4-card3">
          <img
            width="100%"
            height="100%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglDfbKYEc2Pg2y1oVziNRF_xMFVVjw9QsQg&usqp=CAU"
            alt=""
          />
        </div>
      </section>
      <section className="section5">
        <p className="LP-h4">Active Campaigns</p>
        <Carousel
          itemsToShow={3.4}
          itemPadding={[20, 20, 20, 20]}
          pagination={false}
          outerSpacing={80}
        >
          {campaignList}
        </Carousel>
      </section>
      {/* Footer Section */}
      <div className="Footer" id="#contact">
        <div className="Footer-Top">
          <div>
            <p className="Footer-h1">About Us</p>
            <p className="Footer-h2">
              We aim to provide a platform that can connect NGOs, Self Help
              Groups with the normal people who want to help other by donating
              food,freshwater, health realted things, money etc. and those who
              want to volunteer their work adn service for the good of others.
            </p>
          </div>
          <div>
            <p className="Footer-h1"> Contact Us </p>
            <div className="social-icons">
              <MailOutline />
              <Instagram />
              <LinkedIn />
            </div>
          </div>
        </div>
        <hr />
        <div className="Footer-Bottom">2021 &copy; Daan</div>
      </div>
    </div>
  );
};

export default LandingPage;
