import React from 'react';

const TestiMonialsDetails2 = ({testiMonialDetail2}) => {
    const {img2} = testiMonialDetail2;
    console.log("testiMonialDetail"+testiMonialDetail2)
    return (
        <div class="item">
            <img src={img2}></img>
           
        </div>
    );
};

export default TestiMonialsDetails2;