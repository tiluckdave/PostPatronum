import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {
  const [ userInput, setUserInput ] = useState('');

  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>PostPatronum! Elevate Your LinkedIn Game with Effortless Post Generation</h1>
          </div>
          <div className="header-subtitle">
            <h2>Simply Input Your Update and Let Us Handle the Rest (Ex. I won SIH 2023, I am hiring for Product Managers, Here's how I make PostPatronum, etc.)</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea placeholder="start typing here" className="prompt-box" value={userInput}
            onChange={onUserChangedText} />
          <div className="prompt-buttons">
            <a className="generate-button" onClick={null}>
              <div className="generate">
                <p>Generate</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
