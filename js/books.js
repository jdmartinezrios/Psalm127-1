function OnInit() {
    $('#nav1').removeClass('active');
    $('#nav2').addClass('active');
    $('#nav3').removeClass('active');
    $('[data-toggle="tooltip"]').tooltip();
    if (localStorage.getItem('language') === 'spanish') {
        $('[data-translate]').jqTranslate('../json/index', {
            defaultLang: 'en', forceLang: 'es',
            asyncLangLoad: false
        });
        document.getElementById('placeholder').placeholder = "Buscar";
    } else {
        $('[data-translate]').jqTranslate('../json/index', {
            defaultLang: 'es', forceLang: 'en',
            asyncLangLoad: false
        });
        document.getElementById('placeholder').placeholder = "Search";
    }
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

$('#reading').on('click', () => {
    $('#list-profile-list').click();
});

function getLanguage() {
    return localStorage.getItem('language');
}

function toggleMenu() {
    $('#collapseLinks').collapse('toggle');
}

function showPdf(index) {
    $('#collapseLinks').collapse('toggle');
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
    } 
    if (index == 2 && getLanguage() == 'english') {
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
    } 
    if (index == 3 && getLanguage() == 'english') {
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
    } 
    if (index == 4 && getLanguage() == 'english') {
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
    } 
    if (index == 5 && getLanguage() == 'english') {
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
    } 
    if (index == 6 && getLanguage() == 'english') {
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
    } 
    if (index == 7 && getLanguage() == 'english') {
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
    } else {
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
    } 
    if (index == 8 && getLanguage() == 'english') {
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
    } 
    if (index == 9 && getLanguage() == 'english') {
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

function closeAudio() {
    document.getElementById('audio').pause();
}

function listenContent(index) {
    $('.modal').modal('show');
    var audio = document.getElementById('audio');
    switch (index) {
        case 1: if (getLanguage() == 'english') {
            $('#audios').attr("src", "../assets/audios/book/English_Chapter_0_Introduction_1_12_19.mp3");
            audio.load();
        } else {
            $('#audios').attr("src", "../assets/audios/libro/Spanish_Chapter_0_Introduction_12_20_18.wav");
            audio.load();
        }
            break;
        case 2: if (getLanguage() == 'english') {
            $('#audios').attr("src", "../assets/audios/book/English_Chapter_1_11_17_17.mp3");
            audio.load();
        } else {
            $('#audios').attr("src", "../assets/audios/libro/Spanish_Chapter_1_12_20_18.wav");
            audio.load();
        }
            break;
        case 3: if (getLanguage() == 'english') {
            $('#audios').attr("src", "../assets/audios/book/English_Chapter_2_11_19_17.mp3");
            audio.load();
        } else {
            $('#audios').attr("src", "../assets/audios/libro/Spanish_Chapter_2_12_27_18.wav");
            audio.load();
        }
            break;
        case 4: if (getLanguage() == 'english') {
            $('#audios').attr("src", "../assets/audios/book/English_Chapter_3_12_1_17.mp3");
            audio.load();
        } else {
            $('#audios').attr("src", "../assets/audios/libro/Spanish_Chapter_3_12_27_18.wav");
            audio.load();
        }
            break;
        case 5: if (getLanguage() == 'english') {
            $('#audios').attr("src", "../assets/audios/book/English_Chapter_4_12_8_17.mp3");
            audio.load();
        } else {
            $('#audios').attr("src", "../assets/audios/libro/Spanish_Chapter_4_12_28_18.wav");
            audio.load();
        }
            break;
        case 6: if (getLanguage() == 'english') {
            $('#audios').attr("src", "../assets/audios/book/English_Chapter_5_12_9_17.mp3");
            audio.load();
        } else {
            $('#audios').attr("src", "../assets/audios/libro/Spanish_Chapter_5_12_28_18.wav");
            audio.load();
        }
            break;
        case 7: if (getLanguage() == 'english') {
            $('#audios').attr("src", "../assets/audios/book/English_Chapter_6_12_11_17.mp3");
            audio.load();
        } else {
            $('#audios').attr("src", "../assets/audios/libro/Spanish_Chapter_6_12_28_18.wav");
            audio.load();
        }
            break;
        case 8: if (getLanguage() == 'english') {
            $('#audios').attr("src", "../assets/audios/book/English_Chapter_7_12_14_17.mp3");
            audio.load();
        } else {
            $('#audios').attr("src", "../assets/audios/libro/Spanish_Chapter_7_12_29_18.wav");
            audio.load();
        }
            break;
        case 9: if (getLanguage() == 'english') {
            $('#audios').attr("src", "../assets/audios/book/English_Chapter_8_12_15_17.mp3");
            audio.load();
        } else {
            $('#audios').attr("src", "../assets/audios/libro/Spanish_Chapter_8_12_29_18.wav");
            audio.load();
        }
            break;
    }
}