
import React from 'react';
import './AppIntroduction.css'; // Make sure to create and import the corresponding CSS file

function AppIntroduction() {
    return (
        <div className="app-introduction">
            <h1 className="app-title">Flagged Words Checker</h1>
            <p>This app checks for flagged words against uploaded text documents.</p>
            <p>Please upload a text document and input flagged words (comma separated) to check if they occur within your text.</p>
            <p className="app-credits">App solely created to satisfy interview requirements for a fullstack application built with Java and React</p>
        </div>
    );
}

export default AppIntroduction;
