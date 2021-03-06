let blogs = [];

// image preview
function preview() {
  let img = document.getElementById("input-blog-image").files;

  img = URL.createObjectURL(img[0]);

  document.getElementById("img-preview").src = img;
  document.getElementById("img-preview").style.display = "block";
}

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");

  if (!title || !content || image.files.length == 0) {
    return alert("All data must be filled");
  }
  image = URL.createObjectURL(image.files[0]);

  // create blog item and push to blogs array
  let blog = {
    id: Date.now(),
    title: title,
    content: content,
    image: image,
    author: "Eri Dwi Atmoko",
    postAt: new Date(),
  };

  blogs.push(blog);
  manipulationHTML();

  // clear input
  document.getElementById("input-blog-title").value = "";
  document.getElementById("input-blog-content").value = "";
  document.getElementById("input-blog-image").value = "";
  document.getElementById("img-preview").style.display = "none";
}

function manipulationHTML() {
  let contentContainer = document.getElementById("contents");

  contentContainer.innerHTML = "";

  // looping through blogs array to access elements
  for (let i = 0; i < blogs.length; i++) {
    // store data to HTML using DOM innerHTML
    contentContainer.innerHTML += `
                                        <div class="blog-list-item">
                                            <div class="blog-image">
                                                <img src="${
                                                  blogs[i].image
                                                }" alt="" />
                                            </div>
                                            <div class="blog-content">
                                                <div class="btn-group">
                                                    <button class="btn-edit">Edit Post</button>
                                                    <button class="btn-post">Post Blog</button>
                                                    <button class="btn-delete" onclick="deletePost(${
                                                      blogs[i].id
                                                    })">Delete Blog</button>
                                                </div>
                                                <h1>
                                                    <a href="blog-detail.html" target="_blank">
                                                        ${blogs[i].title}
                                                    </a>
                                                </h1>
                                                <div class="detail-blog-content">
                                                    ${getFullTime(
                                                      blogs[i].postAt
                                                    )} | ${blogs[i].author}
                                                </div>
                                                <p>
                                                    ${blogs[i].content}
                                                </p>
                                                <div style="text-align: right; font-size:15; color:gray;">
                                                    ${getDistanceTime(
                                                      blogs[i].postAt
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        `;
  }
}

function deletePost(id) {
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id == id) {
      if (confirm("Are you sure to delete this post?")) {
        blogs.splice(i, 1);
      }
    }
  }
  manipulationHTML();
}

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getFullTime(time) {
  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();

  let hours = time.getHours();
  let minutes = time.getMinutes();

  let result = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;

  return result;
}

function getDistanceTime(time) {
  let timePost = time;
  let timeNow = new Date();

  let distance = timeNow - timePost; // Result in miliseconds

  let miliseconds = 1000; // miliseconds in 1 seconds
  let secondsInMinutes = 60; // seconds in 1 minutes
  let minutesInHours = 60; // minutes in 1 hours
  let hoursInDay = 23; // hours in 1 day

  let distanceDay = Math.floor(
    distance / (miliseconds * secondsInMinutes * minutesInHours * hoursInDay)
  );

  if (distanceDay >= 1) {
    return `${distanceDay} days ago`;
  } else {
    let distanceHours = Math.floor(
      distance / (miliseconds * secondsInMinutes * minutesInHours)
    );
    if (distanceHours >= 1) {
      return `${distanceHours} hours ago`;
    } else {
      let distanceMinutes = Math.floor(
        distance / (miliseconds * secondsInMinutes)
      );
      if (distanceMinutes >= 1) {
        return `${distanceMinutes} minutes ago`;
      } else {
        let distanceSeconds = Math.floor(distance / miliseconds);
        return `${distanceSeconds} seconds ago`;
      }
    }
  }
}

setInterval(() => {
  manipulationHTML();
}, 1000);
