import React, { Component } from 'react';
import TalosApi from '../api/v1/TalosApi';

import Post from '../components/Post';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        };
      }

    async componentWillMount(){
        TalosApi.getPosts().then(response =>{
            return response.json()}).then(responseJson=>{
                this.setState({posts:responseJson});
        })
    }
    render() {
        return (
            <div>
                <div className="mainContainer">
                    {
                        this.state.posts.map((post)=>{
                            return <Post history={this.props.history} post={post} />
                        })
                    }
                </div>
            </div>
        )
    }
}
