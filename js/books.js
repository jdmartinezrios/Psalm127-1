function OnInit() {
    $('#nav1').removeClass('active');
    $('#nav2').addClass('active');
    $('#nav3').removeClass('active');
    $('[data-toggle="tooltip"]').tooltip()
    var intro;
    if (localStorage.getItem('language') === 'spanish') {
        $('[data-translate]').jqTranslate('../json/index', {
            defaultLang: 'en', forceLang: 'es',
            asyncLangLoad: false
        });
        document.getElementById('placeholder').placeholder = "Buscar";
        intro = "Consideraciones fundamentales antes de ir, iniciar o enviar.";
    } else {
        $('[data-translate]').jqTranslate('../json/index', {
            defaultLang: 'es', forceLang: 'en',
            asyncLangLoad: false
        });
        document.getElementById('placeholder').placeholder = "Search";
        intro = "Foundational Considerations Before Going, Starting or Sending.";
    }

    window.loading_screen = window.pleaseWait({
        logo: "https://dewey.tailorbrands.com/production/brand_version_mockup_image/969/1573016969_2f91ff63-3035-41da-a665-d1efd145bc1b.png?cb=1547190880",
        backgroundColor: 'rgb(128,0,0)',
        loadingHtml: `<div class='sk-folding-cube'><div class='sk-cube1 sk-cube'></div><div class='sk-cube2 sk-cube'></div><div class='sk-cube4 sk-cube'></div><div class='sk-cube3 sk-cube'></div></div><p class='loading-message' data-translate='intro'>${intro}</p>`
    });

    setTimeout(() => {
        window.loading_screen.finish();
    }, 4000);
}

$('#Spanish2').on('click', function (event) {
    (() => {
        localStorage.setItem('language', 'spanish');
        $('[data-translate]').jqTranslate('../json/index', {
            defaultLang: 'en', forceLang: 'es',
            asyncLangLoad: false
        });
        showPdf(parseInt(localStorage.getItem('index')));
        document.getElementById('placeholder').placeholder = "Buscar";
    })();
});

$('#English2').on('click', function (event) {
    (() => {
        localStorage.setItem('language', 'english');
        $('[data-translate]').jqTranslate('../json/index', {
            defaultLang: 'es', forceLang: 'en',
            asyncLangLoad: false
        });
        showPdf(parseInt(localStorage.getItem('index')));
        document.getElementById('placeholder').placeholder = "Search";
    })();
});

function getLanguage() {
    return localStorage.getItem('language');
}

function showPdf(index) {
    localStorage.setItem('index', index.toString());
    var pdf;
    var url;
    var options;
    if (index == 1 && getLanguage() == 'english') {
        $('#loader').show();
        pdf = $('#pdfView');
        url = "../assets/PDF/Book/English_Chapter_0_Introduction_1_12_19.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/English_Chapter_0_Introduction_1_12_19.pdf", () => {
            $('#loader').hide(1000);
        }).fail(() => {
            $('#loader').show();
        });

    } else {
        $('#loader').show();
        pdf = $('#pdfView');
        url = "../assets/PDF/Libro/Spanish_Chapter_0_Introduction_12_20_18.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Libro/Spanish_Chapter_0_Introduction_12_20_18.pdf", () => {
            $('#loader').hide(1000);
        }).fail(() => {
            $('#loader').show();
        });
    } if (index == 2 && getLanguage() == 'english') {
        $('#loader2').show();
        pdf = $('#pdfView2');
        url = "../assets/PDF/Book/English_Chapter_1_11_17_17.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/English_Chapter_1_11_17_17.pdf", () => {
            $('#loader2').hide(1000);
        }).fail(() => {
            $('#loader2').show();
        });
    } else {
        $('#loader2').show();
        pdf = $('#pdfView2');
        url = "../assets/PDF/Libro/Spanish_Chapter_1_12_20_18.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Libro/Spanish_Chapter_1_12_20_18.pdf", () => {
            $('#loader2').hide(1000);
        }).fail(() => {
            $('#loader2').show();
        });
    } if (index == 3 && getLanguage() == 'english') {
        $('#loader3').show();
        pdf = $('#pdfView3');
        url = "../assets/PDF/Book/English_Chapter_2_11_19_17.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/English_Chapter_2_11_19_17.pdf", () => {
            $('#loader3').hide(1000);
        }).fail(() => {
            $('#loader3').show();
        });
    } else {
        $('#loader3').show();
        pdf = $('#pdfView3');
        url = "../assets/PDF/Libro/Spanish_Chapter_2_12_27_18.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Libro/Spanish_Chapter_2_12_27_18.pdf", () => {
            $('#loader3').hide(1000);
        }).fail(() => {
            $('#loader3').show();
        });
    } if (index == 4 && getLanguage() == 'english') {
        $('#loader4').show();
        pdf = $('#pdfView4');
        url = "../assets/PDF/Book/English_Chapter_3_12_1_17.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/English_Chapter_3_12_1_17.pdf", () => {
            $('#loader4').hide(1000);
        }).fail(() => {
            $('#loader4').show();
        });
    } else {
        $('#loader4').show();
        pdf = $('#pdfView4');
        url = "../assets/PDF/Libro/Spanish_Chapter_3_12_27_18.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Libro/Spanish_Chapter_3_12_27_18.pdf", () => {
            $('#loader4').hide(1000);
        }).fail(() => {
            $('#loader4').show();
        });
    } if (index == 5 && getLanguage() == 'english') {
        $('#loader5').show();
        pdf = $('#pdfView5');
        url = "../assets/PDF/Book/English_Chapter_4_12_8_17.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/English_Chapter_4_12_8_17.pdf", () => {
            $('#loader5').hide(1000);
        }).fail(() => {
            $('#loader5').show();
        });
    } else {
        $('#loader5').show();
        pdf = $('#pdfView5');
        url = "../assets/PDF/Libro/Spanish_Chapter_4_12_28_18.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Libro/Spanish_Chapter_4_12_28_18.pdf", () => {
            $('#loader5').hide(1000);
        }).fail(() => {
            $('#loader5').show();
        });
    } if (index == 6 && getLanguage() == 'english') {
        $('#loader6').show();
        pdf = $('#pdfView6');
        url = "../assets/PDF/Book/English_Chapter_5_12_9_17.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/English_Chapter_5_12_9_17.pdf", () => {
            $('#loader6').hide(1000);
        }).fail(() => {
            $('#loader6').show();
        });
    } else {
        $('#loader6').show();
        pdf = $('#pdfView6');
        url = "../assets/PDF/Libro/Spanish_Chapter_5_12_28_18.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Libro/Spanish_Chapter_5_12_28_18.pdf", () => {
            $('#loader6').hide(1000);
        }).fail(() => {
            $('#loader6').show();
        });
    } if (index == 7 && getLanguage() == 'english') {
        $('#loader7').show();
        pdf = $('#pdfView7');
        url = "../assets/PDF/Book/English_Chapter_6_12_11_17.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/English_Chapter_6_12_11_17.pdf", () => {
            $('#loader7').hide(1000);
        }).fail(() => {
            $('#loader7').show();
        });
    }  else {
        $('#loader7').show();
        pdf = $('#pdfView7');
        url = "../assets/PDF/Libro/Spanish_Chapter_6_12_28_18.pdf";
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Libro/Spanish_Chapter_6_12_28_18.pdf", () => {
            $('#loader7').hide(1000);
        }).fail(() => {
            $('#loader7').show();
        });
    } if (index == 8 && getLanguage() == 'english') {
        $('#loader8').show();
        pdf = $('#pdfView8');
        url = '../assets/PDF/Book/English_Chapter_7_12_14_17.pdf';
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/English_Chapter_7_12_14_17.pdf", () => {
            $('#loader8').hide(1000);
        }).fail(() => {
            $('#loader8').show();
        });
    } else {
        $('#loader8').show();
        pdf = $('#pdfView8');
        url = '../assets/PDF/Libro/Spanish_Chapter_7_12_29_18.pdf';
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Libro/Spanish_Chapter_7_12_29_18.pdf", () => {
            $('#loader8').hide(1000);
        }).fail(() => {
            $('#loader8').show();
        });
    } if (index == 9 && getLanguage() == 'english') {
        $('#loader9').show();
        pdf = $('#pdfView9');
        url = '../assets/PDF/Book/English_Chapter_8_12_15_17.pdf';
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/English_Chapter_8_12_15_17.pdf", () => {
            $('#loader9').hide(1000);
        }).fail(() => {
            $('#loader9').show();
        });
    } else {
        $('#loader9').show();
        pdf = $('#pdfView9');
        url = '../assets/PDF/Libro/Spanish_Chapter_8_12_29_18.pdf';
        options = {
            height: 'calc(100vh - 200px)'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Libro/Spanish_Chapter_8_12_29_18.pdf", () => {
            $('#loader9').hide(1000);
        }).fail(() => {
            $('#loader9').show();
        });
    }
}

function listenContent(index) {
    $('.modal').modal('show');
}