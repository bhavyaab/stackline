import React from "react";
import './header.scss';
import {ReactComponent as StacklinLogo} from './stackline_logo.svg';

export const Header = () => {
    return (
        <div className="header">
            <span>
                <StacklinLogo title="stackline logo" 
                              width='5vw' 
                              marginTop='1.25vw'
                              marginLeft='2vw' />
            </span>
        </div>
    )
}