function OnInit() {    
    $('#nav1').removeClass('active');
    $('#nav3').addClass('active');
    $('#nav2').removeClass('active');
    $('.loader').hide();
    $('.pdfobject-container').addClass('animated fadeIn');
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

function showContent() {
    $('.content-lessons').show().addClass('animated fadeIn');
    $('.pdfs').hide();
}

function getLanguage() {
    return localStorage.getItem('language');
}

function assingFileSelector(selector, indexId, idPdf, file) {
    $(selector).show();
    embedPdf($(indexId), file, { id: idPdf, height: 'calc(100vh - 210px)' });
    getTimeFile(file, selector);
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
    $('.content-lessons').hide().removeClass('animated fadeIn');
    $('.pdfs').show('slow');
    localStorage.setItem('index', index.toString());
    switch (index) {
        case 1: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView', "../assets/PDF/First_and_Great_Commandment/1_20080822_Loving_God_The_First_and_Great_Commandment_TFC01.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_1_20080822_Loving_God_The_First_and_Great_Commandment_TFC01.pdf");
        }
            break;
        case 2: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView2', "../assets/PDF/First_and_Great_Commandment/2_20080829_Defining_Wholehearted_Love-Four_Spheres_and_Four_Stages_TFC02.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView2', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_2_20080829_Defining_Wholehearted_Love-Four_Spheres_and_Four_Stages_TFC02.pdf");
        }
            break;
        case 3: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView3', "../assets/PDF/First_and_Great_Commandment/3_20080912_Defining_Wholehearted_Love_Four_Spheres_TFC03.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView3', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_3_20080912_Defining_Wholehearted_Love_Four_Spheres_TFC03.pdf");
        }
            break;
        case 4: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView4', "../assets/PDF/First_and_Great_Commandment/4_20080919_Loving_God_with_All_Our_Mind_TFC04.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView4', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_4_20080919_Loving_God_with_All_Our_Mind_TFC04.pdf");
        }
            break;
        case 5: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView5', "../assets/PDF/First_and_Great_Commandment/5_20081010_The_Relationship_of_the_First_Commandment_to_the_Second_TFC05.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView5', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_5_20081010_The_Relationship_of_the_First_Commandment_to_the_Second_TFC05.pdf");
        }
            break;
        case 6: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView6', "../assets/PDF/First_and_Great_Commandment/6_20081024_Loving_God_with_All_Our_Soul_TFC06.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView6', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_6_20081024_Loving_God_with_All_Our_Soul_TFC06.pdf");
        }
            break;
        case 7: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView7', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_7_20081107_Loving_God_with_All_Our_Strength_TFC07.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView7', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_7_20081107_Loving_God_with_All_Our_Strength_TFC07.pdf");
        }
            break;
        case 8: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView8', "../assets/PDF/First_and_Great_Commandment/8_20081114_End_of_the_Age_Ministry_Paradigm_TFC08.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView8', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_8_20081114_End_of_the_Age_Ministry_Paradigm_TFC08.pdf");
        }
            break;
        case 9: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView9', "../assets/PDF/First_and_Great_Commandment/9_20081121_Practical_Ways_to_Pursue_the_First_Commandment_TFC09.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView9', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_9_20081121_Practical_Ways_to_Pursue_the_First_Commandment_TFC09.pdf");
        }
            break;
        case 10: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView10', "../assets/PDF/First_and_Great_Commandment/10_20081128_Running_for_the_Prize_Being_Complete_in_Our_Love_TFC10.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView10', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_10_20081128_Running_for_the_Prize_Being_Complete_in_Our_Love_TFC10.pdf");
        }
            break;
        case 11: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView11', "../assets/PDF/First_and_Great_Commandment/11_20081130_Loving_Jesus_without_Offense_TFC11.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView11', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_11_20081130_Loving_Jesus_without_Offense_TFC11.pdf");
        }
            break;
        case 12: if (getLanguage() == 'english') {
            assingFileSelector('#loader', '#pdfView', 'pdfView12', "../assets/PDF/First_and_Great_Commandment/12_20081205_Cultivating_the_Oil_of_Intimacy_TFC12.pdf");
        } else {
            assingFileSelector('#loader', '#pdfView', 'pdfView12', "../assets/PDF/Primer_Gran_Mandamiento/Spanish_12_20081205_Cultivating_the_Oil_of_Intimacy_TFC12.pdf");
        }
            break;
        case 13: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView13', "../assets/PDF/Sermon_on_the_Mount/1_20120204_Pursuing_a_Kingdom_Lifestyle_SOM1.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView13', "../assets/PDF/Sermon_Del_Monte/Spanish_1_20120204_Pursuing_a_Kingdom_Lifestyle_SOM1.pdf");
        }
            break;
        case 14: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView14', "../assets/PDF/Sermon_on_the_Mount/2_20120211_Overview_of_the_Sermon_on_the_Mount_SOM02.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView14', "../assets/PDF/Sermon_Del_Monte/Spanish_2_20120211_Overview_of_the_Sermon_on_the_Mount_SOM02.pdf");
        }
            break;
        case 15: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView15', "../assets/PDF/Sermon_on_the_Mount/3_20120219_Poverty_of_Spirit-Foundational_Beaititude_SOM03.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView15', "../assets/PDF/Sermon_Del_Monte/Spanish_3_20120219_Poverty_of_Spirit-Foundational_Beaititude_SOM03.pdf");
        }
            break;
        case 16: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView16', "../assets/PDF/Sermon_on_the_Mount/4_20120311_Mourning_Meekness_and_Spiritual_Hunger_SOM04.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView16', "../assets/PDF/Sermon_Del_Monte/Spanish_4_20120311_Mourning_Meekness_and_Spiritual_Hunger_SOM04.pdf");
        }
            break;
        case 17: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView17', "../assets/PDF/Sermon_on_the_Mount/5_20120325_Mercy_Purity_Peacemaking_and_Persecution_SOM05.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView17', "../assets/PDF/Sermon_Del_Monte/Spanish_5_20120325_Mercy_Purity_Peacemaking_and_Persecution_SOM05 (Autosaved).pdf");
        }
            break;
        case 18: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView18', "../assets/PDF/Sermon_on_the_Mount/6_20120401_Kingdom_Impact_Being_Salt_and_Light_SOM06.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView18', "../assets/PDF/Sermon_Del_Monte/Spanish_6_20120401_Kingdom_Impact_Being_Salt_and_Light_SOM06.pdf");
        }
            break;
        case 19: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView19', "../assets/PDF/Sermon_on_the_Mount/7_20120415_Overcoming_the_Spirit_of_Anger_SOM07.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView19', "../assets/PDF/Sermon_Del_Monte/Spanish_7_20120415_Overcoming_the_Spirit_of_Anger_SOM07.pdf");
        }
            break;
        case 20: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView20', "../assets/PDF/Sermon_on_the_Mount/8_20120527_Overcoming_the_Spirit_of_Immorality_SOM08.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView20', "../assets/PDF/Sermon_Del_Monte/Spanish_8_20120527_Overcoming_the_Spirit_of_Immorality_SOM08.pdf");
        }
            break;
        case 21: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView21', "../assets/PDF/Sermon_on_the_Mount/9_20120603_Honoring_Marriage_and_Our_Commitments_SOM09.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView21', "../assets/PDF/Sermon_Del_Monte/Spanish_9_20120603_Honoring_Marriage_and_Our_Commitments_SOM09.pdf");
        }
            break;
        case 22: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView22', "../assets/PDF/Sermon_on_the_Mount/10_20120610_Refusing_Retaliation_and_Defensiveness_SOM10.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView22', "../assets/PDF/Sermon_Del_Monte/Spanish_10_20120610_Refusing_Retaliation_and_Defensiveness_SOM10.pdf");
        }
            break;
        case 23: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView23', "../assets/PDF/Sermon_on_the_Mount/11_20120701_Replacing_Passive_Love_with_Active_Love_SOM11.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView23', "../assets/PDF/Sermon_Del_Monte/Spanish_11_20120701_Replacing_Passive_Love_with_Active_Love_SOM11.pdf");
        }
            break;
        case 24: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView24', "../assets/PDF/Sermon_on_the_Mount/12_20120930_Called_to_Serve_Give_Pray_Fast_and_Bless_SOM12.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView24', "../assets/PDF/Sermon_Del_Monte/Spanish_12_20120930_Called_to_Serve_ Give_Pray_Fast_and_Bless_SOM12.pdf");
        }
            break;
        case 25: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView25', "../assets/PDF/Sermon_on_the_Mount/13_20121014_Being_Taught_to_Pray_by_Jesus.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView25', "../assets/PDF/Sermon_Del_Monte/Spanish_13_20121014_Being_Taught_to_Pray_by_Jesus.pdf");
        }
            break;
        case 26: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView26', "../assets/PDF/Sermon_on_the_Mount/14_20121021_Receiving_the_Fathers_Reward_Financially.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView26', "../assets/PDF/Sermon_Del_Monte/Spanish_14_20121021_Receiving_the_Fathers_Reward_Financially.pdf");
        }
            break;
        case 27: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView27', "../assets/PDF/Sermon_on_the_Mount/15_20121104_Relationships_Forgive_Bless_and_More_SOM15.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView27', "../assets/PDF/Sermon_Del_Monte/Spanish_15_20121104_Relationships_Forgive_Bless_and_More_SOM15.pdf");
        }
            break;
        case 28: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView28', "../assets/PDF/Sermon_on_the_Mount/16_20121125_Loving_Jesus_in_Our_Use_of_Money_SOM16.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView28', "../assets/PDF/Sermon_Del_Monte/Spanish_16_20121125_Loving_Jesus_in_Our_Use_of_Money_SOM16.pdf");
        }
            break;
        case 29: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView29', "../assets/PDF/Sermon_on_the_Mount/17_20121207_Overcoming_Anxiety_and_Fear_SOM17.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView29', "../assets/PDF/Sermon_Del_Monte/Spanish_17_20121207_Overcoming_Anxiety_and_Fear_SOM17.pdf");
        }
            break;
        case 30: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView30', "../assets/PDF/Sermon_on_the_Mount/18_20121209_To_Judge_or_Not_to_Judge_SOM18.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView30', "../assets/PDF/Sermon_Del_Monte/Spanish_18_20121209_To_Judge_or_Not_to_Judge_SOM18.pdf");
        }
            break;
        case 31: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView31', "../assets/PDF/Sermon_on_the_Mount/19_20121214_Seeking_Gods_Help_with_Perseverance_SOM19.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView31', "../assets/PDF/Sermon_Del_Monte/Spanish_19_20121214_Seeking_Gods_Help_with_Perseverance_SOM19.pdf");
        }
            break;
        case 32: if (getLanguage() == 'english') {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView32', "../assets/PDF/Sermon_on_the_Mount/20_20121216_Being_Wise_and_Great_in_Gods_Eyes_SOM20.pdf");
        } else {
            assingFileSelector('#loader2', '#pdfView2', 'pdfView32', "../assets/PDF/Sermon_Del_Monte/Spanish_20_20121216_Being_Wise_and_Great_in_Gods_Eyes_SOM20.pdf");
        }
            break;
        case 33: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView33', "../assets/PDF/Revelations/1_20140207_Introduction_and_Overview_of_the_Book_of Revelation_BOR01_1.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView33', "../assets/PDF/Apocalipsis/Spanish_1_20140207_Introduction_and_Overview_of_the_Book_of_Revelation_BOR01_1.pdf");
        }
            break;
        case 34: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView34', "../assets/PDF/Revelations/2_20140214_The_Varying _Importance_of_End_Time_Doctrines_BOR02_1.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView34', "../assets/PDF/Apocalipsis/Spanish_2_20140214_The_Varying _Importance_of_End_Time_Doctrines_BOR02_1.pdf");
        }
            break;
        case 35: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView35', "../assets/PDF/Revelations/3_BOR_03_The_Theme_of_the_book_of_Revelation.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView35', "../assets/PDF/Apocalipsis/Spanish_3_BOR_03_The_Theme_of_the_book_of_Revelation.pdf");
        }
            break;
        case 36: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView36', "../assets/PDF/Revelations/4_BOR_04_The_Seven_Churches_Called_to_Overcome_Rev_ 2_3.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView36', "../assets/PDF/Apocalipsis/Spanish_4_BOR_04_The_Seven_Churches_Called_to_Overcome_Rev_2_3.pdf");
        }
            break;
        case 37: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView37', "../assets/PDF/Revelations/5_BOR_05_Father_s_Throne_and_Jesus_Exaltation.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView37', "../assets/PDF/Apocalipsis/Spanish_5_BOR_05__Father_s_Throne_and_Jesus_Exaltation_Rev_4_5_with_blanks.pdf");
        }
            break;
        case 38: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView38', "../assets/PDF/Revelations/6_BOR_06_Seals_of_Judgment_and_Gods_Protection_Rev_6_7_3.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView38', "../assets/PDF/Apocalipsis/Spanish_6_BOR_06__Seals_of_Judgment_and_God_s_Protection_Rev_6_7_with_blanks.pdf");
        }
            break;
        case 39: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView39', "../assets/PDF/Revelations/7_BOR_07_The_Trumpets_Judgments_Rev_8_9_1.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView39', "../assets/PDF/Apocalipsis/Spanish_7_BOR_07_The_Trumpet_Judgments_Rev_8_9_with_blanks.pdf");
        }
            break;
        case 40: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView40', "../assets/PDF/Revelations/8_BOR_08_Prophetic_Ministry_in_End_Times_Rev_10_11.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView40', "../assets/PDF/Apocalipsis/Spanish_8_BOR_08_Prophetic_Ministry_in_End_Times_Rev_10_11_with_blanks.pdf");
        }
            break;
        case 41: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView41', "../assets/PDF/Revelations/9_BOR_09_2nd_Coming_Rapture_and_War_in_the_Spirit.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView41', "../assets/PDF/Apocalipsis/Spanish_9_BOR_09_2nd_Coming_Rapture_and_War_in_the_Spirit_Rev_11_14_without_blanks.pdf");
        }
            break;
        case 42: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView42', "../assets/PDF/Revelations/10_20140426_Seven_Bowls_of_Wrath_Rev15_16_SOS10.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView42', "../assets/PDF/Apocalipsis/Spanish_10_20140426_Seven_Bowls_of_Wrath_Rev15_16_SOS10.pdf");
        }
            break;
        case 43: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView43', "../assets/PDF/Revelations/11_BOR_11_Fall_of_Babylon.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView43', "../assets/PDF/Apocalipsis/Spanish_11_BOR_11_Fall_of_Babylon_Rev_17_18.pdf");
        }
            break;
        case 44: if (getLanguage() == 'english') {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView44', "../assets/PDF/Revelations/12_BOR_12_Victory_and_Restoration_of_All_Things.pdf");
        } else {
            assingFileSelector('#loader3', '#pdfView3', 'pdfView44', "../assets/PDF/Apocalipsis/Spanish_12_BOR_12_Victory_and_the_Restoration_of_All_Things_Rev19_22.pdf");
        }
            break;
    }
}

function closeAudio() {
    document.getElementById('audio').pause();
}

function listenContent(index) {
    $('.modal').modal('show');
}