import React from "react";
import './Voting.css';

import { Card, CardImg } from 'reactstrap';

import heart from '../assets/h1.png';
import heart2 from '../assets/h2.png';

function Voting (props) {

    return(
        <div className='container'>

            <div className="row">
                <h1 id='title1'> Womit holst du dir den Kick? </h1>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-5 m-1">
                    <Card className='card'>
                        <CardImg src={heart} className='cardimg' />
                    </Card>
                </div>
                <div className="col-xs-12 col-md-5 m-1">
                    <Card className='card'>
                        <CardImg  src={heart2} className='cardimg'/>
                    </Card>
                </div>
            </div>
        </div>

    )
}
export default Voting;