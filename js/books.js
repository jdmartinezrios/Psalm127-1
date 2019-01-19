function OnInit() {
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
        document.getElementById('placeholder').placeholder = "Search";
    })();
});

function showPdf(index) {
    var pdf;
    var url;
    var options;
    if (index == 1) {
        $('#loader').show();
        pdf = $('#pdfView');
        url = "../assets/PDF/Book/%231_20080822_Loving_God_The_First_and_Great_Commandment_TFC01.pdf";
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%231_20080822_Loving_God_The_First_and_Great_Commandment_TFC01.pdf", () => {
            $('#loader').hide(1000);
        }).fail(() => {
            $('#loader').show();
        });

    } if (index == 2) {
        $('#loader2').show();
        pdf = $('#pdfView2');
        url = "../assets/PDF/Book/%232%2020080829_Defining_Wholehearted_Love-Four_Spheres_and_Four_Stages_TFC02.pdf";
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%232%2020080829_Defining_Wholehearted_Love-Four_Spheres_and_Four_Stages_TFC02.pdf", () => {
            $('#loader2').hide(1000);
        }).fail(() => {
            $('#loader2').show();
        });
    } if (index == 3) {
        $('#loader3').show();
        pdf = $('#pdfView3');
        url = "../assets/PDF/Book/%233%2020080912_Defining_Wholehearted_Love_Four_Spheres_TFC03.pdf";
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%233%2020080912_Defining_Wholehearted_Love_Four_Spheres_TFC03.pdf", () => {
            $('#loader3').hide(1000);
        }).fail(() => {
            $('#loader3').show();
        });
    } if (index == 4) {
        $('#loader4').show();
        pdf = $('#pdfView4');
        url = "../assets/PDF/Book/%234%2020080919_Loving_God_with_All_Our_Mind_TFC04.pdf";
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%234%2020080919_Loving_God_with_All_Our_Mind_TFC04.pdf", () => {
            $('#loader4').hide(1000);
        }).fail(() => {
            $('#loader4').show();
        });
    } if (index == 5) {
        $('#loader5').show();
        pdf = $('#pdfView5');
        url = "../assets/PDF/Book/%235%2020081010_The_Relationship_of_the_First_Commandment_to_the_Second_TFC05.pdf";
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%235%2020081010_The_Relationship_of_the_First_Commandment_to_the_Second_TFC05.pdf", () => {
            $('#loader5').hide(1000);
        }).fail(() => {
            $('#loader5').show();
        });
    } if (index == 6) {
        $('#loader6').show();
        pdf = $('#pdfView6');
        url = "../assets/PDF/Book/%236%2020081024_Loving_God_with_All_Our_Soul_TFC06.pdf";
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%236%2020081024_Loving_God_with_All_Our_Soul_TFC06.pdf", () => {
            $('#loader6').hide(1000);
        }).fail(() => {
            $('#loader6').show();
        });
    } if (index == 7) {
        $('#loader7').show();
        pdf = $('#pdfView7');
        url = "../assets/PDF/Book/%237%2020081107_Loving_God_with_All_Our_Strength_TFC07.pdf";
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%237%2020081107_Loving_God_with_All_Our_Strength_TFC07.pdf", () => {
            $('#loader7').hide(1000);
        }).fail(() => {
            $('#loader7').show();
        });
    } if (index == 8) {
        $('#loader8').show();
        pdf = $('#pdfView8');
        url = '../assets/PDF/Book/%238%2020081114_End_of_the_Age_Ministry_Paradigm_TFC08.pdf';
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%238%2020081114_End_of_the_Age_Ministry_Paradigm_TFC08.pdf", () => {
            $('#loader8').hide(1000);
        }).fail(() => {
            $('#loader8').show();
        });
    } if (index == 9) {
        $('#loader9').show();
        pdf = $('#pdfView9');
        url = '../assets/PDF/Book/%239%2020081121_Practical_Ways_to_Pursue_the_First_Commandment_TFC09.pdf';
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%239%2020081121_Practical_Ways_to_Pursue_the_First_Commandment_TFC09.pdf", () => {
            $('#loader9').hide(1000);
        }).fail(() => {
            $('#loader9').show();
        });
    } if (index == 10) {
        $('#loader10').show();
        pdf = $('#pdfView10');
        url = '../assets/PDF/Book/%2310%2020081128_Running_for_the_Prize_Being_Complete_in_Our_Love_TFC10.pdf';
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%2310%2020081128_Running_for_the_Prize_Being_Complete_in_Our_Love_TFC10.pdf", () => {
            $('#loader10').hide(1000);
        }).fail(() => {
            $('#loader10').show();
        });
    } if (index == 11) {
        $('#loader11').show();
        pdf = $('#pdfView11');
        url = '../assets/PDF/Book/%2311%2020081130_Loving_Jesus_without_Offense_TFC11.pdf';
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%2311%2020081130_Loving_Jesus_without_Offense_TFC11.pdf", () => {
            $('#loader11').hide(1000);
        }).fail(() => {
            $('#loader11').show();
        });
    } if (index == 12) {
        $('#loader12').show();
        pdf = $('#pdfView12');
        url = '../assets/PDF/Book/%2312%2020081205_Cultivating_the_Oil_of_Intimacy_TFC12.pdf';
        options = {
            height: '555px'
        };
        PDFObject.embed(url, pdf, options);
        jqxhr = $.get("../assets/PDF/Book/%2312%2020081205_Cultivating_the_Oil_of_Intimacy_TFC12.pdf", () => {
            $('#loader12').hide(1000);
        }).fail(() => {
            $('#loader12').show();
        });
    }
}
