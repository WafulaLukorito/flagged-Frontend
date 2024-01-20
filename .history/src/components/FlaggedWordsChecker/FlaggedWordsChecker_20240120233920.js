
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
                    <p><strong>We checked the words you have flagged against this text:</strong>C {result.textCheckedAgainst}</p>
                    <p><strong>These are the flagged words contained in the file:</strong>C {result.foundBadWords.join(', ')}</p>
                    <p><strong>The number of flagged words:</strong> {result.numberOfBadWordsFound}</p>
                    <p><strong>This check was performed on:</strong>C {new Date(result.checkTime).toLocaleString()}</p>
                </div>
            )}
        </div>
    );
}

export default FlaggedWordsChecker;
