import React, { Component } from 'react'

export class Impact extends Component {
    render() {
        return (
            <div id="impact">
                <div id="impact-content">
                    <div id="impact-text">
                        <h1>Community Impact</h1>
                        <br />
                        <p>
                        !CHANGE THIS Support and Assistance for Single Parent families is a
                        student-led nonprofit organization dedicated to supporting
                        single-parent families with financial assistance, emotional wellness
                        services, employment opportunities, educational support, and
                        legislative reforms.
                        </p>
                        <br />
                    </div>
                    <div id="stats">
                        <div id="stats-container">
                            <div className="stat">
                                <i className="fa fa-heart" aria-hidden="true" />
                                <br />
                                <h1>400</h1>
                                <p>meals provided</p>
                            </div>
                            <div className="stat">
                                <i className="fa fa-heart" aria-hidden="true" />
                                <br />
                                <h1>$8000</h1>
                                <p>fundraised</p>
                            </div>
                            <div className="stat">
                                <i className="fa fa-heart" aria-hidden="true" />
                                <br />
                                <h1>7</h1>
                                <p>communities helped</p>
                            </div>
                            <div className="stat">
                                <i className="fa fa-heart" aria-hidden="true" />
                                <br />
                                <h1>2500</h1>
                                <p>families helped</p>
                            </div>
                            <div className="stat">
                                <i className="fa fa-heart" aria-hidden="true" />
                                <br />
                                <h1>450+</h1>
                                <p>service hours committed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Impact
