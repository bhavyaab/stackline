import React from "react";
import { DrawChart } from "../drawChart/drawChart";
import { InfoSection } from "../infoSection/infoSection";
import './landing.scss';
export const Landing = () => {
    return (
        <div className="landing">
            <InfoSection></InfoSection>
            {/* <DrawChart></DrawChart> */}
        </div>
    )
}