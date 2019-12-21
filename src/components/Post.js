import React from 'react'
import { Label, Button } from 'semantic-ui-react';
import TalosApi from "../api/v1/TalosApi";

const placeholderImg = require("../assets/images/imagePlaceholder.png")

export default function Post(props) {
    return (
        <div className="postContainer">

            <div className="imageContainer">
                <img className="postImage" 
                src= {props.post.photoUrl !== undefined ? TalosApi.base_url + "/" + props.post.photoUrl : placeholderImg}/>
            </div>

            <div style={{ height: "150px", padding: 10 }}>
                <h3>{props.post.title}</h3>
                {
                    props.post.description.length > 200 ?
                    props.post.description.substring(0, 200) + " ..." :
                    props.post.description
                } 
            </div>

            <div className = "postBottom">
                <div className = "postTagsContainer">
                    {props.post.tags.map((tag, id) => {
                        return <Label key={id}>{tag}</Label>
                    })}
                </div>

                <div style={{ flex: 1 }}> 
                    <Button
                        compact
                        style={{ marginLeft: 10 }}
                        onClick={() => { props.history.push("/View/" + props.post.id, { post: props.post }) }}>view</Button>
                </div>
            </div>
        </div>
    )
}