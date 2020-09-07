import React, { Component } from 'react'
import './styles/VolunteerInfo.css'

export class VolunteerInfo extends Component {
    render() {
        return (
            <div id="get-involved">  
              <div id="join-text">
                <h1>Get Involved</h1>
                <br />
                <p>
                  There are so many ways to help, whether it be attending an event or starting a chapter in your area!
                </p>
                <hr />
              </div>
              <div id="volunteer">
                <div id="volunteer-text">
                  <h2>Volunteer with Us!</h2><br />
                  <p>
                    Join us at one of our events! You can help by packaging meals, donating 
                    common household items, or by giving the gift of education to the less fortunate.
                    Kind acts do not go unnoticed.
                  </p>
                  <button id="volunteer-btn" className="button">Learn More</button>
                </div>
                <div id="volunteer-img">
                  INSERT IMAGE
                </div>
              </div>
              <div id="chapter">
                <div id="chapter-text">
                  <h2>Find a Chapter</h2>
                  <br />
                  <p>
                    Interested in bringing the impact of SASPAF to a community near you? 
                    Check out the interactive map on the right! If your community is not listed,
                    start a chapter!
                  </p>
                  <button id="chapter-btn" className="button">Learn More</button>
                </div>
                <div id="map" />
              </div>
            </div>
          );
    }
}

export default VolunteerInfo
