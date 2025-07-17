import img0 from './items/a4c27gy504vd1.jpeg';
import img1 from './items/GktLAniXEAABV-O.jpg';
import img2 from './items/Resident Evil 7 biohazard.jpg';
import img3 from './items/resident-evil-7-biohazard-banned-footage-vol-1-88357 (1).jpg';
import img4 from './items/resident-evil-7-biohazard-banned-footage-vol-1-88357.jpg';
import img5 from './items/صور-منيو-19.png';

export let lol = (function(){
    let grid = document.createElement("div");
    
    let arrayOfImg = [];

    for(let i = 0; i < 6; i++){
        let img = document.createElement("img");
        arrayOfImg.push(img);
    }

    

     arrayOfImg[0].src = img0;
     arrayOfImg[1].src = img1;
     arrayOfImg[2].src = img2;
     arrayOfImg[3].src = img3;
     arrayOfImg[4].src = img4;
     arrayOfImg[5].src = img5;

    let divs = [];


    for(let j = 0; j<6;j++){
        let div = document.createElement("div");
        div.appendChild(arrayOfImg[j]);
        divs.push(div);
    }

   
    divs.forEach((div)=>{
        grid.appendChild(div);
    });

    grid.classList.add("grid");
    return grid;
})();