import configNavBar from "/js/nav.js"
import configModal from "/js/modal.js"
import configContactForm from "/js/mail.js"

document.addEventListener("DOMContentLoaded", (event) => {
    configNavBar();
    configModal();
    configContactForm();

    // Seleciona a opção padrão ao carregar
    const defaultPressOption = document.getElementById('redevida');
    if (defaultPressOption) {
        window.selectPressItem(defaultPressOption);
    }
})

window.selectPressItem = function(target) {
    document.querySelectorAll('.press_option_active').forEach(function(el) {
        el.classList.remove('press_option_active');
    });
    target.classList.add('press_option_active');
    
    const videoData = {
        redevida: {
            href: 'https://www.youtube.com/watch?v=redevida',
            src: './img/press/video.png',
        },
        tvriopreto: {
            href: 'https://www.youtube.com/watch?v=tvriopreto',
            src: './img/press/video2.png',
        },
        diarioregiao: {
            href: 'https://www.youtube.com/watch?v=diarioregiao',
            src: './img/press/diarioregiao.png',
        }
    };

    const id = target.id;
    const video = videoData[id];
    if (video) {
        const videoA = document.querySelector('.press_video a');
        const videoImg = document.querySelector('.press_video img');
        videoA.setAttribute('href', video.href);
        videoImg.setAttribute('src', video.src);
    }
}