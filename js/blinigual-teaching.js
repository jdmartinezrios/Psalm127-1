function OnInit() {
    localStorage.clear();
    $("#exampleModalCenter").draggable();
    $("#exampleModalCenter2").draggable();
    if (!localStorage.getItem('language')) { localStorage.setItem('language', 'english') }
    $('#nav1').removeClass('active');
    $('#nav3').removeClass('active');
    $('#nav2').removeClass('active');
    $('.loader').hide();
    $('#listen').hide();
    $('#listen2').hide();
    $('#listen3').hide();
    $('.pdfobject-container').addClass('animated fadeIn');
    $('[data-toggle="tooltip"]').tooltip();
    if (localStorage.getItem('language') === 'spanish') {
        $('[data-translate]').jqTranslate('../json/index', {
            defaultLang: 'en', forceLang: 'es',
            asyncLangLoad: true
        });
        $('#preaching').hide();
        $('#preaching2').hide();
        $('#preaching3').hide();
        $('#preaching4').hide();
        $('#preaching5').hide();
        $('#preaching6').hide();
    } else {
        $('[data-translate]').jqTranslate('../json/index', {
            defaultLang: 'es', forceLang: 'en',
            asyncLangLoad: true
        });
        $('#preaching').hide();
        $('#preaching2').hide();
        $('#preaching3').hide();
        $('#preaching4').hide();
        $('#preaching5').hide();
        $('#preaching6').hide();
    }
}

$('#Spanish3').on('click', function (event) {
    (() => {
        localStorage.setItem('language', 'spanish');
        $('[data-translate]').jqTranslate('../json/index', {
            defaultLang: 'en', forceLang: 'es',
            asyncLangLoad: false
        });
        // if (localStorage.getItem('index') && JSON.parse(localStorage.getItem('changeContent'))) { showPdf(parseInt(localStorage.getItem('index'))); }
        $('#preaching').hide();
        $('#preaching2').hide();
        $('#preaching3').hide();
        $('#preaching4').hide();
        $('#preaching5').hide();
        $('#preaching6').hide();
    })();
});

$('#English3').on('click', function (event) {
    (() => {
        localStorage.setItem('language', 'english');
        $('[data-translate]').jqTranslate('../json/index', {
            defaultLang: 'es', forceLang: 'en',
            asyncLangLoad: false
        });
        // if (localStorage.getItem('index') && JSON.parse(localStorage.getItem('changeContent'))) { showPdf(parseInt(localStorage.getItem('index'))); }
        $('#preaching').hide();
        $('#preaching2').hide();
        $('#preaching3').hide();
        $('#preaching4').hide();
        $('#preaching5').hide();
        $('#preaching6').hide();
    })();
});

$('#reading').on('click', () => {
    $('#list-profile-list').click();
});


function showContent() {
    $('.content-lessons').show().addClass('animated fadeIn');
    $('.pdfs').hide();
    $('#listen').hide();
    $('#listen2').hide();
    $('#listen3').hide();
    $('#collapseLinks').collapse('toggle');
    localStorage.setItem('changeContent', 'false');
}

function getLanguage() {
    return localStorage.getItem('language');
}

function assingFileSelector(selector, indexId, idPdf, file) {
    $(selector).show();
    embedPdf($(indexId), file, { id: idPdf, height: 'calc(100vh - 210px)' });
    getTimeFile(file, selector);
    localStorage.setItem('changeContent', 'true');
}

function embedPdf(pdf, url, options) {
    PDFObject.embed(url, pdf, options);
}

function getTimeFile(file, selector) {
    jqxhr = $.get(file, () => {
        $(selector).hide(1000);
    }).fail(() => {
        $(selector).show();
    });
}

function showPdf(index) {
    assingIndexListen(index);
    $('#listen').show();
    $('#listen2').show();
    $('#listen3').show();
    $('.content-lessons').hide().removeClass('animated fadeIn');
    $('.pdfs').show('slow');
    localStorage.setItem('index', index.toString());
    switch (index) {
        case 1: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView', "../assets/PDF/First_and_Great_Commandment/1_20080822_Loving_God_The_First_and_Great_Commandment_TFC01.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_1_20080822_Loving_God_The_First_and_Great_Commandment_TFC01.pdf");
        }
            break;
        case 2: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView2', "../assets/PDF/First_and_Great_Commandment/2_20080829_Defining_Wholehearted_Love-Four_Spheres_and_Four_Stages_TFC02.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView2', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_2_20080829_Defining_Wholehearted_Love-Four_Spheres_and_Four_Stages_TFC02.pdf");
        }
            break;
        case 3: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView3', "../assets/PDF/First_and_Great_Commandment/3_20080912_Defining_Wholehearted_Love_Four_Spheres_TFC03.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView3', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_3_20080912_Defining_Wholehearted_Love_Four_Spheres_TFC03.pdf");
        }
            break;
        case 4: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView4', "../assets/PDF/First_and_Great_Commandment/4_20080919_Loving_God_with_All_Our_Mind_TFC04.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView4', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_4_20080919_Loving_God_with_All_Our_Mind_TFC04.pdf");
        }
            break;
        case 5: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView5', "../assets/PDF/First_and_Great_Commandment/5_20081010_The_Relationship_of_the_First_Commandment_to_the_Second_TFC05.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView5', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_5_20081010_The_Relationship_of_the_First_Commandment_to_the_Second_TFC05.pdf");
        }
            break;
        case 6: if (getLanguage() == 'english') {
            $('#preaching4').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView6', "../assets/PDF/First_and_Great_Commandment/6_20081024_Loving_God_with_All_Our_Soul_TFC06.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView6', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_6_20081024_Loving_God_with_All_Our_Soul_TFC06.pdf");
        }
            $('#preaching').hide();
            $('#preaching6').hide();
            break;
        case 7: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView7', "../assets/PDF/First_and_Great_Commandment/7_20081107_Loving_God_with_All_Our_Strength_TFC07.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView7', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_7_20081107_Loving_God_with_All_Our_Strength_TFC07.pdf");
        }
            break;
        case 8: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView8', "../assets/PDF/First_and_Great_Commandment/8_20081114_End_of_the_Age_Ministry_Paradigm_TFC08.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView8', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_8_20081114_End_of_the_Age_Ministry_Paradigm_TFC08.pdf");
        }
            break;
        case 9: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView9', "../assets/PDF/First_and_Great_Commandment/9_20081121_Practical_Ways_to_Pursue_the_First_Commandment_TFC09.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView9', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_9_20081121_Practical_Ways_to_Pursue_the_First_Commandment_TFC09.pdf");
        }
            break;
        case 10: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView10', "../assets/PDF/First_and_Great_Commandment/10_20081128_Running_for_the_Prize_Being_Complete_in_Our_Love_TFC10.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView10', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_10_20081128_Running_for_the_Prize_Being_Complete_in_Our_Love_TFC10.pdf");
        }
            break;
        case 11: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView11', "../assets/PDF/First_and_Great_Commandment/11_20081130_Loving_Jesus_without_Offense_TFC11.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView11', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_11_20081130_Loving_Jesus_without_Offense_TFC11.pdf");
        }
            break;
        case 12: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching').show();
            $('#preaching6').show();
            assingFileSelector('#loader', '#pdfView', 'pdfView12', "../assets/PDF/First_and_Great_Commandment/12_20081205_Cultivating_the_Oil_of_Intimacy_TFC12.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView12', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_12_20081205_Cultivating_the_Oil_of_Intimacy_TFC12.pdf");
        }
            break;
            // NEW CONTENT FOR BILINGUAL TEACHING (SERMON OF THE MOUNT).
        case 13: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            $('#preaching6').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView13', "../assets/PDF/Bilingual_Teaching/Orientation_Students.pdf");
            break;
        case 14: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView14', "../assets/PDF/Bilingual_Teaching/1_Both_20120204_Pursuing_a_Kingdom_Lifestyle_SOM1.pdf");
            $('#preaching6').hide();
            break;
        case 15: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView15', "../assets/PDF/Bilingual_Teaching/2_Both_20120211_Overview_of_the_Sermon_on_the_Mount_SOM02.pdf");
            $('#preaching6').hide();
            break;
        case 16:
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView16', "../assets/PDF/Bilingual_Teaching/3_Both_20120219_Poverty_of_Spirit-Foundational_Beaititude_SOM03.pdf");
            $('#preaching6').hide();
            break;
        case 17:
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView17', "../assets/PDF/Bilingual_Teaching/4_Both_20120311_Mourning_Meekness_and_Spiritual_Hunger_SOM04.pdf");
            $('#preaching6').hide();
            break;
        case 18: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView18', "../assets/PDF/Bilingual_Teaching/5_Both_20120325_Mercy_Purity_Peacemaking_and_Persecution_SOM05.pdf");
            $('#preaching6').hide();
            break;
        case 19: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView19', "../assets/PDF/Bilingual_Teaching/6_Both_20120401_Kingdom_Impact_Being_Salt_and_Light_SOM06.pdf");
            $('#preaching6').hide();
            break;
        case 20:
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView20', "../assets/PDF/Bilingual_Teaching/7_Both_20120415_Overcoming_the_Spirit_of_Anger_SOM07.pdf");
            $('#preaching6').hide();
            break;
        case 21:
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView21', "../assets/PDF/Bilingual_Teaching/8_Both_20120527_Overcoming_the_Spirit_of_Immorality_SOM08.pdf");
            $('#preaching6').hide();
            break;
        case 22: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView22', "../assets/PDF/Bilingual_Teaching/9_Both_20120603_Honoring_Marriage_and_Our_Commitments_SOM09.pdf");
            $('#preaching6').hide();
            break;
        case 23: 
            $('#preaching4').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView23', "../assets/PDF/Bilingual_Teaching/10_Both_20120610_Refusing_Retaliation_and_Defensiveness_SOM10.pdf");
            $('#preaching').hide();
            $('#preaching6').hide();
            break;
        case 24: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView24', "../assets/PDF/Bilingual_Teaching/11_Both_20120701_Replacing_Passive_Love_with_Active_Love_SOM11.pdf");
            $('#preaching6').hide();
            break;
        case 25: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView25', "../assets/PDF/Bilingual_Teaching/12_Both_20120930_Called_to_Serve_ Give_Pray_Fast_and_Bless_SOM12.pdf");
            $('#preaching6').hide();
            break;
        case 26: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView26', "../assets/PDF/Bilingual_Teaching/13_Both_20121014_Being_Taught_to_Pray_by_Jesus.pdf");
            $('#preaching6').hide();
            break;
        case 27:
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView27', "../assets/PDF/Bilingual_Teaching/14_Both_20121021_Receiving_the_Fathers_Reward_Financially.pdf");
            $('#preaching6').hide();
            break;
        case 28: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView28', "../assets/PDF/Bilingual_Teaching/15_Both_20121104_Relationships_Forgive_Bless_and_More_SOM15.pdf");
            $('#preaching6').hide();
            break;
        case 29: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView29', "../assets/PDF/Bilingual_Teaching/16_Both_20121125_Loving_Jesus_in_Our_Use_of_Money_SOM16.pdf");
            $('#preaching6').hide();
            break;
        case 30: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView30', "../assets/PDF/Bilingual_Teaching/17_Both_20121207_Overcoming_Anxiety_and_Fear_SOM17.pdf");
            $('#preaching6').hide();
            break;
        case 31: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView31', "../assets/PDF/Bilingual_Teaching/18_Both_20121209_To_Judge_or_Not_to_Judge_SOM18.pdf");
            $('#preaching6').hide();
            break;
        case 32: 
            $('#preaching4').hide();
            $('#preaching2').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView32', "../assets/PDF/Bilingual_Teaching/19_Both_20121214_Seeking_Gods_Help_with_Perseverance_SOM19.pdf");
            $('#preaching6').hide();
            break;
        case 33: 
            $('#preaching4').hide();
            $('#preaching3').hide();
            assingFileSelector('#loader2', '#pdfView2', 'pdfView33', "../assets/PDF/Bilingual_Teaching/20_Both_20121216_Being_Wise_and_Great_in_Gods_Eyes_SOM20.pdf");
            $('#preaching6').hide();
            break;
            // END NEW CONTENT BILINGUAL TEACHING.
        case 34: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching3').show();
            assingFileSelector('#loader3', '#pdfView3', 'pdfView34', "../assets/PDF/Revelations/2_20140214_The_Varying _Importance_of_End_Time_Doctrines_BOR02_1.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView34', "../assets/PDF/Apocalipsis/Spanish_2_20140214_The_Varying _Importance_of_End_Time_Doctrines_BOR02_1.pdf");
        }
            $('#preaching6').hide();
            break;
        case 35: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching3').show();
            assingFileSelector('#loader3', '#pdfView3', 'pdfView35', "../assets/PDF/Revelations/3_BOR_03_The_Theme_of_the_book_of_Revelation.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView35', "../assets/PDF/Apocalipsis/Spanish_3_BOR_03_The_Theme_of_the_book_of_Revelation.pdf");
        }
            $('#preaching6').hide();
            break;
        case 36: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching3').show();
            assingFileSelector('#loader3', '#pdfView3', 'pdfView36', "../assets/PDF/Revelations/4_BOR_04_The_Seven_Churches_Called_to_Overcome_Rev_ 2_3.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView36', "../assets/PDF/Apocalipsis/Spanish_4_BOR_04_The_Seven_Churches_Called_to_Overcome_Rev_2_3.pdf");
        }
            $('#preaching6').hide();
            break;
        case 37: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching3').show();
            assingFileSelector('#loader3', '#pdfView3', 'pdfView37', "../assets/PDF/Revelations/5_BOR_05_Father_s_Throne_and_Jesus_Exaltation.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView37', "../assets/PDF/Apocalipsis/Spanish_5_BOR_05__Father_s_Throne_and_Jesus_Exaltation_Rev_4_5_with_blanks.pdf");
        }
            $('#preaching6').hide();
            break;
        case 38: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching3').show();
            assingFileSelector('#loader3', '#pdfView3', 'pdfView38', "../assets/PDF/Revelations/6_BOR_06_Seals_of_Judgment_and_Gods_Protection_Rev_6_7_3.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView38', "../assets/PDF/Apocalipsis/Spanish_6_BOR_06__Seals_of_Judgment_and_God_s_Protection_Rev_6_7_with_blanks.pdf");
        }
            $('#preaching6').hide();
            break;
        case 39: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching3').show();
            assingFileSelector('#loader3', '#pdfView3', 'pdfView39', "../assets/PDF/Revelations/7_BOR_07_The_Trumpets_Judgments_Rev_8_9_1.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView39', "../assets/PDF/Apocalipsis/Spanish_7_BOR_07_The_Trumpet_Judgments_Rev_8_9_with_blanks.pdf");
        }
            $('#preaching6').hide();
            break;
        case 40: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching3').show();
            assingFileSelector('#loader3', '#pdfView3', 'pdfView40', "../assets/PDF/Revelations/8_BOR_08_Prophetic_Ministry_in_End_Times_Rev_10_11.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView40', "../assets/PDF/Apocalipsis/Spanish_8_BOR_08_Prophetic_Ministry_in_End_Times_Rev_10_11_with_blanks.pdf");
        }
            $('#preaching6').hide();
            break;
        case 41: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching3').show();
            assingFileSelector('#loader3', '#pdfView3', 'pdfView41', "../assets/PDF/Revelations/9_BOR_09_2nd_Coming_Rapture_and_War_in_the_Spirit.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView41', "../assets/PDF/Apocalipsis/Spanish_9_BOR_09_2nd_Coming_Rapture_and_War_in_the_Spirit_Rev_11_14_without_blanks.pdf");
        }
            $('#preaching6').hide();
            break;
        case 42: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching3').show();
            assingFileSelector('#loader3', '#pdfView3', 'pdfView42', "../assets/PDF/Revelations/10_20140426_Seven_Bowls_of_Wrath_Rev15_16_SOS10.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView42', "../assets/PDF/Apocalipsis/Spanish_10_20140426_Seven_Bowls_of_Wrath_Rev15_16_SOS10.pdf");
        }
            $('#preaching6').hide();
            break;
        case 43: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView43', "../assets/PDF/Revelations/11_BOR_11_Fall_of_Babylon.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView43', "../assets/PDF/Apocalipsis/Spanish_11_BOR_11_Fall_of_Babylon_Rev_17_18.pdf");
        }
            $('#preaching6').hide();
            $('#preaching3').hide();
            $('#preaching4').hide();
            break;
        case 44: if (getLanguage() == 'english') {
            $('#preaching4').show();
            $('#preaching3').show();
            assingFileSelector('#loader3', '#pdfView3', 'pdfView44', "../assets/PDF/Revelations/12_BOR_12_Victory_and_Restoration_of_All_Things.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView44', "../assets/PDF/Apocalipsis/Spanish_12_BOR_12_Victory_and_the_Restoration_of_All_Things_Rev19_22.pdf");
        }
            $('#preaching6').hide();
            break;
    }
}

function closeAudio() {
    // document.getElementById('audio').pause();
    $("#exampleModalCenter").position({
        of: $(this),
        my: 'center',
        at: 'center'
    });
}

function closeAudio2() {
    document.getElementById('audio2').pause();
    $("#exampleModalCenter2").position({
        of: $(this),
        my: 'center',
        at: 'center'
    });
}

function closeVideo() {
    document.getElementById('video').pause();
    $("#exampleModalCenter3").position({
        of: $(this),
        my: 'center',
        at: 'center'
    });
    setUrlView("");
}

function returnIndexListen() {
    return parseInt(localStorage.getItem('indexListen'));
}

function listenContent(typeListen) {
    if (typeListen === 'notes') {
        $('#exampleModalCenter').modal('show');
        var audio = document.getElementById('audio');
        switch (returnIndexListen()) {
            case 1: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_1_Loving_God_The_First_and_Great_Commandment.mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_1_Amar_a_Dios_El_Primero_y_Grande_Mandamiento.mp3");
                audio.load();
            }
                break;
            case 2: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_2_Defining_Wholehearted_Love_Four_Spheres_and_Four_Stages.mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_2_Definición_de_Amor_Con_Todo_el_Corazón_Cuatro_Esferas_y_Cuatro_Etapas.mp3");
                audio.load();
            }
                break;
            case 3: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_3_Defining_Wholehearted_Love_Four_Spheres.mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_3_Definiendo_el_Amor_De_Todo_Corazón_Cuatro_Esferas.mp3");
                audio.load();
            }
                break;
            case 4: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_4_Loving_God_with_All_Our_Mind.mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_4_Amar_a_Dios_con_Toda_Nuestra_Mente.mp3");
                audio.load();
            }
                break;
            case 5: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_5_The_Relationship_of_the_First_Commandment_to_the_Second.mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_5_La_Relación_del_Primer_Mandamiento_con_la_Segunda.mp3");
                audio.load();
            }
                break;
            case 6: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_6_Loving_God_with_All_Our_Soul_(Philippians_2_3_to_16).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_6_Amar_a_Dios_con_Toda_Nuestra_Alma_(Filipenses_2_3_a_16).mp3");
                audio.load();
            }
                break;
            case 7: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_7_Loving_God_with_All_Our_Strength_(Matthew_6_1_to_23).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_7_Amar_a_Dios_con_Toda_Nuestra_Fuerza_(Mateo_6_1_a_23).mp3");
                audio.load();
            }
                break;
            case 8: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_8_First_Commandment_End_to_of_to_the_to_Age_Ministry_Paradigm.mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_8_Primero_Mandamiento_Paradigma_del_Ministerio_de_Fin_del_Era.mp3");
                audio.load();
            }
                break;
            case 9: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_9_Practical_Ways_to_Pursue_the_First_Commandment_(Matthew_25).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_9_Formas_Prácticas_de_Perseguir_el_Primero_Mandamiento_(Mateo_25).mp3");
                audio.load();
            }
                break;
            case 10: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_10_Running_for_the_Prize_Being_Complete_in_Our_Love.mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_10_Corriendo_para_el_Premio_Ser_Completo_en_Nuestro_Amor.mp3");
                audio.load();
            }
                break;
            case 11: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_11_Loving_Jesus_without_Offense_(Matthew_11_6).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_11_Amar_a_Jesús_Sin_Ser_Ofendido_(Mateo_11_6).mp3");
                audio.load();
            }
                break;
            case 12: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/First_Commandment/Session_12_Cultivating_the_Oil_of_Intimacy_(Matthew_25_1_to_13).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Primer_Y_Gran_Mandamiento/Sesión_12_Cultivando_el_Aceite_de_la_Intimidad_(Mateo_25_1_a_13).mp3");
                audio.load();
            }
                break;
                // LISTEN NEW CONTENT BILINGUAL TEACHING
            case 13: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_01_Pursuing_a_Kingdom_Lifestyle_(Matthew_5_to_7).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_1_Persiguiendo_un_Estilo_de_Vida_del_Reino_(Mateo_5_a_7).mp3");
            //     audio.load();
            // }
                break;
            case 14: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_02_Overview_of_the_Sermon_on_the_Mount_(Matthew_5_to_7).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_02_Resumen_del_Sermón_del_Monte_(Mateo_5_a_7).mp3");
            //     audio.load();
            // }
                break;
            case 15: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_03_Poverty_of_Spirit_The_Foundational_Beatitude_(Matthew_5_3).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_03_La_Pobreza_de_Espíritu_La_Bienaventuranza_Fundamental_(Mateo_5_3).mp3");
            //     audio.load();
            // }
                break;
            case 16: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_04_Mourning,_Meekness,_and_Spiritual_Hunger_(Matthew_5_4_to_6).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_04_Luto,_Mansedumbre_y_Hambre_Espiritual_(MATEO_5_4_a_6).mp3");
            //     audio.load();
            // }
                break;
            case 17: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_05_Mercy,_Purity,_Peacemaking,_&_Persecution_(Matthew_5_7_to_12).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_05_Misericordia,_Pureza,_Pacificación_y_Persecución_(Mateo_5_7_a_12).mp3");
            //     audio.load();
            // }
                break;
            case 18: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_06_Kingdom_Impact_Being_Salt_and_Light_(Matthew_5_13_to_20).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_06_Impacto_del_Reino_Ser_Sal_y_Luz_(Mateo_5_13_a_20).mp3");
            //     audio.load();
            // }
                break;
            case 19: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_07_Overcoming_the_Spirit_of_Anger_(Matthew_5_21_to_26).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_07_Venciendo_el_Espíritu_de_Ira_(Mateo_5_21_a_26).mp3");
            //     audio.load();
            // }
                break;
            case 20: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_08_Overcoming_the_Spirit_of_Immorality_(Matthew_5_27_to_30).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_08_Venciendo_el_Espíritu_de_Inmoralidad_(Mateo_5_27_a_30).mp3");
            //     audio.load();
            // }
                break;
            case 21: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_09_Honoring_Marriage_and_Our_Commitments_(Matthew_5_31_to_37).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_09_Honrar_el_Matrimonio_y_Nuestros_Compromisos_(Mateo_5_31_a_37).mp3");
            //     audio.load();
            // }
                break;
            case 22: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_10_Refusing_Retaliation_and_Defensiveness_(Matthew_5_38_to_42).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_10_Rechazando_Represalias_y_Ser_Defensiva_(Mateo_5_38_a_42).mp3");
            //     audio.load();
            // }
                break;
            case 23: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_11_Replacing_Passive_Love_with_Active_Love_(Matthew_5_43_to_48).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_11_Reemplazando_el_Amor_Pasivo_Con_el_Amor_Activo_(Mateo_5_43_a_48).mp3");
            //     audio.load();
            // }
                break;
            case 24: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_12_Called_to_Serve,_Give,_Pray,_Fast,_and_Bless_(Matthew_6_1_to_21).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_12_Llamados_para_Servir,_Dar,_Orar,_Ayunar_y_Bendecir_(Mateo_6_1_a_21).mp3");
            //     audio.load();
            // }
                break;
            case 25: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_13_Being_Taught_to_Pray_by_Jesus_(Matthew_6_9_to_13).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_13_Siendo_Enseñado_a_Orar_por_Jesús_(Mateo_6_9_a_13).mp3");
            //     audio.load();
            // }
                break;
            case 26: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_14_Receiving_the_Father’s_Reward_Financially_(Matthew_6_4).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_14_Recibir_la_Recompensa_del_Padre_Financieramente_(Mateo_6_4).mp3");
            //     audio.load();
            // }
                break;
            case 27: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_15_Relationships_Forgive,_Bless,_and_More_(Matthew_6_12_to_14).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_15_Relaciones_Perdonar,_Bendecir_y_Más_(Mateo_6_12_a_14).mp3");
            //     audio.load();
            // }
                break;
            case 28: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_16_Loving_Jesus_in_the_Use_of_Our_Money_(Matthew_6_19_to_24).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_16_Amar_a_Jesús_en_el_Uso_de_Nuestro_Dinero_(Mateo_6_19_a_24).mp3");
            //     audio.load();
            // }
                break;
            case 29: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_17_Overcoming_Anxiety_and_Fear_(Matthew_6_25_to_33).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_17_Venciendo_la_Ansiedad_y_el_Miedo_(Mateo_6_25_a_33).mp3");
            //     audio.load();
            // }
                break;
            case 30: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_18_To_Judge_or_Not_to_Judge_(Matthew_7_1_to_6).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_18_¿Juzgar_o_No_Juzgar_(Mateo_7_1_a_6).mp3");
            //     audio.load();
            // }
                break;
            case 31: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_19_Persevering_in_Seeking_God’s_Help_(Matthew_7_7_to_14).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_19_Perseverando_en_Buscar_la_Ayuda_de_Dios_(Mateo_7_7_a_14).mp3");
            //     audio.load();
            // }
                break;
            case 32: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Sermon_On_The_Mount/Session_20_Being_Wise_and_Great_in_God’s_Eyes_(Matthew_7_13_to_27).mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Sermon_Del_Monte/Sesión_20_Siendo_Prudente_y_Grande_a_los_Ojos_de_Dios_(Mateo_7_13_a_27).mp3");
            //     audio.load();
            // }
                break;
            case 33: 
            // if (getLanguage() == 'english') {
            //     $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_1_Introduction_and_Overview_of_the_Book_of_Revelation.mp3");
            //     audio.load();
            // } else {
            //     $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_1_Introducción_y_Visión_General_del_Libro_del_Apocalipsis.mp3");
            //     audio.load();
            // }
                break;
                // END LISTEN NEW CONTENT BILINGUAL TEACHING
            case 34: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_2_The_Varying_Importance_of_End_Time_Doctrines.mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_2_La_Importancia_Variable_de_las_Doctrinas_de_los_Últimos_Tiempos.mp3");
                audio.load();
            }
                break;
            case 35: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_3_The_Theme_of_the_Book_of_Revelation_(Revelation_1).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_3._El_Tema_del_Libro_de_Apocalipsis_(Apocalipsis_1).mp3");
                audio.load();
            }
                break;
            case 36: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_4_The_Seven_Churches_Called_to_Overcome_(Revelation_2_to_3).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_4_Las_Siete_Iglesias_Llamadas_a_Vencer_(Apocalipsis_2_a_3).mp3");
                audio.load();
            }
                break;
            case 37: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_5_The_Father’s_Throne_and_Jesus’_Exaltation_(Revelation_4_to_5).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_5_El_Trono_del_Padre_y_la_Exaltación_de_Jesús_(Apocalipsis._4_a_5).mp3");
                audio.load();
            }
                break;
            case 38: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_6_The_Seals_of_Judgment_and_God’s_Protection_(Revelation_6_to_7).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_6_Los_Sellos_de_Juicio_y_la_Protección_de_Dios_(Apocalipsis_6_a_7).mp3");
                audio.load();
            }
                break;
            case 39: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_7_The_Trumpet_Judgments_(Revelation_8_to_9).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_7_Los_Juicios_de_las_Trompetas_(Apocalipsis_8_a_9).mp3");
                audio.load();
            }
                break;
            case 40: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_8_Prophetic_Ministry_in_the_End_times_(Revelation_10_to_11).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_8_Ministerio_Profético_en_los_Últimos_Tiempos_(Apocalipsis_10_a_11).mp3");
                audio.load();
            }
                break;
            case 41: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_9_Second_Coming_and_Rapture_War_in_the_Spirit_(Revelation_11_to_14).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_9_Segunda_Venida_y_Rapto_Guerra_en_el_Espíritu_(Apocalipsis_11_a_14).mp3");
                audio.load();
            }
                break;
            case 42: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_10_Seven_Bowls_of_Wrath_(Revelation_15_to_16).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_10_Siete_Copas_de_Ira_(Apocalipsis_15_a_16).mp3");
                audio.load();
            }
                break;
            case 43: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_11_The_Fall_of_Babylon_(Revelation_17_to_18).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_11_La_Caída_de_Babilonia_(Apocalipsis_17_a_18).mp3");
                audio.load();
            }
                break;
            case 44: if (getLanguage() == 'english') {
                $('#audios').attr("src", "../assets/audios/notes/Revelations/Session_12_Victory_and_the_Restoration_of_All_Things_(Revelation_19_to_22).mp3");
                audio.load();
            } else {
                $('#audios').attr("src", "../assets/audios/notas/Apocalipsis/Sesión_12_La_Victoria_y_la_Restauración_de_Todas_las_Cosas_(Apocalipsis_19_a_22).mp3");
                audio.load();
            }
                break;
        }
    }
    if (typeListen === 'preaching') {
        $('#exampleModalCenter2').modal('show');
        var audio2 = document.getElementById('audio2');
        switch (returnIndexListen()) {
            case 1:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/41/899/20080822_Loving_God_The_First_and_Great_Commandment_TFC01_128.mp3");
                audio2.load();
                break;
            case 2:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/41/899/20080829_Defining_Wholehearted_Love-Four_Spheres_and_Four_Stages_TFC02_128.mp3");
                audio2.load();
                break;
            case 3:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/38/471/20080912_Defining_Wholehearted_Love_Four_Spheres_TFC03_128.mp3");
                audio2.load();
                break;
            case 4:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/38/471/20080919_Loving_God_with_All_Our_Mind_TFC04_128.mp3");
                audio2.load();
                break;
            case 5:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/41/399/20081010_The_Relationship_of_the_First_Commandment_to_the_Second_TFC05_128.mp3");
                audio2.load();
                break;
            case 6:
                // $('#audios2').attr("src", "../assets/audios/notes/First_Commandment/Session_6_Loving_God_with_All_Our_Soul_(Philippians_2_3_to_16).mp3");
                // audio2.load();            
                break;
            case 7:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/41/399/20081107_Loving_God_with_All_Our_Strength_TFC07_128.mp3");
                audio2.load();
                break;
            case 8:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/41/899/20081114_End_of_the_Age_Ministry_Paradigm_TFC08_128.mp3");
                audio2.load();
                break;
            case 9:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/41/899/20081121_Practical_Ways_to_Pursue_the_First_Commandment_TFC09_128.mp3");
                audio2.load();
                break;
            case 10:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/43/351/20081128_Running_for_the_Prize_Being_Complete_in_Our_Love_TFC10_128.mp3");
                audio2.load();
                break;
            case 11:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/43/351/20081130_Loving_Jesus_without_Offense_TFC11_128.mp3");
                audio2.load();
                break;
            case 12:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/43/351/20081205_Cultivating_the_Oil_of_Intimacy_TFC12_128.mp3");
                audio2.load();
                break;
            case 13:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/681/583/20120204_Pursuing_a_Kingdom_Lifestyle_SOM1_128.mp3");
                audio2.load();
                break;
            case 14:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/683/35/20120211_Overview_of_the_Sermon_on_the_Mount_SOM02_128.mp3");
                audio2.load();
                break;
            case 15:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/683/35/20120219_Poverty_of_Spirit-Foundational_Beaititude_SOM03_128.mp3");
                audio2.load();
                break;
            case 16:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/715/267/20120311_Mourning_Meekness_and_Spiritual_Hunger_SOM04_128.mp3");
                audio2.load();
                break;
            case 17:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/715/267/20120325_Mercy_Purity_Peacemaking_and_Persecution_SOM05_128.mp3");
                audio2.load();
                break;
            case 18:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/716/743/20120401_Kingdom_Impact_Being_Salt_and_Light_SOM06_128.mp3");
                audio2.load();
                break;
            case 19:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/718/695/20120415_Overcoming_the_Spirit_of_Anger_SOM07_128.mp3");
                audio2.load();
                break;
            case 20:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/721/123/20120527_Overcoming_the_Spirit_of_Immorality_SOM08_128.mp3");
                audio2.load();
                break;
            case 21:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/721/123/20120603_Honoring_Marriage_and_Our_Commitments_SOM09_128.mp3");
                audio2.load();
                break;
            case 22:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/720/646/20120610_Refusing_Retaliation_and_Defensiveness_SOM10_128.mp3");
                audio2.load();
                break;
            case 23:
                // $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/760/186/20120930_Called_to_Serve__Give_Pray_Fast_and_Bless_SOM12_128.mp3");
                // audio2.load();
                break;
            case 24:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/760/186/20120930_Called_to_Serve__Give_Pray_Fast_and_Bless_SOM12_128.mp3");
                audio2.load();
                break;
            case 25:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/758/735/20121014_Being_Taught_to_Pray_by_Jesus_128.mp3");
                audio2.load();
                break;
            case 26:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/760/686/20121021_Receiving_the_Fathers_Reward_Financially_128.mp3");
                audio2.load();
                break;
            case 27:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/759/211/20121104_Relationships_Forgive_Bless_and_More_SOM15_128.mp3");
                audio2.load();
                break;
            case 28:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/760/687/20121125_Loving_Jesus_in_Our_Use_of_Money_SOM16_128.mp3");
                audio2.load();
                break;
            case 29:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/760/687/20121207_Overcoming_Anxiety_and_Fear_SOM17_128.mp3");
                audio2.load();
                break;
            case 30:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/759/711/20121209_To_Judge_or_Not_to_Judge_SOM18_128.mp3");
                audio2.load();
                break;
            case 31:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/765/67/20121214_Seeking_Gods_Help_with_Perseverance_SOM19_128.mp3");
                audio2.load();
                break;
            case 32:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/765/566/20121216_Being_Wise_and_Great_in_Gods_Eyes_SOM20_128.mp3");
                audio2.load();
                break;
            case 33:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/344/803/2014_02_07_2000_FCF_MB.mp3");
                audio2.load();
                break;
            case 34:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/929/3/2014_02_14_2000_FCF_MB.mp3");
                audio2.load();
                break;
            case 35:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/909/887/2014_02_28_2000_MB_FCF.mp3");
                audio2.load();
                break;
            case 36:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/876/919/2014_03_07_2000_MB_FCF.mp3");
                audio2.load();
                break;
            case 37:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/812/47/2014_03_21_Session5_MikeBickle_EGS.mp3");
                audio2.load();
                break;
            case 38:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/367/387/2014_03_29_2000_MB_FCF.mp3");
                audio2.load();
                break;
            case 39:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/353/867/2014_04_04_1800_EGS_MikeBickle_Session7.mp3");
                audio2.load();
                break;
            case 40:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/636/1018/2014_04_11_2000_MB_FCF.mp3");
                audio2.load();
                break;
            case 41:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/97/923/2014_04_18_2000_MB_FCF.mp3");
                audio2.load();
                break;
            case 42:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/52/470/2014_04_26_2000_MB_FCF.mp3");
                audio2.load();
                break;
            case 43:
                // $('#audios2').attr("src", "../assets/audios/notes/Revelations/Session_11_The_Fall_of_Babylon_(Revelation_17_to_18).mp3");
                // audio2.load();          
                break;
            case 44:
                $('#audios2').attr("src", "https://ihopkcorg-a.akamaihd.net/platform/IHOP/100/370/140509-1800-TPR.mp3");
                audio2.load();
                break;
        }
    }
    if (typeListen === 'Seepreaching') {
        $('#exampleModalCenter3').modal({
            backdrop: 'static'
        });
        $('#exampleModalCenter3').modal('show');
        var video = document.getElementById('video');
        $('#outvideo').hide();
        $('#video').show();
        switch (returnIndexListen()) {
            case 1:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/41/899/20080822_Loving_God_The_First_and_Great_Commandment_TFC01_1000.mp4");
                video.load();
                break;
            case 2:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/41/899/20080829_Defining_Wholehearted_Love-Four_Spheres_and_Four_Stages_TFC02_1000.mp4");
                video.load();
                break;
            case 3:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/38/471/20080912_Defining_Wholehearted_Love_Four_Spheres_TFC03_564.mp4");
                video.load();
                break;
            case 4:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/38/471/20080919_Loving_God_with_All_Our_Mind_TFC04_564.mp4");
                video.load();
                break;
            case 5:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/41/399/20081010_The_Relationship_of_the_First_Commandment_to_the_Second_TFC05_1000.mp4");
                video.load();
                break;
            case 6:
                // $('#videos').attr("src", "../assets/audios/notes/First_Commandment/Session_6_Loving_God_with_All_Our_Soul_(Philippians_2_3_to_16).mp3");
                // video.load();            
                break;
            case 7:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/41/399/20081107_Loving_God_with_All_Our_Strength_TFC07_564.mp4");
                video.load();
                break;
            case 8:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/41/899/20081114_End_of_the_Age_Ministry_Paradigm_TFC08_1000.mp4");
                video.load();
                break;
            case 9:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/41/899/20081121_Practical_Ways_to_Pursue_the_First_Commandment_TFC09_1000.mp4");
                video.load();
                break;
            case 10:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/43/351/20081128_Running_for_the_Prize_Being_Complete_in_Our_Love_TFC10_564.mp4");
                video.load();
                break;
            case 11:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/43/351/20081130_Loving_Jesus_without_Offense_TFC11_564.mp4");
                video.load();
                break;
            case 12:
                $('#videos').attr("src", "http://media2.ihopkc.org.edgesuite.net/IHOP/43/351/20081205_Cultivating_the_Oil_of_Intimacy_TFC12_1000.mp4");
                video.load();
                break;
            case 13:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3247#video");
                break;
            case 14:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3250#video");
                break;
            case 15:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3251#video");
                break;
            case 16:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3320#video");
                break;
            case 17:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3326#video");
                break;
            case 18:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3328#video");
                break;
            case 19:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3333#video");
                break;
            case 20:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3350#video");
                break;
            case 21:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3352#video");
                break;
            case 22:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3354#video");
                break;
            case 23:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3360#video");
                break;
            case 24:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3394#video");
                break;
            case 25:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3400#video");
                break;
            case 26:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3402#video");
                break;
            case 27:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3404#video");
                break;
            case 28:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3414#video");
                break;
            case 29:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3416#video");
                break;
            case 30:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3417#video");
                break;
            case 31:
                setUrlView("https://mikebickle.org/watch/?guid=mb_3418#video");
                break;
            case 32:
                setUrlView(" https://mikebickle.org/watch/?guid=mb_3419#video");
                break;
            case 33:
                setUrlView("https://mikebickle.org/watch/?guid=2014_02_07_2000_FCF_MB#video");
                break;
            case 34:
                setUrlView("https://mikebickle.org/watch/?guid=2014_02_14_2000_FCF_MB#video");
                break;
            case 35:
                setUrlView("https://mikebickle.org/watch/?guid=2014_02_28_2000_MB_FCF#video");
                break;
            case 36:
                setUrlView("https://mikebickle.org/watch/?guid=2014_03_07_2000_MB_FCF#video");
                break;
            case 37:
                setUrlView("https://mikebickle.org/watch/?guid=vEup0VZ1YIdj_XES4hOk6VIkagq0W4Uq#video");
                break;
            case 38:
                setUrlView("https://mikebickle.org/watch/?guid=2014_03_29_2000_MB_FCF#video");
                break;
            case 39:
                setUrlView("https://mikebickle.org/watch/?guid=2014_04_04_1800_EGS_MikeBickle_Session7#video");
                break;
            case 40:
                setUrlView("https://mikebickle.org/watch/?guid=2014_04_11_2000_MB_FCF#video");
                break;
            case 41:
                setUrlView("https://mikebickle.org/watch/?guid=2014_04_18_2000_MB_FCF#video");
                break;
            case 42:
                setUrlView("https://mikebickle.org/watch/?guid=2014_04_26_2000_MB_FCF#video");
                break;
            case 43:
                // $('#audios2').attr("src", "../assets/audios/notes/Revelations/Session_11_The_Fall_of_Babylon_(Revelation_17_to_18).mp3");
                // audio2.load();          
                break;
            case 44:
                setUrlView("https://mikebickle.org/watch/?guid=2014_05_09_1800_MB_FCF#video");
                break;
        }
    }
}

function setUrlView(url) {
    $('#outvideo').show();
    $('#video').hide();
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.setAttribute('target', 'content-video');
    a.href = url;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

function assingIndexListen(index) {
    localStorage.setItem('indexListen', index.toString());
}
