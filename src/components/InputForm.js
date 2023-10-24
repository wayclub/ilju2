import React, { useState } from 'react';
import './InputForm.css';

const years = Array.from({length: 100}, (_, i) => new Date().getFullYear() - i);
const months = Array.from({length: 12}, (_, i) => i + 1);
// const days = Array.from({length: 31}, (_, i) => i + 1);

function getDaysInMonth(month, year) {
    if (month === 2) {
        // February
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return 29; // Leap year
        } else {
            return 28; // Non-leap year
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        // April, June, September, November
        return 30;
    } else {
        // All other months
        return 31;
    }
}

function InputForm({ onSubmit }) {
    // const [year, setYear] = useState(new Date().getFullYear());
    // const [month, setMonth] = useState(new Date().getMonth() + 1);
    // const [day, setDay] = useState(new Date().getDate());
    const [days, setDays] = useState(Array.from({ length: 31 }, (_, i) => i + 1));
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorCount, setErrorCount] = useState(0);

    React.useEffect(() => {
        const numberOfDays = getDaysInMonth(Number(month), Number(year));
        setDays(Array.from({ length: numberOfDays }, (_, i) => i + 1));
    }, [month, year]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !year || !month || !day) {
            setErrorMessage('모든 정보를 입력해주세요.');
            setErrorCount(prevCount => prevCount + 1);
            console.log('Please select all fields');
            return;
        } else {
            setErrorMessage(''); // clear any previous error messages
        }
        
        // Handle the submission logic
        const birthday = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        onSubmit(name, birthday);
        console.log(year, month, day);
    };

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <input
                className='name-field' 
                type="text" 
                placeholder="이름" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <div className="date-container">
                <select className='select-field year' value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="" disabled className="date-placeholder-option">연도</option>
                    {years.map(y => <option key={y} value={y}>{y}년</option>)}
                </select>

                <select className='select-field month' value={month} onChange={(e) => setMonth(e.target.value)}>
                    <option value="" disabled>월</option>
                    {months.map(m => <option key={m} value={m}>{m}월</option>)}
                </select>
                <select className='select-field day' value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="" disabled>일</option>
                    {days.map(d => <option key={d} value={d}>{d}일</option>)}
                </select>
            </div>
            <button className='submit-button' type="submit">일주 찾기</button>
            {/* <div className="error-message-container">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div> */}
            <div className="error-message-container">
                {errorMessage && <div key={errorCount} className="error-message">{errorMessage}</div>}
            </div>
        </form>
    );
}

export default InputForm;