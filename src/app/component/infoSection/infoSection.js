import React from "react";
import { useSelector } from "react-redux";
import './infoSection.scss';
import { ninjaImage,productInfo } from '../../../store/stacklineSlice';

export const InfoSection = () => {
    const {image, title, subTitle, tags} = useSelector(productInfo)
    return (
        <div className="infoSection">
            <img src={image} alt="ninja bullet product image" />
            <h2>{title}</h2>
        </div>
    )
}