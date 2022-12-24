import React from 'react';
import CatatanList from '../components/CatatanList';
import { useSearchParams } from 'react-router-dom';
import CatatanInput from '../components/CatatanInput';
import { getActiveNotes, deleteNote, addNote } from '../utils/api';

 function HomePage() {
  const [searchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword] = React.useState(() => {
    return searchParams.get('keyword') || ''
  });

  React.useEffect (() => {
    getActiveNotes().then(({ data }) =>
    setNotes(data));
  }, []);

  async function onDelete(id) {
    await deleteNote(id);

    const { data } = await getActiveNotes();
    setNotes(data);
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  async function onAddNote(note) {
    await addNote(note);
    
    const { data } = await getActiveNotes();
    setNotes(data);
  }

  return (
    <div className="catatan-app">
    <h2>Tambah Catatan</h2>
    <CatatanInput addCatatan={onAddNote} />
    <h2>Daftar Catatan</h2>
    <CatatanList catatans={filteredNotes} onDelete={onDelete} />
  </div>
   );

 }

 
export default HomePage;