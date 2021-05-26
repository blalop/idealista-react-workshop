import React from 'react';
import Ad from './Ad';

export default ({ ads = [], onFavorited = () => null, onDiscarded = () => null }) => (
    <div>
        { ads.map(ad => <Ad {...ad} onFavorited={onFavorited} onDiscarded={onDiscarded} key={ad.id} />) }
    </div>
);