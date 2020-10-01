const { default: Axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// const followersArray = [
//   "tetondan",
//   "dustinmyers",
//   "justsml",
//   "luishrd",
//   "bigknell",
//   "DonSutherland95",
// ];

// for (let i = 0; i < followersArray.length; i++) {
//   Axios.get(`https://api.github.com/users/${i}`)
//     .then((res) => {
//       // createUser(res);
//       let cards = document.querySelector(".cards");
//       cards.appendChild(createUser(res));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

Axios.get("https://api.github.com/users/DonSutherland95")
  .then((res) => {
    // createUser(res);
    let cards = document.querySelector(".cards");
    cards.appendChild(createUser(res));
  })
  .catch((error) => {
    console.log(error);
  });

function createUser(obj) {
  let div1 = document.createElement("div");
  let img = document.createElement("img");
  let div2 = document.createElement("div");
  let h3 = document.createElement("h3");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let a = document.createElement("a");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");

  div1.classList.add("card");
  div2.classList.add("card-info");
  h3.classList.add("name");
  p1.classList.add("username");

  img.src = obj.data.avatar_url;
  h3.textContent = obj.data.name;
  p1.textContent = obj.data.login;
  p2.textContent = obj.data.location;
  p3.textContent = `Profile: `;
  a.textContent = `${obj.data.html_url}`;
  a.href = obj.data.html_url;
  p4.textContent = `Followers: ${obj.data.followers}`;
  p5.textContent = `Following: ${obj.data.following} `;
  p6.textContent = `Bio: ${obj.data.bio}`;

  div1.appendChild(img);
  div1.appendChild(div2);
  div2.appendChild(h3);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);
  p3.appendChild(a);

  // p3.appendChild(a);
  // a.textContent = "link";
  // a.href = "https://msn.com";

  console.log(div1);

  return div1;
}
// createUser();
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];
followersArray.forEach((person) => {
  Axios.get(`https://api.github.com/users/${person}`)
    .then((res) => {
      // createUser(res);
      let cards = document.querySelector(".cards");
      cards.appendChild(createUser(res));
    })
    .catch((error) => {
      console.log(error);
    });
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
