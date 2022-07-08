import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../src/context/AuthContext";
function NewApp() {
  const { googleSignIn, user } = UserAuth();
  console.log('newyaer');
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
    if (!(user && user.email)) {
      navigate("/");
      console.log('hello');
      window.location.pathname = "/";
    }
  }, [user]);
    const [notes, setNotes] = useState([]);
    function addNote(newNote) {
        setNotes(prevNotes => {
          return [...prevNotes, newNote];
        });
      }
  
      function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }
      
    return (
        <div>
          <Header />
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
          <Footer />
        </div>
      );
}

export default NewApp;