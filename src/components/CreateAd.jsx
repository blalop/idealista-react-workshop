import React, { useState } from 'react';

const CreateAd = ({ title = '', description = '', isFav = false } = {}) => {
    const [titleValue, setTitle] = useState(title);
    const onTitle = ev => setTitle(ev.target.value);

    const [descriptionValue, setDescription] = useState(description);
    const onDescription = ev => setDescription(ev.target.value);

    const [isFavorite, setIsFavorite] = useState(isFav);
    const onFavorite = () => setIsFavorite(!isFavorite);

    return (
        <article>
            <input placeholder="Title" value={titleValue} onChange={onTitle}></input>
            <input placeholder="Description" value={descriptionValue} onChange={onDescription}></input>
            <label>
                <input onChange={onFavorite} className='card-input' type="checkbox" checked={isFavorite} />
                <span className='card-checkbox'>
                    <span className='card-favorite'>Favorite?</span>
                </span>
            </label>
            <input type="file" />
            <button>Submit query</button>
        </article>
    );
};

export default CreateAd;