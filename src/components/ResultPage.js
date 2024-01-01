import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { imagesAndDescriptions } from '../utils/Data';
import './ResultPage.css';

function ResultPage() { // Added imageLoaded prop
    const { iljuString } = useParams(); 
    // Find the matched description from imagesAndDescriptions
    const matchedDescription = imagesAndDescriptions.find(desc => desc.iljuString === iljuString);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (matchedDescription) {
            const image = new Image();
            image.src = matchedDescription.image;
            image.onload = () => setImageLoaded(true);
        }
    }, [matchedDescription]);

    // Combine description and hashtags
    const metaDescription = matchedDescription 
                            ? `${matchedDescription.description} ${matchedDescription.hashtags}`
                            : '일주 결과 설명';
    
    // console.log(`${process.env.PUBLIC_URL}${matchedDescription.image}`);
    console.log(matchedDescription.image)
    return (
        <div className="result-container">
            <Helmet>
                <title>{`${matchedDescription.name}일주`}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>
            {imageLoaded && matchedDescription ? (
                <>
                    <img src={matchedDescription.image} alt={iljuString} className="result-image" />
                    <p className="result-name">{matchedDescription.name}</p>
                    <p className="result-hashtag">{matchedDescription.hashtags}</p>
                    <div className="result-description">
                        {matchedDescription.description.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </div>
                    <button className="retake-test-button" onClick={() => window.location.href = "/"}>다른 일주 보기</button>
                </>
            ) : null }
        </div>

    );
}

export default ResultPage;
