import React from 'react';
import uswFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className = "img-grid">
            images
        </div>
    )
}

export default ImageGrid;