window.onload = function(){
  document.getElementById("toggler").addEventListener("click", nightMode)
  if (window.location.pathname == "/opinions.html"){
  document.getElementById("opinionback").Submissive.addEventListener("click", makeSure)}
  if (window.location.pathname == "/about.html"){
    document.getElementById("rateus").authSub.addEventListener("click", makeSure2);
  }
}

var makeSure = function(){
  if (confirm("Please confirm your response.\n" +
    "\nName: " +   document.getElementById("opinionback").Name.value  +
    "\nOccupation: " + document.getElementById("opinionback").Occupation.value  +
    "\nMessage: " + document.getElementById("opinionback").Opinions.value)){
    document.getElementById("opinionback").submit();
  }else{
    
  }
}

var makeSure2 = function(){
  if (confirm("Please confirm your response.\n" +
    "\nRating: " + document.getElementById("rateus").rating.value +
    "\nReason: " + document.getElementById("rateus").reason.value )) {
    document.getElementById("rateus").submit();
}
}

var nightMode = function(){
  document.body.classList.toggle("dark");
}

var tabsFilipinoTranslation = function() {
  document.getElementById("linkToBill").innerHTML = '<a href="https://www.senate.gov.ph/lisdata/2517921693!.pdf" target="_blank"> Basahin ang Batas </a>';
  document.getElementById("billExplain").innerHTML = '<a href="sogie.html"> Explanasyon ng Batas </a>';
  document.getElementById("opinions").innerHTML = '<a href="opinions.html"> Mga Opinyon </a>';
  document.getElementById("LGBTComm").innerHTML = '<a href="lgbt.html"> Tungkol sa mga LGBT </a>';
  document.getElementById("LGBTPH").innerHTML = '<a href="PHlgbt.html"> LGBT sa Pilipinas </a>';
  document.getElementById("aboutAuthors").innerHTML = '<a href="about.html"> Tungkol sa mga May Akda </a>';
  document.getElementById("language").innerHTML = 'Wika <span class="caret"></span>';
}

var homeFilipinoTranslation = function() {
  document.getElementsByTagName('p')[0].innerHTML = "Mabuhay! Sa website na ito'y nais naming linawin ang mga maling impormasyon ukol sa SOGIE Equality Bill (House Bill No. 4982). Ito rin ay naglalaman ng mga impormasyon tungkol sa LGBT Community, lalo na ang mga nasa Pilipinas.";
  
  document.getElementsByClassName('btn')[0].innerHTML = "Basahin ang Batas";
  document.getElementsByClassName('btn')[1].innerHTML = "Tungkol sa Batas";
  document.getElementsByClassName('btn')[2].innerHTML = "Mga Opinyon";
  document.getElementsByClassName('btn')[3].innerHTML = "Tungkol sa mga LGBT";
  document.getElementsByClassName('btn')[4].innerHTML = "LGBT sa Pilipinas";
  document.getElementsByClassName('btn')[5].innerHTML = "Tungkol sa mga May Akda";
}

var sogieFilipinoTranslation = function() {
  document.getElementsByTagName('h2')[0].innerHTML = "Ano ang SOGIE?";
    document.getElementsByTagName('p')[0].innerHTML = 'Ang ibig sabihin ng SOGIE ay <em> Sexual Orientation and Gender Identity/Expression</em>. <br>' +
      '<br /> <b> Sexual Orientation </b> - Tumutukoy sa pagkakilanlan ng isang tao depende sa kasarian ng taong kinaaakitan nila, kunwari ay parehong kasarian, magkaibang kasarian, dalawang kasarian, lahat ng kasarian, atbp. <br>' +
      '<br /> <b> Gender Identity </b> - Tumutukoy sa pagkakakilanlan sa sarili; lalaki, babae, wala sa dalawa, paiba-iba, atbp. Ang isang byolohikal na lalaki ay pwedeng magpakilala bilang babae. Ang isang byolohikal na babae ay pwedeng magpakilala bilang lalaki. <br>' +
      '<br /> <b> Gender Expression </b> - Tumutukoy sa paraan ng pagpapahayag ng isang tao ng kanilang pagkakakilanlan sa kasarian madalas sa pamamagitan ng istura, kasuotan at ugali; ang pinakakaraniwang mga uri ay ang panlalaki at pambabaeng expresyon. <br>';
    document.getElementsByTagName('p')[1].innerHTML = "Ang &quot;Genderbread Man&quot; na nagbubuod sa kahulugan ng SOGIE";

  document.getElementsByTagName('h2')[1].innerHTML = "Pagbabago Matapos ang Pagpapatupad";
    document.getElementsByTagName('p')[2].innerHTML = "Matapos mapatupad ang SOGIE Bill, ang mga natatakot ipahayag ang kanilang SOGIE ay maaari nang makaramdam ng dagdag na seguridad " +
      "sapagkat magpapatupad ng mga programa ang gobyerno upang magkaroon pa ng dagdag kaalaman ang ating lipunan. " +
      "Sa aming palagay, ang kabuuan ng batas na ito'y nagsasaad na ang komunidad ng LGBTQI+ ay mabibigyan ng sapat na proteksyon laban sa mga masasamang gawaing pandiskriminasyon na nangyayari sa ating lipunan.";
    document.getElementsByTagName('p')[3].innerHTML = "Pagtitipon upang suportahan ang SOGIE Bill";

  document.getElementsByTagName('h2')[2].innerHTML = "Tungkol sa Batas";
    document.getElementsByTagName('p')[4].innerHTML = "Ang batas na ito'y kauna-unahang inihain nina Miriam Defensor-Santiago at Representative Etta Rosales. " +
      "Hanggang sa kanyang huling termino noong 2016 ay hindi pa rin pinalad si Defensor-Santiago sa pagpasa ng SOGIE Bill. " + 
      "Noong Agosto ng 2019, isang kontrobersiya tungkol sa batas na ito ang sumiklab kasunod ng isang pangyayari kaugnay ang isang transgender woman na si Gretchen Diez. " + 
      "Matapos mapagsabihan na hindi niya maaaring gamitin ang pambabaeng banyo sa isang mall, siya'y nagpasa ng reklamo, na ikinabuhay ng SOGIE Bill sa publiko.";
    document.getElementsByTagName('p')[5].innerHTML = "Paglalahad sa isang segment ng CNN News ni Gretchen Diez kaugnay ng mga pangyayari.";
 
  document.getElementsByTagName('h2')[3].innerHTML = "Mga Positibo at Negatibong Epekto ng SOGIE Bill";
    document.getElementsByTagName('td')[0].innerHTML = "Mga Positibong Epekto";
    document.getElementsByTagName('td')[1].innerHTML = "Mga Negatibong Epekto";
    document.getElementsByTagName('td')[2].innerHTML = "Ipinagbabawal ang diskriminasyon sa SOGIE hindi lamang para sa mga LGBTQI+, kundi pati na rin sa lahat ng tao.";
    document.getElementsByTagName('td')[3].innerHTML = "Nakalilito ito pagdating sa mga trabahong para lamang sa mga tiyak na kasarian (gynecologists, priests etc.)";
    document.getElementsByTagName('td')[4].innerHTML = "Sa pamamagitan ng pagmumulta'y mababawasan ang diskriminasyon";
    document.getElementsByTagName('td')[5].innerHTML = "Ang mga programang pangkaalaman tungkol sa SOGIE ay may malaking posibilidad na pumalya at hindi pansinin.";
    document.getElementsByTagName('td')[6].innerHTML = "Nais bigyan ng kaalaman ang mga mamamayan tungkol sa SOGIE";
    document.getElementsByTagName('td')[7].innerHTML = "Maaaring hindi ipatupad nang maayos ng mga tiwaling opisyal ang mga karapatdapat na parusa dahil sa kanilang mga koneksiyon.";
    document.getElementsByTagName('td')[8].innerHTML = "Mas mabibigyan ng oportunidad ang Komunidad ng LGBTQI+ sapagkat mababawasan na ang diskriminasyon sa kanila.";
    document.getElementsByTagName('td')[10].innerHTML = "Ang mga usapin at kaso tungkol sa SOGIE ay mas mabibigyang atensyon.";
}

var opinionsFilipinoTranslation = function () {
  document.getElementsByTagName('div')[2].innerHTML = '<b> Mangyaring tandaan: </b>' +
    "Ang mga mensaheng hindi kanais-nais ay hindi ilalagay sa message board.";
  
  document.getElementsByTagName('label')[0].innerHTML = "Pangalan/Alyas:";
  document.getElementsByTagName('label')[1].innerHTML = "Okupasyon:";
  document.getElementsByTagName('label')[2].innerHTML = "Mag-aaral ng PSHS";
  document.getElementsByTagName('label')[3].innerHTML = "Guro ng PSHS";
  document.getElementsByTagName('label')[4].innerHTML = "Kawani ng PSHS";
  document.getElementsByTagName('label')[5].innerHTML = "Wala sa pagpipilian";

  document.getElementById('opiniontext').setAttribute("placeholder", "Ilagay ang inyong mga opinyon dito!");
  document.getElementsByTagName('input')[7].setAttribute("value", "Isumite");
}

var statisticsFilipinoTranslation = function () {
  document.getElementsByTagName('h2')[0].innerHTML = "Mga Istatistika tungkol sa LGBT";
  
  document.getElementsByTagName('h4')[0].innerHTML = "Pilipinas";
    document.getElementsByTagName('p')[0].innerHTML = "Dahil sa isang pag-aaral ng Unibersidad ng Pilipinas noong 2002, isiniwalat na 11% ng mga regular na nakikipagtalik sa edad na 18-24 ay nakipagtalik sa kaparehong kasarian. " + 
      "Mula noon ay wala nang iba pang pag-aaral na ginawa tungkol sa porsyento ng mga LGBT sa Pilipinas.";
    document.getElementsByTagName('p')[1].innerHTML = "Mula sa isang pag-aaral ng Social Weather Stations noong Marso 2018, kahit pa't tinatawag na &quot;gay-friendly&quot; ang mga Pinoy, " + 
      "61% ay sumagot na hindi sila sumasang-ayon sa pagiging ligal ng same-sex marriage sa Pilipinas.";
    document.getElementsByTagName('p')[2].innerHTML = "Pagtitipon upang suportahan ang Same-Sex Marriage sa Pilipinas";
  
  document.getElementsByTagName('h4')[1].innerHTML = "Asya";
    document.getElementsByTagName('p')[3].innerHTML = "Ang Pilipinas ay isa sa mga &quot;gay-friendly&quot; na bansa sa Asya, na may 73% ng mga mayor de edad na naniniwalang " + 
      "ang homosekswalidad ay karapatdapat na tanggapin sa ating lipunan, sinundan naman ito ng Japan na may 54% na boto, at South Korea na may 39% na boto.";
    document.getElementsByTagName('p')[4].innerHTML = "Mula sa 35 na bansa sa Asya na kasama sa pag-aaral ng NQAPIA (National Queer Asian Pacific Islander Alliance):";
      document.getElementsByTagName('li')[10].innerHTML = "6 na bansa lamang ang may mga batas laban sa diskriminasyon tungkol sa LGBT, na may dalawang hindi sigurado.";
      document.getElementsByTagName('li')[11].innerHTML = "13 na bansa ang may mga batas na ginagawang ligal ang pagpapalit ng kasarian, na may tatlong hindi sigurado.";
      document.getElementsByTagName('li')[12].innerHTML = "18 na bansa ang ginawang ligal ang pakikipagtalik sa kaparehong kasarian, na may tatlong hindi sigurado.";
    document.getElementsByTagName('p')[5].innerHTML = "Grapiko ng mga bansa sa Asya na may mga batas laban sa diskriminasyon.";
  
  document.getElementsByTagName('h4')[2].innerHTML = "Buong Mundo";
    document.getElementsByTagName('p')[6].innerHTML = "Sa Estados Unidos, ang Williams Institute at UCLA School of Law ay naglabas ng pag-aaral noong 2011 na nagsasabing higit pa " +
      "sa 8 milyong Amerikanong menor de edad sa US, o 3.5% ng kabuuang populasyon ng mga menor de edad, ay LGBT.";
    document.getElementsByTagName('p')[7].innerHTML = "Noong 2013, isang pag-aaral sa 2,363 na Braziliang gumagamit ng internet ang ginawa sa Brazil upang matukoy ang kanilang oryentasyong sekswal. " +
      "7% ay sumagot na sila'y homosexual, 5% ay bisexual, 1% ay nagsabing other, at 4% ang hindi sumagot.";
    document.getElementsByTagName('p')[8].innerHTML = "Isang pagsisiyasat ng YouGov sa United Kingdom noong 2015 ay nagpakita na 7.6% ng 1,632 na menor de edad ay kabilang sa LGBT.";
    document.getElementsByTagName('p')[9].innerHTML = "73 na bansa sa buong mundo ang ginawang ligal ang homosekswalidad, at karamihan dito ay nasa Gitnang Silangan, Aprika, at Asya.";
    document.getElementsByTagName('p')[10].innerHTML = "26 na bansa ang ginawang ligal ang same-sex marriage, at ang pinakabago ay ang Australia noong Disyembre 2017. Sa Pilipinas, " +
      "na-finalize na ng gobyerno ang kanilang desisyon na hindi maaaring gawing ligal ang same-sex marriage sa bansa."; 
  
  document.getElementsByTagName('div')[2].innerHTML = '<b> Ang mga sumusunod na bansa ay patuloy pa ring ginagawang ligal ang parusang kamatayan para sa homosekswalidad: </b>' +
    "Iran, Sudan, Saudi Arabia, Yemen, Somalia, Nigeria, Syria and Iraq.";
} 

var lgbtFilipinoTranslation = function () {
  document.getElementsByTagName('h2')[0].innerHTML = "Mga Makabuluhang Grupong Pro-LGBT sa Pilipinas";
    document.getElementsByTagName('p')[0].innerHTML = '<b> Task Force Pride Philippines </b> <br>' +
      "Ang opisyal na tagapag-ayos ng taunang LGBT Pride March ay ang Task Force Pride (TFP) Philippines. " +
      "Isa itong network ng mga grupo at indibidwal na mga tagasuporta ng Komunidad ng LGBT, at mga " +
      "naglalayong mabigyan ng komportableng kapaligiran ang mga lesbians, gays, bisexuals at transgenders.";
    document.getElementsByTagName('p')[1].innerHTML = '<b> True Colors Coalition </b> <br>' +
      "Ang True Colors Coalition (TCC) ay isang politikal na organisasyong lumalaban para gumawa ng isang lipunan na may pagkapantay-pantay at pagtanggap sa isa't isa. " +
      "Sa ngayon, sila'y nagpapalaganap ng Kamalayan sa Pagiging Sensitibo sa Kasarian sa kanilang mga miyembro at kaalyado.";
    document.getElementsByTagName('p')[2].innerHTML = '<b> University of the Philippines Babaylan </b> <br>' +
      "Ang UP Babaylan ay ang nangungunang organisasyon ng LGBT ng mga estudyante sa lahat ng kampus ng Unibersidad ng Pilipinas. " +
      "Naglalayon itong suportahan at depensahan ang mga karapatan ng mga estudyante na nasa Komunidad ng LGBT para makakamit ng pagkapantay-pantay sa kasarian at sekswal na oryentasyon.";
  
  document.getElementsByTagName('h2')[1].innerHTML = "Mga Politiko sa Pilipinas na Sumasang-ayon sa LGBT";
    document.getElementsByTagName('p')[3].innerHTML = '<b> Miriam Defensor-Santiago </b> <br>' +
      "Ang dating senadorang si Miriam Defensor-Santiago ay ang unang naghain ng SOGIE Bill sa kongreso noong 2000. " +
      "Sinasabing paulit-ulit niya itong inihain hanggang sa huli niyang termino sa taong 2016.";
    document.getElementsByTagName('p')[4].innerHTML = '<b> Risa Hontiveros </b> <br>' +
      "Sa taong 2016, ang senadorang si Risa Hontiveros ay naghain din at pinagtanggol ang SOGIE Bill.";
    document.getElementsByTagName('p')[5].innerHTML = '<b> Geraldine Roman </b> <br>' +
      "Si Unang Kinatawan ng Distritong Bataan Geraldine Roman ay ang unang transgender na babaing nahalal sa Kongreso ng Pilipinas. " +
      "Bilang isang miyembro ng LGBT, siya ay isa sa mga matapat na tagapagtanggol ng SOGIE Bill.";
}

var authorsFilipinoTranslation = function () {
  document.getElementsByTagName('p')[0].innerHTML = 'He/Him || 14 || Ateneo de Manila Grade School <br>' +
    "Sa tingin ko, mas may benepisyo sa mga mamamayan ang SOGIE Equality Bill. " +
    "Higit na ginugusto ko na may mga sistema ng edukasyon na balak nitong ipatupad, " +
    "dahil ang maling impormasyon ay ang pinakamalaking dahilan para sa negatibong " +
    "reputasyon ng mga dinidiskriminadong komunidad, bukod pa sa LGBTQ.";
  
  document.getElementsByTagName('p')[1].innerHTML = 'He/Him || 16 || University of the Philippines Integrated School <br>' +
    "Sa aking opinyon, ang mga kilos ng diskriminasyon ay dapat maging mas malawak ang sakop, " + 
    "at hindi limitado lamang sa diskriminsayon sa kasarian, na tinutukoy ng batas. " +
    "Dagdag pa, inaasahan ko na mas hihikayatin nito ang mga Filipino na maging bukas sa mga ideya sa labas, " +
    "dahil tayo'y isang relihiyoso at konserbatibong bansa at mayroon pa ring mga bagay na sinasabi ng mas matandang henerasyon na &quot;taboo&quot;. " +
    "Sa kabuuan, gusto kong maipasa ang batas na ito, dahil makatutulong ito sa madaming mga nagtatagong tao na mabawasan ang kanilang hiya " + 
    "sa pagiging kanilang sarili, dahil may kilala akong mga taong ganito.";
    
  document.getElementsByTagName('p')[2].innerHTML = "She/Her || 14 || St. Mary's Academy of Sta.Ana, Manila <br>" +
    "Ang pangunahing hangad ng SOGIE Bill ay ang maprotektahan ang mga interes, hindi lamang ng " +
    "mga nasa Komunidad ng LGBTQI+, kundi pati na rin sa lahat ng Pilipino, kaya't " +
    "sumasang-ayon ako sa pagpapatupad nito. Ito lamang ay may mabuting " +
    "intensyon na magpahintulot o hayaang malayang ipahayag ng lahat ang kanilang " +
    "ekspresyon nang hindi nakararanas ng diskriminasyon dahil sa mga pamantayan ng ating lipunan.";
}
