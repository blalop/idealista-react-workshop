import React from 'react';
import Ad from './Ad';

export default ({ ads = [], onFavorited = () => null }) => (
    <div>
        { ads.map(ad => <Ad {...ad} onFavorited={onFavorited} key={ad.id} />) }
    </div>
);