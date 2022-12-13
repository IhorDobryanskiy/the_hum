// ! Default condition

function defaultCondition() {
  infoTabsArray[0].style.background = "#18CFAB";

  hideAllTabsContent();

  hidetTiangles();

  showTriangle(0);

  tabsContentArray[0].style.display = "flex";

  breakingNews();

  let cloneElement = avatarArray[0].cloneNode(true);
  cloneElement.style.position = "static";
  avatarArray[0].classList.add("chosen");
  avatarChosen.append(cloneElement);
  cloneElement.classList.add("chosen-scale");

  showName();
  showComment();
}

// ! Header search

const searchIcon = document.querySelector(".header__search-icon");
const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

// ! Our Services section

const webDesign = document.querySelector(".web-design");
const graphicDesign = document.querySelector(".graphic-design");
const onlineSupport = document.querySelector(".online-support");
const appDesign = document.querySelector(".app-design");
const onlineMarketing = document.querySelector(".online-marketing");
const seoService = document.querySelector(".seo-service");
const triangle = document.querySelectorAll(".triangle");
const infoTabs = document.querySelectorAll(".info-tab");
const tabsContent = document.querySelectorAll(".tabs-content");

const infoTabsArray = [...infoTabs];
const triangleArray = [...triangle];
const tabsContentArray = [...tabsContent];

function defaultServiceTabsStyle() {
  infoTabsArray.forEach((el) => {
    el.style.background = "#F8FCFE";
  });
}

function hideAllTabsContent() {
  tabsContentArray.forEach((el) => {
    el.style.display = "none";
  });
}

function hidetTiangles() {
  triangleArray.forEach((el) => {
    el.hidden = true;
  });
}

function showTriangle(index) {
  triangleArray[index].hidden = false;
}

function showTabContent(index) {
  tabsContentArray[index].style.display = "flex";
}

function activeServiceTabStyle(tab) {
  tab.style.background = "#18CFAB";
}

infoTabsArray.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    defaultServiceTabsStyle();

    hideAllTabsContent();

    hidetTiangles();

    activeServiceTabStyle(tab);

    showTriangle(index);

    tabsContentArray[index].style.display = "flex";
  });
});

// ! Our Amazing Work section

let loadMoreIterator = 0;

const workTabs = document.querySelectorAll(".work__tabs-item");
const workTabsGrid = document.querySelector(".work__tabs-grid");
const loadMore = document.querySelectorAll(".load__more");
const loadMorePlus = document.querySelectorAll(".load__more img");
const loadBar = document.querySelectorAll(".load-bar");

const workTabsArray = [...workTabs];

const graphicDesignImages = [
  "./assets/images/graphic_design/graphic-design1.jpg",
  "./assets/images/graphic_design/graphic-design2.jpg",
  "./assets/images/graphic_design/graphic-design3.jpg",
  "./assets/images/graphic_design/graphic-design4.jpg",
  "./assets/images/graphic_design/graphic-design5.jpg",
  "./assets/images/graphic_design/graphic-design6.jpg",
  "./assets/images/graphic_design/graphic-design7.jpg",
  "./assets/images/graphic_design/graphic-design8.jpg",
  "./assets/images/graphic_design/graphic-design9.jpg",
  "./assets/images/graphic_design/graphic-design10.jpg",
  "./assets/images/graphic_design/graphic-design11.jpg",
  "./assets/images/graphic_design/graphic-design12.jpg",
];

const webDesignImages = [
  "./assets/images/web_design/web-design1.jpg",
  "./assets/images/web_design/web-design2.jpg",
  "./assets/images/web_design/web-design3.jpg",
  "./assets/images/web_design/web-design4.jpg",
  "./assets/images/web_design/web-design5.jpg",
  "./assets/images/web_design/web-design6.jpg",
  "./assets/images/web_design/web-design7.jpg",
  "./assets/images/web_design/web-design1.jpg",
  "./assets/images/web_design/web-design2.jpg",
  "./assets/images/web_design/web-design3.jpg",
  "./assets/images/web_design/web-design4.jpg",
  "./assets/images/web_design/web-design5.jpg",
];

const landingPageImages = [
  "./assets/images/landing_page/landing-page1.jpg",
  "./assets/images/landing_page/landing-page2.jpg",
  "./assets/images/landing_page/landing-page3.jpg",
  "./assets/images/landing_page/landing-page4.jpg",
  "./assets/images/landing_page/landing-page5.jpg",
  "./assets/images/landing_page/landing-page6.jpg",
  "./assets/images/landing_page/landing-page7.jpg",
  "./assets/images/landing_page/landing-page1.jpg",
  "./assets/images/landing_page/landing-page2.jpg",
  "./assets/images/landing_page/landing-page3.jpg",
  "./assets/images/landing_page/landing-page4.jpg",
  "./assets/images/landing_page/landing-page5.jpg",
];

const wordpressImages = [
  "./assets/images/wordpress/wordpress1.jpg",
  "./assets/images/wordpress/wordpress2.jpg",
  "./assets/images/wordpress/wordpress3.jpg",
  "./assets/images/wordpress/wordpress4.jpg",
  "./assets/images/wordpress/wordpress5.jpg",
  "./assets/images/wordpress/wordpress6.jpg",
  "./assets/images/wordpress/wordpress7.jpg",
  "./assets/images/wordpress/wordpress8.jpg",
  "./assets/images/wordpress/wordpress9.jpg",
  "./assets/images/wordpress/wordpress10.jpg",
  "./assets/images/wordpress/wordpress1.jpg",
  "./assets/images/wordpress/wordpress2.jpg",
];

const allImages = [
  graphicDesignImages,
  webDesignImages,
  landingPageImages,
  wordpressImages,
];

const allImagesArray = [
  ...graphicDesignImages,
  ...webDesignImages,
  ...landingPageImages,
  ...wordpressImages,
];

function clearWorkTabsGrid() {
  workTabsGrid.innerHTML = "";
}

function activeWorkTabStyle(index) {
  workTabsArray[index].style.cssText = ` border: 2px solid #18CFAB;
    padding: 21px 0;
    color: #18CFAB;`;
}

function defaultWorkTabStyle() {
  workTabsArray.forEach((element) => {
    element.style.cssText = "";
  });
}

function createImage(arr) {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      createImage(element);
    } else {
      const wrapper = document.createElement("div");
      const image = document.createElement("img");
      const hover = document.createElement("div");
      const hoverLogo = document.createElement("div");
      const hoverLogoImage = document.createElement("img");
      const hoverTitle = document.createElement("a");
      const hoverSubtitle = document.createElement("a");
      workTabsGrid.append(wrapper);
      wrapper.append(hover);
      hover.append(hoverLogo);
      hoverLogo.append(hoverLogoImage);
      hover.append(hoverTitle);
      hover.append(hoverSubtitle);
      wrapper.append(image);
      image.src = element;
      image.alt = "";
      image.style.width = "100%";
      image.style.cursor = "pointer";
      wrapper.className = "grid-image-wrapper";
      hoverTitle.href = "#";
      hoverTitle.className = "hover-title";
      hoverSubtitle.href = "#";
      hoverSubtitle.className = "hover-subtitle";
      hoverLogoImage.src = "./assets/icons/hover-icon.png";
      hoverTitle.innerText = "creative design";
      hoverSubtitle.innerText = "Web Design";
      hover.className = "image-hover";
    }
  });
}

function loadMoreCreateImage() {
  for (let i = 0; i < 12; i++) {
    const wrapper = document.createElement("div");
    const image = document.createElement("img");
    const hover = document.createElement("div");
    const hoverLogo = document.createElement("div");
    const hoverLogoImage = document.createElement("img");
    const hoverTitle = document.createElement("a");
    const hoverSubtitle = document.createElement("a");
    workTabsGrid.append(wrapper);
    wrapper.append(hover);
    hover.append(hoverLogo);
    hoverLogo.append(hoverLogoImage);
    hover.append(hoverTitle);
    hover.append(hoverSubtitle);
    wrapper.append(image);
    image.src = allImagesArray[Math.floor(Math.random() * 48)];
    image.alt = "";
    image.style.width = "100%";
    image.style.cursor = "pointer";
    wrapper.className = "grid-image-wrapper";
    hoverTitle.href = "#";
    hoverTitle.className = "hover-title";
    hoverSubtitle.href = "#";
    hoverSubtitle.className = "hover-subtitle";
    hoverLogoImage.src = "./assets/icons/hover-icon.png";
    hoverTitle.innerText = "creative design";
    hoverSubtitle.innerText = "Web Design";
    hover.className = "image-hover";

    loadMoreIterator++;
  }
}

// ! Breaking News section

const newsTabsGrid = document.querySelector(".news__tabs-grid");
const randomDay = Math.floor(Math.random() * 28) + +1;
const randomMonth = Math.floor(Math.random() * 12) + +1;
const randomNewsItemImage = Math.floor(Math.random() * 8);

const newsItemsArray = [
  "./assets/images/breaking_news/news1.png",
  "./assets/images/breaking_news/news2.png",
  "./assets/images/breaking_news/news3.png",
  "./assets/images/breaking_news/news4.png",
  "./assets/images/breaking_news/news5.png",
  "./assets/images/breaking_news/news6.png",
  "./assets/images/breaking_news/news7.png",
  "./assets/images/breaking_news/news8.png",
];

// ! People Say section

const avatar = document.querySelector(".avatar-wrapper");
const avatarArray = [...document.querySelectorAll(".avatar-wrapper")];
const avatarParent = document.querySelector(".peoples-avatar");
const avatarChosen = document.querySelector(".peoples-choosen");
const peoplesChoosen = document.querySelector(".peoples-choosen");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const peoplesNameArray = document.querySelectorAll(".peoples-name");
const peopleCommentText = document.querySelectorAll(".people__comments-text");
let chosenIndex = 0;

function removeChosen() {
  avatarArray.forEach((element) => {
    element.classList.remove("chosen");
  });
}

function removeActive() {
  peoplesNameArray.forEach((element) => {
    element.parentElement.classList.remove("active");
  });
}

function showName() {
  peoplesNameArray.forEach((element) => {
    if (
      element.innerText.toLowerCase() ===
      peoplesChoosen.firstChild.dataset.comment.toLowerCase()
    ) {
      removeActive();
      element.parentElement.classList.add("active");
    }
  });
}

function showComment() {
  peopleCommentText.forEach((element) => {
    if (
      element.dataset.comment.toLowerCase() ===
      peoplesChoosen.firstChild.dataset.comment.toLowerCase()
    ) {
      peopleCommentText.forEach((element) => {
        element.classList.remove("active");
      });
      element.classList.add("active");
    }
  });
}

// ! Images gallery section

const grid = document.querySelector(".grid");
let msnry;
window.onload = function () {
  msnry = new Masonry(grid, {
    columnWidth: 373,
    itemSelector: ".grid-item",
    gutter: 20,
  });

  grid.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, ".grid-item img")) {
      return;
    }
    event.target.parentNode.classList.toggle("grid-item--gigante");
    msnry.layout();
  });
};

for (let i = 1; i <= 20; i++) {
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "grid-item";
  const galleryImage = document.createElement("img");
  grid.appendChild(imageWrapper);
  imageWrapper.appendChild(galleryImage);
  galleryImage.src = `./assets/images/gallery/gallery_image${i}.jpg`;
}
