
// import './App.css';
import FileUpload from './components/FileUpload/FileUpload'
import FlaggedWordsChecker from './components/FlaggedWordsChecker/FlaggedWordsChecker';
import TextFilesTable from './components/TextFilesTable/TextFilesTable';
import AppIntroduction from './components/AppIntroduction/AppIntroduction';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AppIntroduction/>
<FileUpload/>
<FlaggedWordsChecker/>
<TextFilesTable/>

    </div>
  );
}

export default App;
