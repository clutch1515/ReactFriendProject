import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import fam from '../assets/fam.png'

class About extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Peter Larsen</h2>
                        <br></br>
                        <br></br>
                            <img
                                src={fam} 
                                alt="fam" 
                                style={{height: '250px'}}
                            />                            
                    </Cell>
                    <Cell col={6}>
                        <h2 fontFamily='anton' fontWeight='bold'>About Me</h2>
                        <hr />
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent>
                                            <p style={{width: '75%', margin: 'auto', paddingTop: '1em', fontFamily: 'oxygen'}}>Hello! My name is Peter and I live in Reno with my wife and dog. I've been involved with programming since elementry school where I learned HTML and saved it on my floppy disk. I took a different route in highschool and college where I turned my focus to science, engineering, and health.</p>
                                            <p style={{width: '75%', margin: 'auto', paddingTop: '1em', fontFamily: 'oxygen'}}>What I can offer you is a diverse background with loads of life experience. I am an outgoing gregorius person who is self motivated and always smiling. I look forward to meeting you, whoever you are.

                                            </p>
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </div>
                   </Cell>
                </Grid>
            </div>           
        );
    }
}

export default About;
