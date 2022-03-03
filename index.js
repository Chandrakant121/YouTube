// Used many api beacuse there is limit to fetch data

// ask about api parameters
//second page data
// const API = "AIzaSyCvuXIU_9EXVd8IYXQnBR3y7g-W1yBnfD4"

// const API = "AIzaSyC2LB-Zc4rFXDtVrAUIADizaTY_qN39jv4"
// const API = "AIzaSyC2hYbbpOh8bzUK-bzl_cArynaHwAp6ttY";
// const API = "AIzaSyCnqvOa5JvbmVkks0UCCZTV2s-iBQFd9aY"
// const API = "AIzaSyBHCrPkKASbEThW93PHMBb4ytD5aXG0MMU"
// const API = "AIzaSyBHCrPkKASbEThW93PHMBb4ytD5aXG0MMU"
// const API = "AIzaSyCaEUwZtmOGqMObA9L2B0Hy-CwFdmjUToU"


const API = "AIzaSyC2LB-Zc4rFXDtVrAUIADizaTY_qN39jv4"
// const API = "AIzaSyAuGOFHhqxN6Er-6PviJHJCFuCRHbIB3hU"

const container = document.getElementById('container');
async function search() {
    try {
        let videoData = document.getElementById('video').value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${videoData}&type=video&key=${API}&maxResults=40`);

        let data = await res.json();
        //   console.log(data)
        let videos = data.items;
        display(videos);
    }
    catch (error) {
        console.log("err:", error);
    }
}
search();
const display = (items) => {

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
        container.append(div1);

    })
};
function disVideo(data) {
    localStorage.setItem('clicked', JSON.stringify(data));
    window.location.href = "YouTube2.html"
}