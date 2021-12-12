import React from 'react';

const PhotoRow = ({pic1,pic2,pic3,pic4,text}) => {
    return (
        <>
            <h3>{text}</h3>
        <div>
            { pic1 ? <img src={pic1} alt=""/> : ""}
            { pic2 ? <img src={pic2} alt=""/> : ""}
            { pic3 ? <img src={pic3} alt=""/> : ""}
            { pic4 ? <img src={pic4} alt=""/> : ""}
        </div>
        </>
    );
};

export default PhotoRow;