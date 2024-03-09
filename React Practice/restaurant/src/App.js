import './App.css';
import Notes from './notes'
import NoteView from './NoteView'

function createNotes(Notes) {
  return < NoteView 
    title={Notes.title}
    desc={Notes.desc} />

}
function App() {
  return (
    <div className="App">
      {Notes.map(createNotes)}
    </div>
  );
}

export default App;
