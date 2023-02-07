function loadScript(src, callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src; //<script src="https://javascript.info/callbacks"></script>
  script.onload = () => callback(script);
  script.onerror = () => callback(new Error(`Script load failed for ${src}`));
  document.head.append(script); //add script to document head <head><script src="https://javascript.info/callbacks"></script></head>
}
const callback = (data) => {
  console.log("data:", data);
};
loadScript("../src/main.js", callback);
