import React, { Component } from 'react';
import Classes from '../Backdrop/Backdrop.module.css';
import Aux from '../../../../containers/hoc/Auxx';

const backdrop = (props) => (
        <Aux>
            <div onClick={props.click} className={Classes.Backdrop}>

            </div>
        </Aux>
    
)

export default backdrop;