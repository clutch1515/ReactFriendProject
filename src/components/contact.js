import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Button } from 'react-mdl';
import avatar from '../assets/avatar.png';
import 'font-awesome/css/font-awesome.min.css';



class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                        <h2>Peter Larsen</h2>
                        <img
                            src={avatar} 
                            alt="Avatar" 
                            style={{height: '250px'}}
                        />
                       
                   </Cell>
                   <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '25px', fontFamily: 'anton'}}>
                                            <i className="fa fa-phone-square" aria-hidden="true"></i>
                                                (775) 762-5179
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'anton'}}>
                                            <a href="mailto:peterjlarsen15@gmail.com?subject=I%20saw%20your%20profile!" class="icon">
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            </a>
                                                PeterJLarse15@gmail.com
                                        </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'anton'}}>
                                        <ListItem>
                                            <Button variant="light" href="https://www.linkedin.com/in/peter-larsen-737a53198">
                                                <i className="fa fa-linkedin fa-5x" />
                                            </Button>

                                            <Button variant="light" href="https://www.github.com/" >
                                                <i className="fa fa-github fa-5x" />
                                            </Button>

                                            <Button variant="light" href='https://wordpress.com/view/larsensteadfast.wordpress.com'>
                                                <i className="fa fa-wordpress fa-5x" />
                                            </Button>

                                        </ListItem>
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

export default Contact;
