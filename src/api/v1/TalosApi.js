export default class TalosApi {

    static base_url = "http://127.0.0.1:3000";

    static header_options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    static async getPosts() {
        let postsListUrl = this.base_url + "/posts";
        return fetch(postsListUrl, {
            method: 'GET',
        })
    }

    static async createPost(title, description, tags) {
        try {

            let createPostUrl = this.base_url + "/posts";
            let createPostParams = { "title": title, "description": description, "tags": tags }
            return fetch(createPostUrl, {
                method: 'POST',
                headers: this.header_options,
                body: JSON.stringify(createPostParams)
            })

        } catch (error) {

        }

    }

    static async sendImage(postId, imageData) {
        try {
            let sendImagetUrl = this.base_url + "/posts/" + postId + "/picture";
            let data = new FormData();
            data.append('image', imageData);
            return fetch(sendImagetUrl, {
                method: 'PUT',
                body: data
            })

        } catch (error) {

        }

    }

    static async getSpecificPost(postId) {
        let postsListUrl = this.base_url + "/posts/" + postId;
        return fetch(postsListUrl, {
            method: 'GET',
        })
    }


}
