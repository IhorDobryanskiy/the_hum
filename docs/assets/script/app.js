// ! Default condition

defaultCondition();

// ! Header search
searchIcon.addEventListener("click", () => {
  console.log(searchForm.style.display);
  if (getComputedStyle(searchForm).display === "none") {
    searchForm.style.display = "flex";
  } else if (getComputedStyle(searchForm).display === "flex") {
    searchForm.style.display = "none";
    searchInput.value = "";
    searchInput.style.color = "white";
  }
});

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  searchInput.style.color = "red";
  searchInput.value = "Oops...";
});

// ! Our Services section
// * Switch beetwen tabs and their content

// ! Our Amazing Work section
// * Switch beetwen tabs and their images

workTabsArray.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    loadMoreIterator = 0;

    loadMore[0].style.display = "flex";

    clearWorkTabsGrid();

    if (index === 0) {
      createImage(allImages);
      defaultWorkTabStyle();
      activeWorkTabStyle(index);
    } else if (index === 1 || index === 2 || index === 3 || index === 4) {
      createImage(allImages[index - 1]);

      defaultWorkTabStyle();

      activeWorkTabStyle(index);
    }
  });
});

// * Create image with button "Load More"

loadMore[0].addEventListener("click", () => {
  loadMorePlus[0].classList.add("loading");
  loadBar[0].classList.add("loaded");
  setTimeout(() => {
    if (workTabsGrid.childElementCount !== 0 && loadMoreIterator === 0) {
      defaultWorkTabStyle();
      clearWorkTabsGrid();
    }

    loadMoreCreateImage();

    if (loadMoreIterator === 36) loadMore[0].style.display = "none";
    loadMorePlus[0].classList.remove("loading");
    loadBar[0].classList.remove("loaded");
  }, 2000);
});

// ! Breaking News section
// * Load news

function breakingNews() {
  for (let i = 0; i < newsItemsArray.length; i++) {
    const newsItem = document.createElement("div");
    newsItem.className = "news__item";
    const newsItemImage = document.createElement("img");
    newsItemImage.className = "news__item-image";
    const newsItemDate = document.createElement("div");
    newsItemDate.className = "news__date";
    const newsItemDay = document.createElement("p");
    newsItemDay.className = "news__date-day";
    const newsItemMonth = document.createElement("p");
    newsItemMonth.className = "news__date-month";
    const newsItemText = document.createElement("div");
    newsItemText.className = "news-text";
    const newsItemTitle = document.createElement("p");
    newsItemTitle.className = "news__item-title";
    const newsItemComments = document.createElement("div");
    newsItemComments.className = "news__comments";
    const newsItemLastComment = document.createElement("a");
    newsItemLastComment.className = "news__comments-last";
    const newsItemCommentsAll = document.createElement("a");
    newsItemCommentsAll.className = "news__comments-all";

    newsTabsGrid.append(newsItem);
    newsItem.append(newsItemImage);
    newsItemImage.src = newsItemsArray[Math.floor(Math.random() * 8)];
    newsItem.append(newsItemDate);
    newsItemDate.append(newsItemDay);
    newsItemDay.innerText = Math.floor(Math.random() * 28) + +1;
    newsItemDate.append(newsItemMonth);
    newsItemMonth.innerText = Math.floor(Math.random() * 12) + +1;
    newsItem.append(newsItemText);
    newsItemText.append(newsItemTitle);
    newsItemTitle.innerText = "Amazing Blog Post";
    newsItemText.append(newsItemComments);
    newsItemComments.append(newsItemLastComment);
    newsItemLastComment.innerText = "By Admin";
    newsItemLastComment.href = "#";
    newsItemLastComment.addEventListener("click", (e) => {
      e.preventDefault();
    });
    newsItemComments.append(newsItemCommentsAll);
    newsItemCommentsAll.innerText = `${
      Math.floor(Math.random() * 99) + +1
    } comments`;
    newsItemCommentsAll.href = "#";
    newsItemCommentsAll.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
}

// ! People Say section

for (let i = 0; i < avatarArray.length; i++) {
  avatarArray[i].addEventListener("click", () => {
    removeChosen();
    avatarChosen.innerHTML = "";
    let cloneElement = avatarArray[i].cloneNode(true);
    cloneElement.style.position = "static";
    avatarArray[i].classList.add("chosen");
    avatarChosen.append(cloneElement);
    cloneElement.classList.add("chosen-scale");
    showName();
    showComment();

    chosenIndex = i;
  });
}

leftArrow.addEventListener("click", () => {
  removeChosen();
  avatarChosen.innerHTML = "";
  chosenIndex--;
  if (chosenIndex < 0) chosenIndex = avatarArray.length - 1;
  let cloneElement = avatarArray[chosenIndex].cloneNode(true);
  cloneElement.style.position = "static";
  avatarArray[chosenIndex].classList.add("chosen");
  avatarChosen.append(cloneElement);
  cloneElement.classList.add("chosen-scale");
  showName();
  showComment();
});

rightArrow.addEventListener("click", () => {
  removeChosen();
  avatarChosen.innerHTML = "";
  chosenIndex++;
  if (chosenIndex === avatarArray.length) chosenIndex = 0;
  let cloneElement = avatarArray[chosenIndex].cloneNode(true);
  cloneElement.style.position = "static";
  avatarArray[chosenIndex].classList.add("chosen");
  avatarChosen.append(cloneElement);
  cloneElement.classList.add("chosen-scale");
  console.log(peoplesChoosen.firstChild.dataset.comment);
  showName();
  showComment();
});

// ! Gallery of best images section

loadMore[1].addEventListener("click", () => {
  loadMorePlus[1].classList.add("loading");
  loadBar[1].classList.add("loaded");
  setTimeout(() => {
    loadMorePlus[1].classList.remove("loading");
    loadBar[1].classList.remove("loaded");
    const elems = [];
    for (let i = 1; i <= 10; i++) {
      const randomIndex = Math.floor(Math.random() * 20) + +1;
      const imageWrapper = document.createElement("div");
      imageWrapper.className = "grid-item";
      const galleryImage = document.createElement("img");
      grid.appendChild(imageWrapper);
      imageWrapper.appendChild(galleryImage);
      galleryImage.src = `./assets/images/gallery/gallery_image${randomIndex}.jpg`;
      elems.push(imageWrapper);
      console.log(randomIndex);
    }
    msnry.appended(elems);
  }, 2000);
});
