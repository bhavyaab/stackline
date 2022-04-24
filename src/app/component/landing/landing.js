import React from "react";
import { DrawChart } from "../drawChart/drawChart";
import { InfoSection } from "../infoSection/infoSection";

import './landing.scss';
export const Landing = () => {
    return (
        <div className="landing">
            <div className="leftSection">
                <InfoSection></InfoSection>
            </div>
            <div className="dataSection">
                <DrawChart></DrawChart>
            </div>
        </div>
    )
}