import { getNews } from '../FetchApi/news/getNews.js'

let newsItem = document.querySelector(".news-item") 
let newsItem2 = document.querySelector(".news-item2") 

let items = await getNews()

items.map((ele, index) => {
    if (index < 3){
        newsItem.innerHTML += `
        <div class="position-relative">
            <img height='220px' src="${ele["newsImage"]}" alt="this is lates news 1">

            <div class=" position-absolute h-50 w-100 top-50 start-0"><a
                    class="text-black bg-light py-2 d-block w-75 mx-auto text-center text-decoration-none"
                    href="${ele["newsUrl"]}">See
                    Full article</a>
            </div>
        </div>
        `;
    }
    else {
        console.log(ele,index)
        newsItem2.innerHTML += `
        <div class="position-relative">
            <img height='220px' src="${ele["newsImage"]}" alt="this is lates news 1">

            <div class=" position-absolute h-50 w-100 top-50 start-0"><a
                    class="text-black bg-light py-2 d-block w-75 mx-auto text-center text-decoration-none"
                    href="${ele["newsUrl"]}">See
                    Full article</a>
            </div>
        </div>
        `; 
    }
})
