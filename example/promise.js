function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Couldn't load for ${src}`));
    document.head.append(script);
  });
}
loadScript("../src/main.js")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
