import React from 'react';
import "../../resources/css/content.css";
import "../../resources/css/article.css";

const Content = ({ photos, open }) => {
    return (
        <div className='container'>
            <div className='center'>
                {photos.map(photo =>
                    <article key={photo.id} onClick={() => open(photo.links.html)}>
                        <img src={photo.urls.regular} alt={photo.alt_description}/>
                        <p>{[photo.description, photo.alt_description].join("-")}</p>
                    </article>)}
            </div>
        </div>
    );
}

export default Content;