const offa = document.querySelector('.manage--admin')
function showMessage(){
    alert('Sự kiện click xảy ra!');
    // offa.classList.add('open')
}
const but = document.querySelectorAll('.button-header')
for (const b of but){
    b.addEventListener('click',showMessage);
}