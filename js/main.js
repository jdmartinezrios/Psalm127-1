function OnInit() {   
    if (!localStorage.getItem('language')) { localStorage.setItem('language', 'english') }
    document.querySelector('video').playbackRate = 0.8;
    new WOW().init();   
    if (localStorage.getItem('language') === 'spanish') {
        $('[data-translate]').jqTranslate('json/index', {
            defaultLang: 'en', forceLang: 'es',
            asyncLangLoad: true
        });       
        document.getElementById('suggestions').placeholder = "Sugerencias";        
    } else {
        $('[data-translate]').jqTranslate('json/index', {
            defaultLang: 'es', forceLang: 'en',
            asyncLangLoad: true
        });              
        document.getElementById('suggestions').placeholder = "Suggestions";       
    } 
  
    $('#nav2').removeClass('active');
    $('#nav1').addClass('active');
    $('#nav3').removeClass('active');  

    setTimeout(() => {
        window.scrollTo(0, 0);
    },0);  

    //Send mail
    var form = $('#form-contact');

    $(form).submit(() => {
        event.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: './php/sendEmail.php',
            data: formData
        }).done(() => {
            if (returnLanguage() === 'english') {
                window.alert('Thanks for your contribution');
            } else {
                window.alert('Gracias por tu aporte');
            }
        }).fail(() => {
            if (returnLanguage() === 'english') {
                window.alert('Error when sending email');
            } else {
                window.alert('Error al enviar correo');
            }
        })
    })
}

function returnLanguage() {
    return localStorage.getItem('language');
}


$('#Spanish').on('click', function (event) {
    (() => {
        localStorage.setItem('language', 'spanish');
        $('[data-translate]').jqTranslate('json/index', {
            defaultLang: 'en', forceLang: 'es',
            asyncLangLoad: false
        });       
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
        document.getElementById('suggestions').placeholder = "Suggestions";
    })();
});

$('#know').on('click', () => {
    $('html,body').animate({scrollTop: 0}, 1800);
});

$('#welcome').on('click', () => {
    $('html,body').animate({scrollTop: 0}, 1800);
});

