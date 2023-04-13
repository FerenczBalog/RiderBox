import Router from "./router.mjs";

export default class Thumbnail {
 /*   contructor(id, imgSrc, title, descpription) {
        this.id = id;
        this.title = title;
        this.imgSrc = imgSrc;
        this.description = description;
    }
    */

    constructor(props) {
        this.props = props;

        document.addEventListener('click', (e) => (e.target && e.target.classList.contains("link-button")) && this.onLinkClicked(e));
    }

        onLinkClicked(e) {
            e.preventDefault()
            e.stopImmediatePropagation();

            const {title, link} = e.target.dataset;
            Router.instance.pushHistory({title, link});
        }

    render() {
        return `        
            <div class="thumbnail">
                <img src="${this.props.srcThumbnail}" class="img-fluid">
                <div class="caption">
                    <h3>${this.props.title}</h3>
                    <p>${this.props.ShortDesc}</p>
                    <button data-title="${this.props.title}" data-link="/single-photo?id=${this.props.id}" class="btn btn-primary link-button" role="button">See more</button>
                </div>
            </div>   
        `;
    }
}