const leftCannon = document.querySelector('.cannon-left');
const rightCannon = document.querySelector('.cannon-right');
const handleMovement = (e) => {
    const width = window.innerWidth
    const angle = e.screenX/width;
    rightCannon.style.transform=`rotateZ(${angle * 90}deg)`;
    leftCannon.style.transform=`rotateY(180deg) rotateZ(${(1-angle) * 90}deg)`;
}

document.addEventListener('mousemove', handleMovement)
document.addEventListener('touchmove', handleMovement)