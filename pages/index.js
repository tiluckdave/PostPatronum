import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [ userInput, setUserInput ] = useState('');
  const [ apiOutput, setApiOutput ] = useState('')
  const [ isGenerating, setIsGenerating ] = useState(false)

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...")
    const response = await fetch('https://pp.tiluckdave.repl.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'prompt': userInput }),
    });


    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output)

    setApiOutput(`${output}`);
    setIsGenerating(false);
  }

  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>PostPatronum</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>PostPatronum!</h1>
          </div>
          <div className="header-subtitle">
            <h2>Elevate Your LinkedIn Game with Effortless Post Generation</h2>
            <h2>Simply Input Your Update and Let Us Handle the Rest (Ex. I won SIH 2023, I am hiring for Product Managers, Here's how I make PostPatronum, etc.)</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea placeholder="start typing here" className="prompt-box" value={userInput}
            onChange={onUserChangedText} />
          <div className="prompt-buttons">
            <a
              className={isGenerating ? 'generate-button loading' : 'generate-button'}
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
              </div>
            </a>
          </div>
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
