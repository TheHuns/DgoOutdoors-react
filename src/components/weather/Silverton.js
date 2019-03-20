import React from "react";

export default function Silverton() {
  const divStyle = {
    width: "700px",
    margin: "auto"
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
        src="https://cdnres.willyweather.com/widget/loadView.html?id=104851"
        width="700"
        height="520"
        frameborder="0"
        scrolling="no"
        title="Silverton Weather"
      />
      <a
        style={aStyle}
        href="https://www.willyweather.com/co/san-juan-county/silverton.html"
      >
        Silveton weather information
      </a>
    </div>
  );
}
