import React, { useState } from 'react';

const Ad = ({ id = -1, title = '', description = '', onFavorited = () => null, onDiscarded = () => null, isFav = false } = {}) => {
    const onFavorite = () => onFavorited(id);
    const onDiscard = () => onDiscarded(id);

    return (
        <article className={`card-container ${isFav ? 'fav' : ''}`}>
            <figure className='card-figure'>
                <img src="" />
            </figure>

            <div className='card-box'>
                <h2 className='card-h2'>{title}</h2>
                <p className='card-text'>{description}</p>
                <div className='card-actions'>
                    <label className='card-label'>
                        <input onChange={onFavorite} className='card-input' type="checkbox" checked={isFav} />
                        <span className='card-checkbox'>
                            <span className='card-favorite'>Favorite?</span>
                        </span>
                    </label>
                    <button onClick={onDiscard}>Discard</button>
                </div>
            </div>
        </article>
    );
};

export default Ad;