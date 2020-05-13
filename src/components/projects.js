import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';
import guessingScreenshot1 from '../assets/guessingScreenshot1.png';
import ReactNucamp from '../assets/ReactNucamp.png';
import friendScreenshot from '../assets/friendScreenshot.png';



class Projects extends Component {
    constructor(props){
        super(props)
            this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', backgroundImage: `url(${friendScreenshot})`  }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of a simple React app that uses an api to generate a random new friend.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/clutch1515/ReactFriendProject">Go to code</Button>
                            <Button colored href="hhttps://newfriend.netlify.app/">Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>                  
                    
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: `url(${ReactNucamp}) ` }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of a React app we build with a JSON server with multiple functionality
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/clutch1515/ReactNucamp">Go to code</Button>
                            <Button colored href="https://nucampreact.netlify.app">Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                                       
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: `url(${guessingScreenshot1}) center` }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of a Binary Guessing game build in JavaScript 
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/clutch1515/binaryGuess">Go to code</Button>
                            <Button colored href="binaryguess.netlify.app/">Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover' }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of React
                        </CardText>
                        <CardActions border>
                            <Button colored>Go to code</Button>
                            <Button colored>Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>                  
                    
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover' }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of a game build in simple HTML/CSS/JS
                        </CardText>
                        <CardActions border>
                            <Button colored>Go to code</Button>
                            <Button colored>Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                                       
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover' }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of React
                        </CardText>
                        <CardActions border>
                            <Button colored>Go to code</Button>
                            <Button colored>Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: 'url(https://moduscreate.com/wp-content/uploads/2015/09/Aligning-Children-using-Flexbox-in-React-Native.jpg) center / cover' }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of React Native
                        </CardText>
                        <CardActions border>
                            <Button colored>Go to code</Button>
                            <Button colored>Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>                  
                    
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: 'url(https://moduscreate.com/wp-content/uploads/2015/09/Aligning-Children-using-Flexbox-in-React-Native.jpg) center / cover' }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of React Native
                        </CardText>
                        <CardActions border>
                            <Button colored>Go to code</Button>
                            <Button colored>Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                                       
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: 'url(https://moduscreate.com/wp-content/uploads/2015/09/Aligning-Children-using-Flexbox-in-React-Native.jpg) center / cover' }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of React Native
                        </CardText>
                        <CardActions border>
                            <Button colored>Go to code</Button>
                            <Button colored>Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: 'url(https://cms-assets.tutsplus.com/uploads/users/1116/posts/24835/preview_image/mongodb-logo.png) center / cover' }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of a MongoDB
                        </CardText>
                        <CardActions border>
                            <Button colored>Go to code</Button>
                            <Button colored>Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>                  
                    
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: 'url(https://cms-assets.tutsplus.com/uploads/users/1116/posts/24835/preview_image/mongodb-logo.png) center / cover' }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of MongoDB
                        </CardText>
                        <CardActions border>
                            <Button colored>Go to code</Button>
                            <Button colored>Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                                       
                    <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                        <CardTitle className="card-title-1" style={{color: '#fff', height: '176px', background: 'url(https://cms-assets.tutsplus.com/uploads/users/1116/posts/24835/preview_image/mongodb-logo.png) center / cover' }} > JavaScript </CardTitle>
                        <CardText>
                            Here is an example of MongoDB
                        </CardText>
                        <CardActions border>
                            <Button colored>Go to code</Button>
                            <Button colored>Go to site</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Projects</Tab>
                    {/* <Tab>React</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Mongo DB</Tab> */}
                </Tabs>

               
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                
                
            </div>
        );
    }
}

export default Projects;
