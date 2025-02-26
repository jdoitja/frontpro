const mainImage = document.getElementById('mainImage');
const morePage = document.getElementById('aboutMe');
const moreButton = document.getElementById('moreButton')
const xButton = document.getElementById('xButton')



moreButton.addEventListener('click', function(event){
mainImage.style.display = 'none';
morePage.style.display = 'block';
});
xButton.addEventListener('click', function(event){
mainImage.style.display = 'block';
morePage.style.display = 'none';
});


function login(){
    window.open('login.html', '팝업', 'width= 300, height= 300');

    }

function popup(){
    window.opener.openPage();
    window.close();
}
for(i=1; i<=12; i++){
    const popupDiv = document.getElementById(`popupDiv${i}`);
    const popupModal = document.getElementById(`animalImages${i}`);
    const popupImage = document.getElementById(`modalImages${i}`);
    const closeButton = document.getElementById(`closeButton${i}`);


    const openModal = popupModal.addEventListener('click', function(event){
    popupDiv.style.display = 'flex';
    popupImage.style.width = '470px';
    popupImage.style.height = '650px';
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = "20px";
    });


    const closeModal = closeButton.addEventListener('click', function(event){
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




