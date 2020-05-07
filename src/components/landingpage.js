import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../assets/avatar.png';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={avatar} alt="Avatar" className="avatar-img"/>

                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>
                        <hr />
                            <p>
                                HTML/CSS | Bootstrap | React | React Native | NodeJS | MongoDB
                            </p>

                        </div>
                        

                        
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;
