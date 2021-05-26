import React from 'react';
import Ad from './components/Ad';
import CreateAd from './components/CreateAd';

export default () => (
    <div>
        <CreateAd />
        <Ad title="test title" description="test description" isFav={true} />
    </div>
);
