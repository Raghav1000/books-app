let fetchApiData = [];

const bookDataEl = document.getElementById("bookData");

const searchEl = document.getElementById("search");

const searchSort = searchEl.addEventListener("keyup", (e) => {
  const searchTrack = e.target.value.toLowerCase();

  const filteredData = fetchApiData.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTrack) ||
      item.description.toLowerCase().includes(searchTrack)
    );
  });
  displayData(filteredData);
});

const filterEl = document.getElementById("select");

const fetchApi = async () => {
  try {
    const res = await fetch("./booksData.json");
    fetchApiData = await res.json();

    displayData(fetchApiData);
  } catch (err) {
    console.log(err);
  }
};

const displayData = (fetchApiData) => {
  const divEl = fetchApiData
    .map((item) => {
      return `
       <div class="bookData">
         <img src=${item.img} />
         <h1> ${item.title} </h1>
        <h4> ${item.subtitle}</h4>
         <p> Author : ${item.author}</p>
        </div>
`;
    })
    .join("");
  bookDataEl.innerHTML = divEl;
};

fetchApi();

//function fetchData() {
//  fetch("./booksData.json")
//    .then((response) => {
//      return response.json();
//    })
//    .then((items) => {
//      console.log(items);

//      const renderData = items
//        .map((item) => {
//          return `
//        <div class="bookData">
//         <img src=${item.img} />
//         <h1> ${item.title} </h1>
//         <h4> ${item.subtitle}</h4>
//         <p> Author : ${item.author}</p>
//         <h6> Rating : ${item.rating}</h6>
//        </div>
//`;
//        })
//        .join("");
//      document.getElementById("bookData").innerHTML = renderData;
//    });
//}

//fetchData();
