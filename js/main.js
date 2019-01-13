var intro;
if (localStorage.getItem('language') === 'spanish') {
    $('[data-translate]').jqTranslate('json/index', {
        defaultLang: 'en', forceLang: 'es',
        asyncLangLoad: false       
    });
    document.getElementById('placeholder').placeholder = "Buscar";
    intro = "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí. | Juan 14: 6";
} else {
    $('[data-translate]').jqTranslate('json/index', {
        defaultLang: 'es', forceLang: 'en',
        asyncLangLoad: false
    });
    document.getElementById('placeholder').placeholder = "Search";
    intro = "Jesus said to him: I am the way, and the truth, and the life; no one comes to the Father, but by me. | John 14:6";
}

window.loading_screen = window.pleaseWait({
    logo: "https://dewey.tailorbrands.com/production/brand_version_mockup_image/969/1573016969_2f91ff63-3035-41da-a665-d1efd145bc1b.png?cb=1547190880",
    backgroundColor: 'rgb(128,0,0)',
    loadingHtml: `<div class='sk-folding-cube'><div class='sk-cube1 sk-cube'></div><div class='sk-cube2 sk-cube'></div><div class='sk-cube4 sk-cube'></div><div class='sk-cube3 sk-cube'></div></div><p class='loading-message' data-translate='intro'>${intro}</p>`
});

var spanish = $('#Spanish').on('click', function (event) {
    (() => {
        localStorage.setItem('language', 'spanish');
        $('[data-translate]').jqTranslate('json/index', {
            defaultLang: 'en', forceLang: 'es',
            asyncLangLoad: false
        });
        document.getElementById('placeholder').placeholder = "Buscar";
    })();
});

var english = $('#English').on('click', function (event) {
    (() => {
        localStorage.setItem('language', 'english');
        $('[data-translate]').jqTranslate('json/index', {
            defaultLang: 'es', forceLang: 'en',
            asyncLangLoad: false
        });
        document.getElementById('placeholder').placeholder = "Search";
    })();
});

setTimeout(() => {
    spanish;
    english;
    window.loading_screen.finish();
}, 4000);