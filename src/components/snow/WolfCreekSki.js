import React from "react";

export default function WolfCreekSki() {
  const iframeStyle = {
    width: "700px",
    height: "370px",
    border: "0",
    frameBorder: "0"
  };
  return (
    <div>
      <iframe
        id="o92867"
        style={iframeStyle}
        scrolling="no"
        src="https://www.onthesnow.com/widget/snow?resort=511&webcam=1&color=g"
        title="Purgatory snow report"
      />
      <p>
        <i>Snow information provided by: </i>
        <a
          href="https://www.onthesnow.com/colorado/durango-mountain-resort/skireport.html"
          target="_blank"
        >
          OnTheSnow.com
        </a>
      </p>
    </div>
  );
}
