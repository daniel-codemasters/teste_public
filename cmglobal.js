function loadScript(url) {
  var head = document.head;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  head.appendChild(script);
}

function loadCSS(url) {
  var head = document.head;
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  head.appendChild(link);
}

loadScript("https://painel.oxifin.com.br/sdk/v1/oxipay.js");

// https://swiperjs.com/demos
loadScript("/swiperjs-10-bundle.min.js");
loadCSS("/swiperjs-10-bundle.min.css");
