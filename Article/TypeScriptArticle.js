var Article = /** @class */ (function () {
    function Article(domElement) {
        var _this = this;
        this.domElement = domElement;
        this.expandButton = this.domElement.querySelector(".expandButton");
        this.expandButton.textContent = "expand";
        this.expandButton.addEventListener("click", function () { return _this.expandArticle(); });
    }
    Article.prototype.expandArticle = function () {
        this.domElement.classList.toggle("article-open");
        this.expandButton.textContent =
            this.expandButton.textContent === "expand"
                ? "collapse article"
                : "expand";
        if (this.expandButton.textContent === "collapse article") {
            this.expandButton.style.color = "#e20909";
        }
        else {
            this.expandButton.style.color = "#808080";
        }
    };
    return Article;
}());
var articles = document.querySelectorAll(".article");
articles.forEach(function (article) { return new Article(article); });
