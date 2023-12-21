import { useState, useEffect } from "react";
import "./App.css";

interface QuoteProps {
  title: string;
  className: string;
}

function Quote(props: QuoteProps) {
  return <h1 className={`fade ${props.className}`}>{props.title}</h1>;
}

interface QuoteAuthorProps {
  title: string;
  className: string;
}

function QuoteAuthor(props: QuoteAuthorProps) {
  return <p className={`fade ${props.className}`}>{props.title}</p>;
}

function App() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [hide, setHide] = useState(true);

  async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random?maxLength=80");
    const data = await response.json();
    if (response.ok) {
      setHide(true);
      setTimeout(() => {
        setContent(data.content);
        setAuthor(data.author);
        setHide(false);
      }, 500);
    } else {
      setContent("An error occurred");
      console.log(data);
    }
  }

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <>
      <Quote title={content} className={hide ? "hide" : ""} />
      <QuoteAuthor title={author} className={hide ? "hide" : ""} />
      <button onClick={updateQuote} className={`fade ${hide ? "hide" : ""}`}>
        New Quote
      </button>
    </>
  );
}

export default App;
