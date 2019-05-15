class Article {
  domElement: Element;
  expandButton: HTMLElement;

  constructor(domElement: Element) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector(
      ".expandButton"
    ) as HTMLElement;
    this.expandButton.textContent = "expand";
    this.expandButton.addEventListener("click", () => this.expandArticle());
  }

  expandArticle() {
    this.domElement.classList.toggle("article-open");
    this.expandButton.textContent =
      this.expandButton.textContent === "expand"
        ? "collapse article"
        : "expand";
    if (this.expandButton.textContent === "collapse article") {
      this.expandButton.style.color = "#e20909";
    } else {
      this.expandButton.style.color = "#808080";
    }
  }
}

let articles = document.querySelectorAll(".article");
articles.forEach(article => new Article(article));

module.exports.Article;
