// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector(".expandButton");

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle());

    // prepend close button
    this.close = document.createElement("p");
    this.close.className = "close";
    this.close.textContent = "Mark as Read";
    this.domElement.prepend(this.close);
    this.close.addEventListener("click", () => {
      this.deleteArticle();
    });

    // need this stuff for animation
    this.forward = true;
    // you have to create the tween in reverse or it triggers automatically, and it's defined outside the method that calls it because I want to be able to use tween.play() and tween.reverse()
    this.tween = TweenMax.to(this.domElement, 1, {
      height: "400px",
      ease: Back.easeInOut.config(2)
    }).reverse();
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.domElement.classList.toggle("article-open");
    this.animate();
  }
  animate() {
    if (this.forward) {
      this.tween.play();
      this.forward = false;
      this.expandButton.textContent = "Click to Close";
    } else {
      this.tween.reverse();
      this.forward = true;
      this.expandButton.textContent = "Click to Expand";
    }
  }
  deleteArticle() {
    // this.domElement.style.display = "none";
    TweenMax.to(this.domElement, 1, { opacity: 0, display: "none" });
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll(".article");
articles.forEach(article => new Article(article));
