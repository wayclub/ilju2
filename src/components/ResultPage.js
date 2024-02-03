import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useLocation } from 'react-router-dom';
import { imagesAndDescriptions } from '../utils/Data';
import './ResultPage.css';

// { setLoading }
function ResultPage() { // Added imageLoaded prop
    const { iljuString } = useParams(); 
    const location = useLocation();
    const { name, birthday } = location.state || {};
    // Find the matched description from imagesAndDescriptions
    const matchedDescription = imagesAndDescriptions.find(desc => desc.iljuString === iljuString);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (matchedDescription) {
            const image = new Image();
            image.src = matchedDescription.image;
            image.onload = () => {
                setImageLoaded(true);
            };
        }
    }, [matchedDescription]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const formattedYear = birthday ? new Date(birthday).getFullYear() : '';
    const formattedMonth = birthday ? new Date(birthday).getMonth() + 1 : '';
    const formattedDay = birthday ? new Date(birthday).getDate() : '';

    const content = imageLoaded && matchedDescription ? (
        <>
            <div className="user-info">
                <span className="user-name">{name}</span>
                <span className="divider">|</span>
                <span className="user-birthday year">{formattedYear}</span>
                <span className="divider">|</span>
                <span className="user-birthday month">{formattedMonth}</span>
                <span className="divider">|</span>
                <span className="user-birthday day">{formattedDay}</span>
            </div>
            <img src={matchedDescription.image} alt={iljuString} className="result-image" />
            <p className="result-name">{matchedDescription.name}</p>
            <p className="result-hashtag">{matchedDescription.hashtags}</p>
            <div className="result-description">
                {matchedDescription.description.split('\n').map((line, index) => (
                    <p key={index}>
                        {line}
                        <br />
                    </p>
                ))}
            </div>
            <button className="retake-test-button" onClick={() => window.location.href = "/"}>다른 일주 보기</button>
        </>
    ) : null;

    // Combine description and hashtags
    const metaDescription = matchedDescription 
                            ? `${matchedDescription.description} ${matchedDescription.hashtags}`
                            : '일주 결과 설명';
    
    // console.log(`${process.env.PUBLIC_URL}${matchedDescription.image}`);
    return (
        <div className="result-container" style={{ opacity: imageLoaded ? 1 : 0 }}>
            <Helmet>
                <title>{`${matchedDescription.name}일주`}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>
            {content}
        </div>

    );
}

export default ResultPage;
