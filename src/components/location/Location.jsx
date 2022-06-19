import React from "react";
import "./Location.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import AOS from "aos";
import "aos/dist/aos.css";

const Location = () => {
  AOS.init({
    duration: 2000,
  });
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
      >
        <Marker
          position={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
        />
        <Marker position={{ lat: -25.764397, lng: 28.212818 }} />
      </GoogleMap>
    ))
  );
  return (
    <section id="location" data-aos="zoom-in-up">
      <div className="location">
        <div className="location-header">
          {" "}
          <h3>Where to Find Us</h3>
        </div>
      </div>
      <div className="location-bg container-fluid">
        <div className="row">
          <div className="location-container col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="location-contacts">
              <h2>Nairobi</h2>
              <div className="call-one">
                <h4>
                  325 City Square <br /> Westland,NRB 95678
                </h4>
                <p>
                  Phone: 916.358.5622 <br />
                  Open hours <br />
                  Mon - Fri: 7:00 am - 8:00 pm <br />
                  Sat: 8:00 am - 3:00 pm <br />
                  Sun: Closed
                </p>
              </div>
              <div className="call-two">
                <a href="Button" className="click">
                  REQUEST A CALLBACK
                </a>
              </div>
              <div className="call-three">
                <a href="button" className="click-up">
                  Contact us
                </a>
              </div>
            </div>
            <div className="location-contacts">
              <h2>Cape Town</h2>
              <div className="call-one">
                <h4>
                  146 Freedom Square <br /> Mandela Drive,CPT 95678
                </h4>
                <p>
                  Phone: 916.358.5622 <br />
                  Open hours <br />
                  Mon - Fri: 7:00 am - 8:00 pm <br />
                  Sat: 8:00 am - 3:00 pm <br />
                  Sun: Closed
                </p>
              </div>
              <div className="call-two">
                <a href="Button" className="click">
                  REQUEST A CALLBACK
                </a>
              </div>
              <div className="call-three">
                <a href="button" className="click-up">
                  Contact us
                </a>
              </div>
            </div>
          </div>
          <div className="google-maps col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `750px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
