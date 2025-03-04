const mainImage = document.getElementById('mainImage');
const morePage = document.getElementById('aboutMe');
const moreButton = document.getElementById('moreButton');
const xButton = document.getElementById('xButton');



moreButton.addEventListener('click', function(event){
    mainImage.style.display = 'none';
    morePage.style.display = 'block';
});

xButton.addEventListener('click', function(event){
    mainImage.style.display = 'block';
    morePage.style.display = 'none';
});


function login(){
    window.open('login.html', '팝업', 'width= 400, height= 400');
}

function popup(){
    window.opener.openPage();
    window.close();
}

const images = [
    "image/dolphin.jpg",
    "image/cat.jpg",
    "image/owl.jpg",
    "image/fox.png",
    "image/highland-cattle.jpg",
    "image/bear.jpg",
    "image/flamingo.jpg",
    "image/sheep.jpg",
    "image/gorilla.jpg",
    "image/elephant.jpg",
    "image/eagle.jpg",
    "image/tiger.jpg"
];

const container = document.getElementById('imagesBox');

for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.src = images[i];
    img.id = 'animalImages' + (i + 1);
    img.classList.add('box2_image');
    container.appendChild(img);

    let popupDiv = document.getElementById(`popupDiv${i + 1}`);
    let popupModal = document.getElementById(`animalImages${i + 1}`);
    let popupImage = document.getElementById(`modalImages${i + 1}`);
    let closeButton = document.getElementById(`closeButton${i + 1}`);

    popupModal.addEventListener('click', function (){
        const index = this.id.replace('animalImages','')
        const popupDiv = document.getElementById(`popupDiv${index}`);
        const popupImage = document.getElementById(`modalImages${index}`);

        popupDiv.style.display = 'flex';
        popupImage.src = this.src;
        document.body.style.overflow = "hidden";
        popupImage.style.width = '27vw';
        popupImage.style.height = '75vh';
    });

    closeButton = closeButton.addEventListener('click', function(event){
        const index = this.id.replace('closeButton', '');
        const popupDiv = document.getElementById(`popupDiv${index}`);
        popupDiv.style.display = 'none';
        document.body.style.overflow = "unset";
        });
    }

const monitorPage = document.getElementById('box2_0');
const monitorPopup = document.getElementById('box2_1');
const monitorButton = document.getElementById('tvButton');
const monitorButton2 = document.getElementById('tvButton2');
const monitorButton3 = document.getElementById('tvButton3');

function openPage(){
    monitorPopup.style.display = 'block';
    monitorPage.style.display = 'none';
}

monitorButton2.addEventListener('click', function(event){
    monitorPage.style.display = 'block';
    monitorPopup.style.display = 'none';
});