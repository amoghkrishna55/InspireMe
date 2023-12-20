import { useState, useEffect } from "react";
import "./App.css";

interface QuoteProps {
  title: string;
}

function Quote(props: QuoteProps) {
  return <h1>{props.title}</h1>;
}

interface QuoteAuthorProps {
  title: string;
}

function QuoteAuthor(props: QuoteAuthorProps) {
  return <p>{props.title}</p>;
}

function App() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [trigger, setTrigger] = useState(0);

  async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    const h1anim = document.querySelector("h1");
    const panim = document.querySelector("p");
    const button = document.querySelector("button");
    if (response.ok) {
      setContent(data.content);
      setAuthor(data.author);
      h1anim!.classList.add("animate");
      panim!.classList.add("animate");
      button!.classList.add("animate");

      setTimeout(() => {
        h1anim!.classList.remove("animate");
        panim!.classList.remove("animate");
        button!.classList.remove("animate");
      }, 2000);
    } else {
      setContent("An error occurred");
      console.log(data);
    }
  }

  useEffect(() => {
    updateQuote();
  }, [trigger]);

  return (
    <>
      <Quote title={content} />
      <QuoteAuthor title={author} />
      <button
        onClick={() => {
          setTrigger(trigger + 1);
        }}
      >
        New Quote
      </button>
    </>
  );
}

export default App;
