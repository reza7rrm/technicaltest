import React, { Component } from 'react'
import { Grid, Button, Form } from 'semantic-ui-react';
import TagInput from '../components/TagInput';
import TalosApi from "../api/v1/TalosApi"

const placeholderImg = require("../assets/images/imagePlaceholder.png")
export default class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             description:"",
             tags:[],
             image:null,
             imageUrl:placeholderImg
        }
    }
    async _createPost(){
        const {title,description,tags} = this.state;
        let postResult = await TalosApi.createPost(title,description,tags);
        if(postResult.status == 200){
            let postResultJson = await postResult.json();
            if(this.state.image !== null){
                let sendImageResult = await TalosApi.sendImage(postResultJson.id,this.state.image)
                if (sendImageResult.status == 200){
                    alert("Successfully Done!");
                    this.props.history.push("/");
                    return;
                }else{
                    alert("something went wrong!")
                }
            }

            alert("Successfully Done!");
            this.props.history.push("/");

        }else{
            alert("something went wrong!")
        }

    }

    updateTags = (tags)=>{
        this.setState({tags:tags})
    }
    handleInput = (e,{value})=>{
        this.setState({[e.target.name]:value})
            console.log(e.target.name);
    }

    handleImageUpload =(e)=>{
        const file =e.target.files[0];
        this.setState({image:file})

        const reader  = new FileReader();

        reader.onloadend = () => {
            this.setState({
                imageUrl: reader.result
            })
        }
        if (file) {
            reader.readAsDataURL(file);
            this.setState({
                imageUrl :reader.result
            })
        } 
        else {
            this.setState({
                imageUrl: ""
            })
        }
    }
    render() {
        return (
            <Grid stackable>
                <Grid.Column width={10}>
                    <Form>
                        <Form.Input onChange={this.handleInput} label='title' name="title" required/>
                        <Form.TextArea 
                            style={{height:"30vh"}}
                            onChange={this.handleInput}
                            label='Description' 
                            placeholder='Description..' 
                            name="description"
                            required
                         />
                        <TagInput updateTags={this.updateTags} tags={this.state.tags}></TagInput>
                        <Button onClick={()=>{this._createPost()}} type='submit'>Submit</Button>
                    </Form>

                </Grid.Column>

                <Grid.Column width={6} >
                     <span id="addPageImgTitle">Image:</span>
                     <Button style={{float:"right",margin:10}} basic compact as="label" htmlFor="file" type="button">
                         Select image
                     </Button>
                     <input type="file" id="file" hidden={true} onChange={this.handleImageUpload} />
                <Grid.Row style={{height:"50vh"}}>
                    <img id="addPageImage" src={this.state.imageUrl} />
                </Grid.Row>
                </Grid.Column>
            </Grid>
        )
    }
}
