const section = document.querySelectorAll(".section");
const scrolledTopLength = window.pageYOffset; // 스크롤된 길이
const pick = document.querySelectorAll(".pick");

let conArray = [];

section.forEach(e => {
    winHeight = scrolledTopLength + e.getBoundingClientRect().top;
    conArray.push(winHeight);
});

pick.forEach((e, a) => {
    if(window.scrollY < conArray[1]) {
        if(a === 0) {
            e.classList.add('active');
        } else {
            e.classList.remove('active');
        }
    } else if (window.scrollY < conArray[2]) {
        if(a === 1) {
            e.classList.add('active');
        } else {
            e.classList.remove('active');
        }
    } else if (window.scrollY < conArray[3]) {
        if(a === 2) {
            e.classList.add('active');
        } else {
            e.classList.remove('active');
        }
    } else {
        if(a === 3) {
            e.classList.add('active');
        } else {
            e.classList.remove('active');
        }
    }
});

window.addEventListener('scroll', (e) => {
    const winY = window.scrollY; 

    if(winY < conArray[1]) {
        const sec1 = document.querySelector("#sec1");
        let secOpacity = 1- winY/400;
        sec1.style.opacity = secOpacity;
        
        pick.forEach((e, a) => {
            if(a === 0) {
                e.classList.add('active');
            } else {
                e.classList.remove('active');
            }
        });
    } else if (winY < conArray[2]) {
        const sec2 = document.querySelector("#sec2");
        const set2Y = winY - conArray[1];
        let secOpacity = 1- set2Y/400;
        sec2.style.opacity = secOpacity;

        pick.forEach((e, a) => {
            if(a === 1) {
                e.classList.add('active');
            } else {
                e.classList.remove('active');
            }
        });
    } else if (winY < conArray[3]) {
        const sec3 = document.querySelector("#sec3");
        const set3Y = winY - conArray[2];
        let secOpacity = 1- set3Y/400;
        sec3.style.opacity = secOpacity;

        pick.forEach((e, a) => {
            if(a === 2) {
                e.classList.add('active');
            } else {
                e.classList.remove('active');
            }
        });
    } else {
        pick.forEach((e, a) => {
            if(a === 3) {
                e.classList.add('active');
            } else {
                e.classList.remove('active');
            }
        });
    }
})