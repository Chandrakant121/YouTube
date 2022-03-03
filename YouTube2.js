
let video = JSON.parse(localStorage.getItem("clicked"))
console.log(video)
console.log(video.id.videoId)

let videoDiv = document.getElementById("video1")

let iframe = document.createElement("iframe")

iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`
iframe.width = "100%"
iframe.height = "400px"
// iframe.setAttribute("allowfullscreen", "true")

videoDiv.append(iframe);

// const API = "AIzaSyCvuXIU_9EXVd8IYXQnBR3y7g-W1yBnfD4"
// const API = "AIzaSyBHCrPkKASbEThW93PHMBb4ytD5aXG0MMU"
// const API = "AIzaSyCaEUwZtmOGqMObA9L2B0Hy-CwFdmjUToU"


const API = "AIzaSyC2LB-Zc4rFXDtVrAUIADizaTY_qN39jv4"
// const API = "AIzaSyAuGOFHhqxN6Er-6PviJHJCFuCRHbIB3hU"
const video2 = document.getElementById('video2');
async function searchVideo() {
    try {
        let video = document.getElementById('video').value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video}&type=video&key=${API}&maxResults=40`)

        let data = await res.json();
        // console.log(data)
        let videos = data.items;
        appendVideos(videos);
    }
    catch (e) {
        console.log("err:", e);
    }
}
searchVideo();

const appendVideos = (items) => {
    container.textContent = null;
    items.forEach((ele) => {
        let title = document.createElement("p");
        title.textContent = ele.snippet.title;
        title.style.fontSize = "17px"


        let Name = document.createElement("p");
        Name.textContent = ele.snippet.channelTitle;
        Name.style.fontSize = "16px"
        Name.style.opacity = "0.8"
        Name.style.marginTop = "5px"


        let thumbnail = document.createElement("img");
        thumbnail.setAttribute("id", "thumb");
        thumbnail.src = ele.snippet.thumbnails.medium.url;

        let div1 = document.createElement("div");

        div1.onclick = () => {
            disVideo(ele)
        }

        div1.append(thumbnail, title, Name);
        video2.append(div1);

    })
};

function disVideo(data) {
    localStorage.setItem('clicked_video', JSON.stringify(data));
    window.location.href = "YouTube2.html"
}
