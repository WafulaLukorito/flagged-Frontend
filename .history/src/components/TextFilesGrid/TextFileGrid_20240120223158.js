import React, { useState, useEffect } from 'react';
import './TextFilesGrid.css'; 

function TextFilesGrid() {
    const [textFiles, setTextFiles] = useState([]);

    useEffect(() => {
        fetch('https://flagged.azurewebsites.net/api/textfiles/all')
            .then(response => response.json())
            .then(data => setTextFiles(data))
            .catch(error => console.error('Error fetching data:', error));
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
