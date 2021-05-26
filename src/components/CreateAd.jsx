import React, { useState } from 'react';

export default ({ onCreatedAd }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [isFav, setIsFav] = useState(false);

    const onFormSubmit = (ev) => {
        ev.preventDefault();

        onCreatedAd({
            title,
            desc,
            isFav
        });
    };

    return (
       <section className="create-new-ad">
            <form onSubmit={onFormSubmit}>
                <input
                    placeholder="title"
                    type="text"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} />
                <input
                    placeholder="description"
                    type="text"
                    value={desc}
                    onChange={ev => setDesc(ev.target.value)} />
                <label className='card-label'>
                    <input
                        className='card-input'
                        id="favorite"
                        type="checkbox"
                        checked={isFav}
                        onChange={() => setIsFav(!isFav)} />
                        <span className='card-checkbox' htmlFor="favorite">
                            <span className='card-favorite'>Favorite</span>
                        </span>
                </label>

                <input type="submit" />
            </form>
        </section> 
    );
};
