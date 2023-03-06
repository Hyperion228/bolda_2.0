const q = document.getElementById('slider-line');

let offset = 0;
document.getElementById('back').onclick = () => {
    if (offset < 3150) {
        offset += 350;
        q.style.right = offset +'px';
    } 
    if (offset == 2800){
        offset = 0;
    }
}

document.getElementById('next').onclick = () => {
    q.style.right = offset +'px';

    if (offset > -350) {
        offset -= 350;
        q.style.right = offset +'px';
    }
    if (offset == -350){
        offset = 2800;
    }
}