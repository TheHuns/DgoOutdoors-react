import React from "react";

export default function WolfCreek() {
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
        src="https://cdnres.willyweather.com/widget/loadView.html?id=104809"
        width="700"
        height="520"
        frameborder="0"
        scrolling="no"
        title="Wolf Creek Ski Weather"
      />
      <a
        style={aStyle}
        href="https://www.willyweather.com/co/mineral-county/wolf-creek-ski-area.html"
        rel="nofollow"
      >
        Wolf Creek Ski weather information
      </a>
    </div>
  );
}
