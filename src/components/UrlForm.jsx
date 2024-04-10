import React, { useState } from "react";
import "./urlForm.css";
function UrlShortener() {
  const [inputUrl, setInputUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://swapnil-shorturl.onrender.com/api/url/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longURL: inputUrl }),
      });

      const data = await response.json();
      console.log(data);
      setShortenedUrl(data.shortUrl);
      console.log(shortenedUrl)
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setInputUrl(event.target.value);
  };

  return (
    <div className="url-shortener-container ">
        
      <form className="url-shortener-form" onSubmit={handleSubmit}>
        <label className="url-label">URL: </label>
        <input className="url-shortener-input" type="text" value={inputUrl} onChange={handleChange} />
        <button className="url-shortener-submit"type="submit">Submit</button>
      </form>
      
        {
            shortenedUrl &&
            <div className="shortened-url-container"> 
                <p className="shortened-url-box">
                    <span className="shortened-url-label">Shortened URL: </span> 
                    <a href={shortenedUrl} target="_blank" rel="noreferrer" className="shortened-url-link">{shortenedUrl}</a>
                </p>
            </div> 
        }
         
      
    </div>
  );
}

export default UrlShortener;