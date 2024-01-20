
import React, { useState } from 'react';
import './FlaggedWordsChecker.css';
import DOMPurify from 'dompurify';

function FlaggedWordsChecker() {
    const [inputWords, setInputWords] = useState('near, baked bread, call of the city, moss covered rock, bake, it, adventure, renewed purpose, distant');
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

    const highlightWords = (text, words) => {
        let highlightedText = text;
        words.forEach(word => {
            const regex = new RegExp(`\\b${word.trim()}\\b`, 'gi');
            highlightedText = highlightedText.replace(regex, `<span class="highlight">${word}</span>`);
        });
        return DOMPurify.sanitize(highlightedText);
    };
    

    return (
        <div className="flagged-words-checker-container">
            <h2>Check Flagged Words</h2>
            <p><em>Please insert the words you would like to flag.<br />Ensure that the words are separated by commas.</em></p>
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
                    <p><strong>We checked the words you have flagged against this text:</strong></p>
                        <p> {result.textCheckedAgainst}</p>
                    <p><strong>These are the flagged words contained in the file:</strong> {result.foundBadWords.join(', ')}</p>
                    <p><strong>The number of flagged words:</strong> {result.numberOfBadWordsFound}</p>
                    <p><strong>This check was performed on:</strong> {new Date(result.checkTime).toLocaleString()}</p>
                    <div dangerouslySetInnerHTML={{ __html: highlightWords(result.textCheckedAgainst, result.foundBadWords) }} />
                </div>
            )}
        </div>
    );
}

export default FlaggedWordsChecker;
