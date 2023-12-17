import React from 'react';
import { Helmet } from 'react-helmet';
import { getIljuString } from '../utils/DateLogic';
import { imagesAndDescriptions } from '../utils/Data';
import './ResultPage.css';

function ResultPage({ data, imageLoaded }) { // Added imageLoaded prop
    const iljuString = getIljuString(data.birthday);

    // Find the matched description from imagesAndDescriptions
    const matchedDescription = imagesAndDescriptions.find(desc => desc.iljuString === iljuString);

    // Combine description and hashtags
    const metaDescription = matchedDescription 
                            ? `${matchedDescription.description} ${matchedDescription.hashtags}`
                            : '일주 결과 설명';

    return (
        <div className="result-container">
            <Helmet>
                <title>{matchedDescription ? `${matchedDescription.name}일주` : '일주 결과'}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>
            {matchedDescription && (
                <>
                    {imageLoaded ? (
                        // If image is loaded, display it
                        <img src={matchedDescription.image} alt={iljuString} className="result-image" />
                    ) : (
                        // Optional: Display a placeholder or spinner while the image is loading
                        <div className="image-placeholder">Loading Image...</div>
                    )}
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
                    {/* <p className="result-description">{matchedDescription.description}</p> */}
                    <button className="retake-test-button" onClick={() => window.location.href="/"}>다른 일주 보기</button>
                </>
            )}
        </div>
    );
}

export default ResultPage;
