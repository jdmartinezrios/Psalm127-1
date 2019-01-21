function OnInit() {  
    document.querySelector('video').playbackRate = 0.8;
    new WOW().init();   
    if (localStorage.getItem('language') === 'spanish') {
        $('[data-translate]').jqTranslate('json/index', {
            defaultLang: 'en', forceLang: 'es',
            asyncLangLoad: false
        });
        document.getElementById('placeholder').placeholder = "Buscar";
        document.getElementById('suggestions').placeholder = "Sugerencias";
        intro = "Consideraciones fundamentales antes de ir, iniciar o enviar.";
    } else {
        $('[data-translate]').jqTranslate('json/index', {
            defaultLang: 'es', forceLang: 'en',
            asyncLangLoad: false
        });
        document.getElementById('placeholder').placeholder = "Search";
        document.getElementById('suggestions').placeholder = "Suggestions";
        intro = "Foundational Considerations Before Going, Starting or Sending.";
    } 
  
    $('#nav2').removeClass('active');
    $('#nav1').addClass('active');
    $('#nav3').removeClass('active');  

    setTimeout(() => {
        window.scrollTo(0, 0);
    },0);  
}


$('#Spanish').on('click', function (event) {
    (() => {
        localStorage.setItem('language', 'spanish');
        $('[data-translate]').jqTranslate('json/index', {
            defaultLang: 'en', forceLang: 'es',
            asyncLangLoad: false
        });
        document.getElementById('placeholder').placeholder = "Buscar";
        document.getElementById('suggestions').placeholder = "Sugerencias";
    })();
});

$('#English').on('click', function (event) {
    (() => {
        localStorage.setItem('language', 'english');
        $('[data-translate]').jqTranslate('json/index', {
            defaultLang: 'es', forceLang: 'en',
            asyncLangLoad: false
        });
        document.getElementById('placeholder').placeholder = "Search";
        document.getElementById('suggestions').placeholder = "Suggestions";
    })();
});

$('#know').on('click', () => {
    $('html,body').animate({scrollTop: 0}, 1800);
});

$('#welcome').on('click', () => {
    $('html,body').animate({scrollTop: 0}, 1800);
});

