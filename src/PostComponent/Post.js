import "../Home/Homee.css"
export function Post(props) {
    //const {publishDate, imagePath, userName, description, userId} = props
    const {category, date, description, imageURL, name, place} = props
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const readablePublishDate = new Date(date).toLocaleString('en-us', options);

    return (
        <div
            key={readablePublishDate}
            class="bg-indigo-500"
            className={"product"}
        >
            { imageURL ? <img
                src={imageURL}
                alt={`Image of ${category}`}
                className={"image-product"}
            /> : null}
            <div> Category of meeting: {category}</div>
            <h3>{name} meeting on {readablePublishDate} at {place}:</h3>
            <p>{description}</p>
        </div>
    );
}