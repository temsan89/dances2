import style from "../scss/main.scss"
import { instagramContent } from "./instagram_api.js"

document.addEventListener('DOMContentLoaded', function () {

    const buttons = [...document.querySelectorAll('.js_btn')];
    buttons.forEach(button => {

        let opened = false;
        const buttonOpenText = button.innerText;
        const buttonHideText = button.dataset.hideText;
        const container = document.getElementById(button.dataset.for);
        const wrapper = container.getElementsByClassName('trends__wrapper')[0];
        const text = container.getElementsByClassName('trends__text')[0];
        const initialHeight = wrapper.offsetHeight;


        button.addEventListener('click', function () {
            if(opened){
                wrapper.style.height = `${initialHeight}px`;
                button.innerText = buttonOpenText;
            } else {
                wrapper.style.height = `${text.offsetHeight}px`;
                button.innerText = buttonHideText;
            }
            opened = !opened;
        })



    });

    document.getElementById('up-button').addEventListener('click', scrollTop);
    function scrollTop() {
        window.scroll({
            behavior: 'smooth',
            top: 0
        });
    }

    let collapsibleElems = document.querySelectorAll('.collapsible');
    let collapsibleInstances = M.Collapsible.init(collapsibleElems);

    const links = [...document.querySelectorAll('.js_link')];

    links.forEach((link) => {
        const el = document.getElementById(link.attributes.href.value.substring(2));
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            scrollTo(el);
        });
    });

    function scrollTo(to) {
        if (isDomElement(to)) {
            to = to.getBoundingClientRect().y + window.scrollY;
        }

        window.scroll({
            behavior: 'smooth',
            top: to
        });
    }

    function isDomElement(obj) {
        return obj instanceof Element;
    }

    let materialboxedElems = document.querySelectorAll('.materialboxed');
    let materialboxedInstances = M.Materialbox.init(materialboxedElems);

    instagramContent();

    let sidenavElems = document.querySelectorAll('.sidenav');
    let sidenavInstances = M.Sidenav.init(sidenavElems);
});
