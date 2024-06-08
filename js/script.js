AOS.init();
//LOGO
gsap.from(".navbar-brand",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
})

//menu item
gsap.from(".navbar-nav .nav-item",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
    stagger:0.3,
})

gsap.from(".navbar-toggler",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
})

//main-heading
gsap.from(".main-heading",{
    opacity:0,
    y:20,
    delay:2,
    duration:0.5,
})

//btn wrapper
gsap.from(".btn-wrapper",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".team-img-wrapper",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".info-text",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

//about
gsap.from(".about",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

//contact
gsap.from(".contact",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".home_type_detail",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".detail-blog",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".home_type",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})


document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-shadow');
        } else {
            navbar.classList.remove('navbar-shadow');
        }
    });
});

//Load all type rumah 
const jsonData = {
    "rumah": [
        {
            "tipe": "A",
            "gambar_rumah": "./img/house-1.png",
            "nama": "Casa Verde",
            "luas_bangunan": 120,
            "luas_tanah": 200,
            "kamar_mandi": 2,
            "kamar_tidur": 3,
            "deskripsi": "Casa Verde, a house with a modern design and sufficient land area for family life. With two bathrooms and three bedrooms, this house provides comfort and warmth for your family",
            "harga": "700Jt-an",
            "carport": "1",
            "denah_rumah":"./img/denah_rumah.jpg"
        },
        {
            "tipe": "B",
            "gambar_rumah": "./img/house-2.png",
            "nama": "Sky Villa",
            "luas_bangunan": 180,
            "luas_tanah": 250,
            "kamar_mandi": 3,
            "kamar_tidur": 4,
            "deskripsi": "Sky Villa, a luxury house with stunning views. With three bathrooms and four bedrooms, this is the perfect place to live in style and relax against the blue sky",
            "harga": "800Jt-an",
            "carport": "1",
            "denah_rumah":"./img/denah_rumah.jpg"
        },
        {
            "tipe": "C",
            "gambar_rumah": "./img/house-3.png",
            "nama": "Lakeview Mansion",
            "luas_bangunan": 220,
            "luas_tanah": 300,
            "kamar_mandi": 4,
            "kamar_tidur": 5,
            "deskripsi": "Lakeview Mansion, a magnificent home with stunning lake views. With four bathrooms and five bedrooms, this home brings elegance and comfort to a prestigious lifestyle",
            "harga": "900Jt-an",
            "carport": "1",
            "denah_rumah":"./img/denah_rumah.jpg"
        },
        {
            "tipe": "D",
            "gambar_rumah": "./img/house-4.png",
            "nama": "Garden Retreat",
            "luas_bangunan": 150,
            "luas_tanah": 180,
            "kamar_mandi": 2,
            "kamar_tidur": 3,
            "deskripsi": "Garden Retreat, elegant house with beautiful garden. Two bathrooms and three bedrooms provide the perfect balance between natural beauty and modern home comfort",
            "harga": "950Jt-an",
            "carport": "1",
            "denah_rumah":"./img/denah_rumah.jpg"
        }
    ]
}

//function dynamic create html for each house
function createHouseCard(house, index, isMobileView){
    const isOdd = index%2 ===1;

    const penjelasan = `
    <div class="col-md-6 my-4">
    <h2>${house.nama}</h2>
    <p>${house.deskripsi}</p>
    <div class="row">
        <div class="col-md-5 mb-3">
            <div class="card d-flex justify-content-center align-items-center p-3 home_type_item">
                <i class="fa-solid fa-briefcase"></i>
                <h3>${house.luas_bangunan}</h3>
                <p>Building Area</p>
            </div>
        </div>
        <div class="col-md-5 mb-3">
            <div class="card d-flex justify-content-center align-items-center p-3 home_type_item">
                <i class="fa-solid fa-briefcase"></i>
                <h3>${house.luas_tanah}</h3>
                <p>Land Area</p>
            </div>
        </div>
        <div class="col-md-5 mb-3">
            <div class="card d-flex justify-content-center align-items-center p-3 home_type_item">
                <i class="fa-solid fa-shower"></i>
                <h3>${house.kamar_mandi}</h3>
                <p>Bathroom</p>
            </div>
        </div>
        <div class="col-md-5 mb-3">
            <div class="card d-flex justify-content-center align-items-center p-3 home_type_item">
                <i class="fa-solid fa-bed"></i>
                <h3>${house.kamar_tidur}</h3>
                <p>Bedroom</p>
            </div>
        </div>
    </div>
    <a href="./home_detail.html?house_type=${house.tipe}" class='btn btn-contact view_more_btn mt-1' style="text-decoration: none">
    Learn More
    </a>
    </div>
    `;

    const gambar_rumah = `
        <div class="col-md-6 my-4">
            <img src="${house.gambar_rumah}" alt="${house.nama}" class="img-fluid"/>
        </div>
    `;

    var html = ``
    if (isOdd){
        html = gambar_rumah + penjelasan;
    } else {
        html = penjelasan + gambar_rumah;
    }
    //handle mobile view
    if (isMobileView){
        html = gambar_rumah + penjelasan;
    }

    return html;
}


function createOtherType(house){
    const item =`
        <div class="col-md-6 my-4 ">
            <img src="${house.gambar_rumah}" class="w-100" style="max-height:200px; object-fit: cover; object-position: bottom">
            <br><br>
            <a href="./home_detail.html?house_type=${house.tipe}">
                <h3 class="text-center">${house.nama} House </h3>
            </a>
            </div>
    `

    return item;

}
//load data into html (Web View)
const homeContainer = document.getElementById('homeContainer')
if (homeContainer != null){
    jsonData.rumah.forEach((house, index)=> {
        const houseCard = createHouseCard(house, index, false);
        homeContainer.innerHTML += houseCard;
        
    } )
}
 
//load data into html (mobile view)
const homeContainerMobile = document.getElementById('homeContainerMobile')
if (homeContainerMobile != null){ 
    jsonData.rumah.forEach((house, index)=> {
        const houseCard = createHouseCard(house, index, true);
        homeContainerMobile.innerHTML += houseCard;
    } )
}


//Load data tipe lain
const seeOtherTypes = document.getElementById('seeOtherTypes')
if (seeOtherTypes != null){
    jsonData.rumah.forEach((house)=> {
        const tipeCard = createOtherType(house);
        seeOtherTypes.innerHTML += tipeCard;
        
    } )
}

//LOAD DETAIL RUMAH
function filterRumahByTipe(tipe){
    const filteredRumah = jsonData.rumah.find(rumah => rumah.tipe == tipe);
    return filteredRumah || null;
}

var queryString = window.location.search;

var searchParams = new URLSearchParams(queryString);

var tipeRumahValue = searchParams.get('house_type');

//load data to view html
if(tipeRumahValue != null && tipeRumahValue != ""){
    const filteredRumah = filterRumahByTipe(tipeRumahValue.toUpperCase())

    if (filteredRumah == null){
        console.log("rumah not found");
    } else {
        document.getElementById("title-house-name").innerText = filteredRumah.nama + ' House';
        document.getElementById("house-image").src = filteredRumah.gambar_rumah;
        document.getElementById("house-name").innerText = filteredRumah.nama;
        document.getElementById("house-description").innerText = filteredRumah.deskripsi;
        document.getElementById("house-price").innerText = filteredRumah.harga;
        document.getElementById("house-building-area").innerText = filteredRumah.luas_bangunan + ' m²';
        document.getElementById("house-land-area").innerText = filteredRumah.luas_tanah + ' m²';
        document.getElementById("house-bathroom").innerText = filteredRumah.kamar_mandi;
        document.getElementById("house-bedroom").innerText = filteredRumah.kamar_tidur;
        document.getElementById("house-carport").innerText = filteredRumah.carport;
        document.getElementById("denah-rumah").src = filteredRumah.denah_rumah;
    }
}

//FOR BLOG LOAD DATA
const blogData = [
    {
        id:1,
        title:"Perumahan Dengan Hunian Nyaman dan Modern: Casa Verde di ResidenciaHub",
        date:"21 Maret 2024, 09:00 AM",
        description:"Dalam dunia properti, terutama di industri perumahan, kebutuhan akan hunian yang nyaman dan modern semakin menjadi prioritas bagi masyarakat urban. Salah satu perumahan yang menawarkan konsep tersebut adalah ResidenciaHub dengan tipe hunian bernama Casa Verde...",
        detail_blog:"./content/blog1.html",
        image_blog:"./img/house-1.png"
    },
    {
        id:2,
        title:"Menikmati Kemewahan Hidup di Sky Villa : Rumah Hunian Modern dengan Pemandangan Mengagumkan",
        date:"22 Maret 2024, 08:00 AM",
        description:"Selamat datang di Sky Villa, rumah hunian modern yang menghadirkan kemewahan dan kenyamanan di tengah-tengah pemandangan yang menakjubkan. Ini bukan sekadar tempat tinggal, tetapi sebuah pengalaman hidup bergaya dan bersantai di atas langit biru...",
        detail_blog:"./content/blog2.html",
        image_blog:"./img/house-2.png"
    },
]

function generateBlogHTML(blogPost){
    return `
    <div class="card mb-4">
        <div class="row">
            <div class="col-md-4">
                <img src="${blogPost.image_blog}" width="100%" height="100%">
            </div>
            <div class="col-md-8 p-4">
                 <div>
                    <h5>${blogPost.title}</h5>
                    <div class="blog-date d-flex mt-1">
                        <i class="fa-regular fa-calendar me-2 mt-1"></i>
                        <p>${blogPost.date}</p>
                    </div>
                    <p class="description-blog mt-1">${blogPost.description}</p>
                    <a href="./detail_blog.html?id=${blogPost.id}" class="btn btn-sm btn-primary btn-readmore"> 
                        <i class="fa-solid fa-book me-1"></i>
                        read more
                    </a>
                 </div>
            </div>
        </div>
    </div>
    `;
}

function generateLatestBlogHTML(blogPost){
    return `
    <a href="./detail_blog.html?id=${blogPost.id}" class="latest-blog-items">
        <p>${blogPost.title}</p>
        <div class="blog-date d-flex mt-1">
            <i class="fa-regular fa-calendar me-2 mt-1"></i>
            <p>${blogPost.date}</p>
        </div>
        <hr>
    </a>
    `;
}

function renderBlogPost(filteredBlogData, isFiltered){
    const blogContainer = document.getElementById('blogContainer');
    const latestBlogContent = document.getElementById('latestBlogContent');

    //render latest blog
    if (latestBlogContent != null){
        //clear previous content
        latestBlogContent.innerHTML = '';

        const lastTwoBlogPosts = blogData.slice(-2);
        lastTwoBlogPosts.forEach(blogPost => {
            latestBlogContent.innerHTML += generateLatestBlogHTML(blogPost)
        });
    }

    if (blogContainer == null){
        return //skipped
    }

    //clear previous content
    blogContainer.innerHTML = '';

    //check filtering data
    if (isFiltered){
        if (filteredBlogData.length == 0){
            const emptyStateDiv = document.createElement('div');
            emptyStateDiv.textContent = "No blog post available";
            blogContainer.appendChild(emptyStateDiv);
        }
        filteredBlogData.forEach(blogPost => {
            blogContainer.innerHTML = generateBlogHTML(blogPost)
        });
    }else{
        blogData.forEach(blogPost => {
            blogContainer.innerHTML += generateBlogHTML(blogPost)
        });
    }

}

function searchBlog(input){
    const searchTerm = input.value.toLowerCase();
    const filteredBlogData = []
    blogData.forEach(blogPost => {
        if(blogPost.title.toLowerCase().includes(searchTerm)){
            filteredBlogData.push(blogPost);
        }
    })

    if (searchTerm != null && searchTerm != ""){
        renderBlogPost(filteredBlogData, true)
    } else {
        renderBlogPosts([], false)
    }
}

// render blog post when page loads
window.onload = renderBlogPost([], false);

//get value params query id
var idBlogValue = searchParams.get('id');

if (idBlogValue != null && idBlogValue != ""){
    const filteredBlogData = getBlogById(parseInt(idBlogValue, 10));
    if (filteredBlogData != null && filteredBlogData != undefined){
        document.getElementById("cardDetailImg").src = filteredBlogData.image_blog;
        document.getElementById("tgl-blog").innerText = filteredBlogData.date;
        document.getElementById("title-blog").innerText = filteredBlogData.title;
        loadDetailBlog(filteredBlogData.detail_blog);
    }else{
        console.log("error on data id parameter:" + idBlogValue)
    }
}

function getBlogById(blogId){
    return blogData.filter(blog => blog.id === blogId) [0];
}

//function for load detail blog data
function loadDetailBlog(detailBlogURL){
    const cardDetailBlog = document.getElementById("cardDetailBlog");
    if (cardDetailBlog == null || cardDetailBlog == undefined){
        console.log("no element has id cardDetailBlog");
        return
    }

    document.getElementById("cardDetailBlog").src = detailBlogURL;
}