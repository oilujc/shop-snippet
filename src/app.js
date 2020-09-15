import "./scss/styles.scss";

function ShopSnippet(options) {
  this._selector = document.querySelector(options.selector);
  this._container = document.createElement("div");

  this._data = {
    title: "Get This new promo",
    content: "<p>Hello World <p><p>Hello World <p>",
    url: "http://example.com",
    page: "promos",
  };

  this.createHeader = function () {
    let headerTitleText = document.createTextNode(this._data.title);
    let link = document.createElement("a");
    link.appendChild(headerTitleText);
    link.href = this._data.url;

    let headerTitle = document.createElement("p");
    headerTitle.appendChild(link);

    let closeBtn = document.createElement("button");
    closeBtn.addEventListener("click", () => {
      this._container.classList.add("close");
    });

    let header = document.createElement("div");
    header.classList.add("sh-container__header");
    header.appendChild(closeBtn);
    header.appendChild(headerTitle);

    return header;
  };

  this.createBody = function () {
    let body = document.createElement("div");
    body.classList.add("sh-container__body");
    body.innerHTML = this._data.content;

    return body;
  };

  this.init = function () {
    this._container.appendChild(this.createHeader());
    this._container.appendChild(this.createBody());
    this._container.classList.add("sh-container");

    this._selector.appendChild(this._container);
  };
}
