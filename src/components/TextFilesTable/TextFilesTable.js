import React, { useState, useEffect } from 'react';
import './TextFilesTable.css';
import moment from 'moment';

function TextFilesTable() {
    const [textFiles, setTextFiles] = useState([]);

    useEffect(() => {
        fetch('https://flagged.azurewebsites.net/api/words/uploadedfiles')
            .then(response => response.json())
            .then(data => setTextFiles(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="table-container">
            <h2>Previously Uploaded Files</h2>
            <table>
                <thead>
                    <tr>
                        <th>Text File Name</th>
                        <th>Upload Date</th>
                    </tr>
                </thead>
                <tbody>
                    {textFiles.map(file => (
                        <tr key={file.id}>
                            <td>{file.name}</td>
                            <td>{moment(file.uploadDate).fromNow()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TextFilesTable;
