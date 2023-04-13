import Thumbnail from "./thumbnail.mjs"

export default class PhotoGrid {
    constructor(data){
        this.data = data;
        this.thumbnails = [];
    }

    get thumbnailMarkup() {
        let thumbnailsHTML = "";
        this.thumbnails.forEach(thumbnail => thumbnailsHTML += `<div class="col-md-4 col-xs-6 mt-4 mb-4">${thumbnail.render()}</div>`);    

        return thumbnailsHTML;
    }

    componentWillRender() {
        if(this.thumbnails.lenght > 0) {
            return;
        }

        this.data.forEach(thumbnail => this.thumbnails.push(new Thumbnail(thumbnail)));
    }

    render () {
        this.componentWillRender();

        return `
        <div class="container">
                <div class="row">
                ${this.thumbnailMarkup}
                </div>
            </div>
        </div>
    `
    }
}