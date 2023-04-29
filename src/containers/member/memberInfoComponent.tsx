import React from "react";
import "./member.scss";
import { bloodGroup } from '../../constants/config';
const MemberInfoComponent = () => {
    return (
        <div>
            <div className="credit-container">
            <div>NMS- Member </div>
                <div className="input-container">
                    <label>Name :</label>
                    <input type="text" className="input-txt" id="fname" placeholder="Name..." />
                </div>

                <div className="input-container">
                    <label>Residency place</label>
                    <input type="text" className="input-txt" placeholder="Native .." />
                </div>
                <div className="input-container">
                    <label>Contact</label>
                    <input type="text" className="input-txt" placeholder="Mobile number .." />
                </div>
                <div className="input-container">
                    <label>E-mail</label>
                    <input type="email" className="input-txt" placeholder="Email-Id .." />
                </div>

                <div className="input-container">
                    <label>Blood Group</label>
                    <select id="country" name="country">
                        {
                            bloodGroup.map((blood, index) => {
                                return (<option key={index} value={blood}>{blood}</option>)
                            })
                        }
                    </select>
                </div>
                <input type="submit" className="input-submit" value="Submit" />
            </div>
        </div>
    )
}

export default MemberInfoComponent;