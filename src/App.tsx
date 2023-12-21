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
  const [button, setButton] = useState(false);

  async function updateQuote() {
    try {
      const response = await fetch(
        "https://api.quotable.io/random?maxLength=80"
      );
      const data = await response.json();
      if (response.ok) {
        setHide(true);
        if (button) {
          setButton(false);
        }
        setTimeout(() => {
          setContent(data.content);
          setAuthor(data.author);
          setHide(false);
        }, 500);
      } else {
        throw new Error(data);
      }
    } catch (error: unknown) {
      setButton(true);
      if (error instanceof Error) {
        setContent("An error occurred: quotable.io is unreachable");
        setAuthor(error.message);
      } else {
        setContent("An unknown error occurred");
        setAuthor("");
      }
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
        {button ? "Retry" : "New Quote"}
      </button>
    </>
  );
}

export default App;
