import React, { useState, useEffect } from 'react';
import './TextFilesGrid.css';

function TextFilesGrid() {
    const [textFiles, setTextFiles] = useState([]);

    useEffect(() => {
        fetch('https://flagged.azurewebsites.net/api/textfiles/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setTextFiles(data);
                } else {
                    console.error('Data is not an array:', data);
                    setTextFiles([]);
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setTextFiles([]);
            });
    }, []);

    return (
        <div className="grid-container">
            {textFiles.map(file => (
                <div key={file.id} className="grid-item">
                    <p><strong>Name:</strong> {file.name}</p>
                    <p><strong>Upload Date:</strong> {new Date(file.uploadDate).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
}

export default TextFilesGrid;
