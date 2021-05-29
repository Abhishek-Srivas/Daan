import React from "react";
import Sidebar from "react-sidebar";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import {
  ExitToApp,
  Opacity,
  AddCircleOutline,
  HotelOutlined,
  HomeOutlined,
  Edit,
} from "@material-ui/icons";
import Logo from "../../../assets/logo.svg";

class SideBar extends React.Component {
  state = {
    sidebarDocked: true,
    sidebarOpen: true,
  };

  componentDidMount() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      this.setState({ sidebarDocked: false });
    } else this.setState({ sidebarDocked: true });
  }

  onSetSidebarOpen = () => {
    if (!this.state.sidebarDocked) {
      let open = !this.state.sidebarOpen;
      this.setState({ sidebarOpen: open });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={
            this.state.sidebarOpen ? "hamburgprops-active" : "hamburger"
          }
          onClick={() => this.onSetSidebarOpen()}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <Link to="/organization/home">
          <div className="sidebarLogo">
            <img src={Logo} alt="logo" />
            <span
              style={{
                margin: "auto 1rem",
                color: "#02030d",
              }}
            >
              Daan
            </span>
          </div>
        </Link>

        <Sidebar
          sidebar={
            <div className="sidebarContent">
              <div className="sidebarLinks">
                <Link to="/organization/home">
                  <div
                    className={
                      this.props.active === "home" ? "activelink" : "sidelink"
                    }
                    onClick={() => {
                      // this.setStprops active: "home" });
                      this.onSetSidebarOpen();
                    }}
                  >
                    <HomeOutlined className="sidebarIcon" />
                    <span> Home </span>
                  </div>
                </Link>

                <Link to="/organization/newcampaign">
                  <div
                    className={
                      this.props.active === "newcampaign"
                        ? "activelink"
                        : "sidelink"
                    }
                    onClick={() => {
                      // this.setStprops active: "make request" });
                      this.onSetSidebarOpen();
                    }}
                  >
                    <AddCircleOutline className="sidebarIcon" />
                    <span> Create Campaign </span>
                  </div>
                </Link>

                <Link to="/">
                  <div
                    className="sidelink"
                    onClick={() => {
                      localStorage.removeItem("token");
                    }}
                  >
                    <ExitToApp className="sidebarIcon" />
                    <span> Logout </span>
                  </div>
                </Link>
              </div>
            </div>
          }
          sidebarClassName="sidebar"
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          shadow={false}
        >
          {this.props.children}
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default SideBar;
