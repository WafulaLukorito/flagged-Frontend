import React, { useState } from 'react';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadResponse, setUploadResponse] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://localhost:8070/api/words/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setUploadResponse(data);
                alert('File uploaded successfully');
            } else {
                alert('File upload failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error uploading file');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

            {uploadResponse && (
                <div>
                    <h3>Upload Response:</h3>
                    <p>Status: {uploadResponse.status}</p>
                    <p>File Name: {uploadResponse.fileName}</p>
                    <p>Upload Date: {uploadResponse.uploadDate}</p>
                    <p>Contents:</p>
                    <textarea value={uploadResponse.contents} readOnly />
                </div>
            )}
        </div>
    );
}

export default FileUpload;
