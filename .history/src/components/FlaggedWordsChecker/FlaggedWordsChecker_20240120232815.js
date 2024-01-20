
import React, { useState } from 'react';

function FlaggedWordsChecker() {
    const [inputWords, setInputWords] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://flagged.azurewebsites.net/api/words/check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ words: inputWords })
            });
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Check Flagged Words</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputWords} 
                    onChange={(e) => setInputWords(e.target.value)} 
                    placeholder="Enter words separated by commas" 
                />
                <button type="submit">Check</button>
            </form>

            {result && (
                <div>
                    <h3>Results:</h3>
                    <p>Checked Against: {result.textCheckedAgainst}</p>
                    <p>Found Bad Words: {result.foundBadWords.join(', ')}</p>
                    <p>Number of Bad Words Found: {result.numberOfBadWordsFound}</p>
                    <p>Check Time: {new Date(result.checkTime).toLocaleString()}</p>
                </div>
            )}
        </div>
    );
}

export default FlaggedWordsChecker;
