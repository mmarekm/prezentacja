var index = 0;
var dzisiaj = new Date();
var dzien = dzisiaj.getDate();
var miesiac = dzisiaj.getMonth()+1;
index = dzien - 24;

var histBookV = ["Tajemnice sprzed wieków s.214-215","Czasy świetności dynastii Jagiellonów s.216-218","Polska odzyskuje Pomorze Gdańskie s.219-221","Monarchia stanowa w Polsce s.222-225","Przywileje szlacheckie i dalej s.226-227","Podsumowanie s.228","Podsumowanie znajomości pojęć z połowy słowniczka s.229-232","Podsumowanie znajomości pojęć z połowy słowniczka s.233-235 i rzut okiem na s.236"];
var religiaV = ["Czym różni się prawdziwe szczęście od chwilowej przyjemności?", "Co daje Ci szczęście?", "Jak możesz pomagać w grupach/wspólnotach/rodzinie, aby inni byli szczęśliwi?", "Podaj przykłady z życia codziennego, w których ważną rolę odgrywa wiara, nadzieja i miłość.", "Z czego się składa Biblia?", "Jakie Księgi Biblijne umiesz wymienić, jakie rodzaje ksiąg znajdują się w Nowy Testamencie?", "Jakie gatunki literackie możesz znaleźć w Biblii?", "Jak czytać i interpretować Pismo Święte? Czy można brać wszystko dosłownie?", "Biblia a nauka - czy jest tu jakiś konflikt, czy da się te dwie nauki pogodzić?", "Jaki jest związek Pisma Świętego a Tradycją? Czym jest Tradycja (pisana przez wielkie T)?", "Czytasz indywidualnie Pismo Święte?", "Historie biblijne: Kain i Abel, Noe, wieża Babel.", "Wyjaśnij pojęcia: anioł, błogosławieństwo, Ewangelia, protoewangelia, wolna wola.", "Podaj przykłady postaci biblijnych w kontekście odróżniania dobra od zła", "Jakie są konsekwencje grzechu?", "Co to jest Naród Wybrany? Co oznacza słowo przymierze.", "Opowiedz historię Abrahama, Izaaka, Jakuba, Józefa Egipskiego, niewoli egipskiej, Paschy i wyjścia z Egiptu, wędrówki Narodu Wybranego, otrzymania Dekalogu. Jak Bóg troszczy się o swój lud? Jaka jest postawa ludzi wobec Boga?", "Kim był Jonasz?", "Jak Bóg objawia się ludziom? W którym momencie historii i jak objawił się w pełni?", "Jak Jezus okazuje nam miłość poprzez mękę, śmierć i zmartwychwstanie?", "Czym jest Ewangelia? Jakich znasz Ewangelistów? Czy poszczególne wersje ewangelii są takie same czy różnią się od siebie?", "Czym jest przypowieść? Jakie znasz przypowieści o Królestwie Niebieskim?", "Czym jest Kościół (pisany przez wielkie K), a czym kościół (przez małe k)?", "Wymień biblijne obrazy Kościoła - do czego możemy porównać Kościół, np. do owczarni, gdzie Jezus jest Dobrym Pasterzem.", "Jakie jest znaczenie Chrztu?", "Jak wyglądał pierwotny Kościół?", "Opowiedz o początkach Kościoła w Polsce.", "Czym jest życie konsekrowane? Czym są misje, kim są misjonarze?", "Kim są świeccy i jaka jest ich rola w Kościele?", "Jak Ty możesz udzielać się w Kościele?"];
var religiaIII = ["Czym jest modlitwa?","Jak możesz wielbić Boga, kiedy przepraszasz?", "Za kogo możesz się modlić? O co prosić Pana Boga?", "O co prosimy w Modlitwie Pańskiej?", "Wymień modlitwy Maryjne.", "Jaki sakrament oczyszcza nas z grzechów?", "Jak dobrze przygotować się do Sakramentu Pokuty i Pojednania?", "Jak odróżnić grzech lekki i ciężki?", "Jak możesz pracować nad sobą i stawać się coraz lepszym?", "Jak często powinno się przystępować do Spowiedzi?", "Na czym polega praktyka pierwszych piątków miesiąca?", "Podaj przykłady zastosowania przykazań Bożych w życiu codziennym.", "Co oznacza, że niedziela jest pamiątką Zmartwychwstania? Jak możemy świętować niedzielę?", "Omów przypowieści: „O zagubionej owcy”, „O miłosiernym ojcu”, „O miłosiernym samarytaninie”.", "Czym jest Adoracja Najświętszego Sakramentu?"];
var lektury = ["Opowieści z Narnii: Lew, czarownica i stara szafa","Opowieści z Narnii: Książę Kaspian",'Opowieści z Narnii: Podróż "Wędrowca do Świtu"'];
var religiaUla = [];
var religiaBasia = [];
var lekturaUla = [];
var lekturaBasia = [];
var wiodacyUla = [];

function wyswietl()
{
	let miech = "";
	if (miesiac == 9)
		miech = " września 2024 r.";
	else
		miech = " października 2024 r.";
	$("#dzienUla").html('<span style="color: green;">' + dzien + miech + '</span>');
	$("#ranoUla").html('<span style="color: yellow;">rano</span>: ' + histBookV[2 * index]);
	$("#wieczorUla").html('<span style="color: blue;">wieczór</span>: ' + histBookV[(2 * index) + 1]);
}