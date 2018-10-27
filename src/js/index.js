import style from "../scss/main.scss"

const arr = [1, 2, 3];

document.addEventListener('DOMContentLoaded', function () {

    // document.getElementById('up-button').addEventListener('click', scrollTop);
    //
    // function scrollTop() {
    //     window.scroll({
    //         behavior: 'smooth',
    //         top: 0
    //     });
    // }

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
});
