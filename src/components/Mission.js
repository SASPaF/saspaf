import React, { Component } from 'react'
import './styles/Mission.css'

export class Mission extends Component {
    render() {
        return (
            <div id="mission">
                <div id="mission-content">
                    <div id="mission-text">
                        <p>
                        Support and Assistance for Single Parent families is a student-led
                        nonprofit organization dedicated to supporting single-parent families
                        with financial assistance, emotional wellness services, employment
                        opportunities, educational support, and legislative reforms.
                        </p>
                    </div>
                    <div id="mission-icons">
                        <div className="mission-icon">
                            <i className="fa fa-heart" aria-hidden="true" />
                            <br />
                            <h2>Goal 1</h2>
                        </div>
                        <div className="mission-icon">
                            <i className="fa fa-heart" aria-hidden="true" />
                            <h2>Goal 2</h2>
                        </div>
                        <div className="mission-icon">
                            <i className="fa fa-heart" aria-hidden="true" />
                            <h2>Goal 3</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mission
