import React, { useState, useEffect } from "react";
import CampaignCard from "../UI Elements/CampaignCard-Search/CampaingCardSearch";
import "./SearchCampaigns.css";

import { Search } from "@material-ui/icons";
import NavbarSolid from "../UI Elements/Navbar/NavbarSolid";
import ServerService from "../../ServerService";
import Loader from "../UI Elements/Loader/Loader";

const SearchCampaigns = () => {
  const [campaigns, setCampaigns] = useState("");
  const [city, setCity] = useState("");
  const [tag, setTag] = useState("");
  const [results, setResults] = useState(false);

  useEffect(() => {
    ServerService.campaigns()
      .then((res) => {
        console.log(res);
        setCampaigns(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeHandler = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { city: city };
    console.log(data);
    ServerService.searchCampaign(data.city)
      .then((res) => {
        console.log(res);
        setCampaigns(res.data.data);
        setResults(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let numberOfCampaigns;
  if (results)
    numberOfCampaigns = (
      <p className="search-results">
        {campaigns.length} Hospital(s) found with this name in given location
      </p>
    );
  else numberOfCampaigns = <p></p>;

  let CampaignList;
  if (campaigns)
    CampaignList = campaigns.map((data, index) => {
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

  return (
    <div className="UserHomePage">
      <Loader />
      <NavbarSolid navlink="/login" linkName="Continue as Hospital" />
      <p className="UHP-h1">Find Campaigns</p>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          name="city"
          placeholder="Enter your city to search ongoing campaigns in your city"
          onChange={changeHandler}
        />
        <button type="submit" className="submit-button">
          <Search style={{ color: "#364863", fontSize: "2rem" }} />
        </button>
      </form>
      {numberOfCampaigns}

      <div className="card-list">{CampaignList}</div>
    </div>
  );
};

export default SearchCampaigns;
