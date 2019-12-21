
import React, { Component } from 'react'
import { Grid, Label } from 'semantic-ui-react';
import TalosApi from "../api/v1/TalosApi"
const placeholderImg = require("../assets/images/imagePlaceholder.png")

class View extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             thePost:null
        }
    }
    
    componentDidMount(){
        TalosApi.getSpecificPost(this.props.match.params.id)
        .then(response=>response.json())
        .then(
            responseJson => this.setState({thePost:responseJson})
        )
    }
    render(){
        const {thePost} = this.state;
    return (
        thePost !== null &&
        <Grid style={{flex:1,justifyContent:"center"}}>
            <Grid.Row>
                <img style={{height:"30vh"}} 
                src={thePost.photoUrl !== undefined ? TalosApi.base_url + "/" + thePost.photoUrl : placeholderImg} />
                
            </Grid.Row>
                <p style={{fontWeight:"bold",fontSize:"30px"}}>{thePost.title}</p>
            <Grid.Row>
                <p style={{padding:20}}>{thePost.description}</p>
            </Grid.Row>
            <Grid.Row>
                {thePost.tags.map((tag, id) => {
                    return <Label key={id}>{tag}</Label>
                })}
            </Grid.Row>
        </Grid>
    )
}
}

export default View

