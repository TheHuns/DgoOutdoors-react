import React from "react";

export default function Moab() {
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
        src="https://cdnres.willyweather.com/widget/loadView.html?id=104791"
        width="700"
        height="520"
        frameborder="0"
        scrolling="no"
        title="Durango Weather"
      />
      <a
        style={aStyle}
        href="https://www.willyweather.com/ut/grand-county/moab.html"
        rel="nofollow"
      >
        Moab weather information
      </a>
    </div>
  );
}
