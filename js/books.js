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
    var pdfs = false; 
    if (index == 1) {
        $('#loader').show();
        var pdf = $('#pdfView');        
        var url = "../assets/PDF/Book/%231_20080822_Loving_God_The_First_and_Great_Commandment_TFC01.pdf";        
        var options = {
            height: '555px'     
        };                                                                 
        pdfs = PDFObject.embed(url, pdf, options);        
        (pdfs) ?  $('#loader').hide(1000) : $('#loader').show();
             
    } if (index == 2) {        
        $('#loader2').show();
        var pdf = $('#pdfView2');
        var url = "../assets/PDF/Book/%232%2020080829_Defining_Wholehearted_Love-Four_Spheres_and_Four_Stages_TFC02.pdf";        
        var options = {
            height: '555px'
        };
         pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader2').hide(1000) : $('#loader2').show();
    } if (index == 3) {        
        $('#loader3').show();
        var pdf = $('#pdfView3');
        var url = "../assets/PDF/Book/%233%2020080912_Defining_Wholehearted_Love_Four_Spheres_TFC03.pdf";
        options = {
            height: '555px'
        };
        pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader3').hide(1000) : $('#loader3').show();
    } if (index == 4) {        
        $('#loader4').show();
        var pdf = $('#pdfView4');
        var url = "../assets/PDF/Book/%234%2020080919_Loving_God_with_All_Our_Mind_TFC04.pdf";
        options = {
            height: '555px'
        };
        pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader4').hide(1000) : $('#loader4').show();
    } if (index == 5) {        
        $('#loader5').show();
        var pdf = $('#pdfView5');
        var url = "../assets/PDF/Book/%235%2020081010_The_Relationship_of_the_First_Commandment_to_the_Second_TFC05.pdf";
        options = {
            height: '555px'
        };
        pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader5').hide(1000) : $('#loader5').show();
    } if (index == 6) {        
        $('#loader6').show();
        var pdf = $('#pdfView6');
        var url = "../assets/PDF/Book/%236%2020081024_Loving_God_with_All_Our_Soul_TFC06.pdf";
        options = {
            height: '555px'
        };
        pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader6').hide(1000) : $('#loader6').show();
    } if (index == 7) {        
        $('#loader7').show();
        var pdf = $('#pdfView7');
        var url = "../assets/PDF/Book/%237%2020081107_Loving_God_with_All_Our_Strength_TFC07.pdf";
        options = {
            height: '555px'
        };
        pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader7').hide(1000) : $('#loader7').show();
    } if (index == 8) {        
        $('#loader8').show();
        var pdf = $('#pdfView8');
        var url = '../assets/PDF/Book/%238%2020081114_End_of_the_Age_Ministry_Paradigm_TFC08.pdf';
        options = {
            height: '555px'
        };
        pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader8').hide(1000) : $('#loader8').show();
    } if (index == 9) {        
        $('#loader9').show();
        var pdf = $('#pdfView9');
        var url = '../assets/PDF/Book/%239%2020081121_Practical_Ways_to_Pursue_the_First_Commandment_TFC09.pdf';
        options = {
            height: '555px'
        };
        pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader9').hide(1000) : $('#loader9').show();
    } if (index == 10) {        
        $('#loader10').show();
        var pdf = $('#pdfView10');
        var url = '../assets/PDF/Book/%2310%2020081128_Running_for_the_Prize_Being_Complete_in_Our_Love_TFC10.pdf';
        options = {
            height: '555px'
        };
        pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader10').hide(1000) : $('#loader10').show();
    } if (index == 11) {        
        $('#loader11').show();
        var pdf = $('#pdfView11');
        var url = '../assets/PDF/Book/%2311%2020081130_Loving_Jesus_without_Offense_TFC11.pdf';
        options = {
            height: '555px'
        };
        pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader11').hide(1000) : $('#loader11').show();
    } if (index == 12) {        
        $('#loader12').show();
        var pdf = $('#pdfView12');
        var url = '../assets/PDF/Book/%2312%2020081205_Cultivating_the_Oil_of_Intimacy_TFC12.pdf';
        options = {
            height: '555px'
        };
        pdfs = PDFObject.embed(url, pdf, options);
        (pdfs) ?  $('#loader12').hide(1000) : $('#loader12').show();
    }
}
