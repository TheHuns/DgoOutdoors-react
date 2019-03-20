import React from "react";

export default function Durango() {
  const divStyle = {
    width: "700px"
  };
  const iframeStyle = {
    display: "block"
  };
  const aStyle = {
    height: "20px",
    margin: "-20px 0 0 0",
    display: "block",
    textIndent: "-9999em",
    position: "relative",
    zIndex: "1"
  };

  return (
    <div style={divStyle}>
      <iframe
        style={iframeStyle}
        src="https://cdnres.willyweather.com/widget/loadView.html?id=104808"
        width="700"
        height="520"
        frameborder="0"
        scrolling="no"
        title="Durango Weather"
      />
      <a
        style={aStyle}
        href="https://www.willyweather.com/co/la-plata-county/durango.html"
        rel="nofollow"
      >
        durango weather information
      </a>
    </div>
  );
}
