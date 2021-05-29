import React, { useState, useEffect } from "react";
import ServerService from "../../../ServerService";
import DashboardCard from "../../UI Elements/CampingCard-Dashboard/DashboardCard";
import "./Home.css";

const Home = () => {
  const [campaigns, setCampaigns] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("id");
    ServerService.yourCampaigns(id).then((res) => {
      console.log(res);
      setCampaigns(res.data.data);
    });
  }, []);

  const deleteRequest = (id) => {
    ServerService.deleteRequest(id)
      .then((res) => {
        console.log(res);
        let arr;

        arr = [...campaigns];

        for (var i = 0; i < arr.length; i++) {
          if (arr[i]._id === id) {
            arr.splice(i, 1);
            i--;
          }
        }
        setCampaigns(arr);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  let campaignList;
  if (campaigns) {
    campaignList = campaigns.map((data, index) => {
      return (
        <DashboardCard
          raised={data.amountRaised}
          description={data.description}
          photo={data.photo}
          title={data.title}
          goal={data.goal}
          id={data._id}
          deleteHandler={() => deleteRequest(data._id)}
        />
      );
    });
  }

  return (
    <div className="HomeContainer">
      <p className="HC-h1">Your Campaigns</p>
      {campaignList}
    </div>
  );
};

export default Home;
