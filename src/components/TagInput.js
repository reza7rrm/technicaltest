import React, { Component } from 'react'
import { Input, Grid, Button, Label } from 'semantic-ui-react'


export default class TagInput extends Component {
    constructor(props) {
        super(props)
        this.removeTag = this.removeTag.bind(this);
        this.state = {
            inputVal: ""
        }
    }

    handleInputChange = (e, { value }) => {
        console.log(value);
        this.setState({ "inputVal": value })
    }

    handleAddClick = () => {
        let newTags =  [...this.props.tags, this.state.inputVal];
        if( this.state.inputVal.trim() !=="" ){
            this.props.updateTags(newTags);
            this.setState({inputVal:""});
        }
    }

    removeTag=(theTag)=> {
        let newTags = this.props.tags.filter(tag => {return tag != theTag});
        this.props.updateTags(newTags)
    }

    render() {
        return (
            <Grid style={{marginTop:10,marginBottom:10}}>
                <Grid.Column>
                    <Grid.Row>
                        <Input style={{width:"20vw"}} value={this.state.inputVal} onChange={this.handleInputChange} ></Input>
                        <Button style={{marginLeft:10}} basic onClick={this.handleAddClick}>Add tag</Button>
                    </Grid.Row>
                    <Grid.Row >
                        {
                            this.props.tags.map((tag, id) => {
                                return (
                                    <Label style={{marginTop:"5px"}} key={id}>
                                        {tag}
                                        <span className="tagDelete" onClick={()=>{this.removeTag(tag)}}> x</span>
                                    </Label>
                                )
                            })
                        }
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        )
    }
}
