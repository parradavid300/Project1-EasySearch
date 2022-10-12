

 function searchingAPI(topic){
    var search= topic.replace(" ","%20")
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q="+search+"&pageNumber=1&pageSize=1&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "b1cd874ba9mshbb1dbfdf1946d17p1b49d1jsn18b3f8089701",
            "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function test(response) {
        var output;
        output=response.value[0].url;
        console.log(output)
        summarizeAPI(output,0);
        // document.body.innerHTML='./indexCards.html'
        //window.history.pushState({ 'page_id': 1, 'user_id': 5 },"",'indexCards.html');
        return output;

    
 });
    //return test;
    return test;
};

function summarizeAPI(url,count){
	var input0=url.replace("https://",'http%3A//')
	var input1= input0.replace("/","%2F")
	var settings = {
		"async": false,
		"crossDomain": true,
		"url": "https://extracting-essential-information-from-news-articles-url.p.rapidapi.com/extractfromArticle?url="+input1,
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "b1cd874ba9mshbb1dbfdf1946d17p1b49d1jsn18b3f8089701",
			"X-RapidAPI-Host": "extracting-essential-information-from-news-articles-url.p.rapidapi.com"
		}
	};
	
	$.ajax(settings).done(function (response) {
		var summary=response["2.article"]["20.nlp.summary"];
		var title=response["2.article"]["05.title"];
		var url=response["2.article"]["01.url"];
		var data={'title':title,'summary':summary,'url':url};
		window.localStorage.setItem('data'+count, JSON.stringify(data));
        
    })
	};
	
	


	
	
// url to use https://www.cnet.com/culture/entertainment/keanu-reeves-reveals-his-dream-marvel-role-and-its-a-hot-one/
// var input= window.prompt("Enter URL");
// summarize(input);

var testObject= {
    "1.status": "ok",
    "2.article": {
        "01.url": "http://www.cnet.com/culture/entertainment/keanu-reeves-reveals-his-dream-marvel-role-and-its-a-hot-one/",
        "02.published": "Mon, 10 Oct 2022 00:00:00 GMT",
        "03.published_method_found": "Extracted from tag:\n<meta content=\"https://www.cnet.com/a/img/resize/ea95c0be2be42e2e26c8ac2360641e02e746aa3e/hub/2022/10/10/f7ee1fc3-f036-4207-a59f-44827bb175bd/screen-shot-2022-10-10-at-11-33-54-am.jpg?auto=webp&amp;fi, Found /2022/10/10/ in url",
        "04.published_guess_accuracy": "date",
        "05.title": "Keanu Reeves Reveals His Dream Marvel Role",
        "06.text": "Keanu Reeves has played some iconic characters in his 58 years, including John Wick, Ted in the Bill & Ted movies and Neo in The Matrix films. But he has yet to play the role his kid self would like to see him tackle. In an interview on Jimmy Kimmel Live, Reeves revealed that role.\n\nReeves shared details of his comic-book-loving childhood with Kimmel, who asked which character a 10-year-old Keanu would want to play.\n\n\"10-year-old Reeves would want to ... I think he'd probably want to be Ghost Rider,\" the actor said.\n\nGhost Rider, aka Johnny Blaze, is a stunt motorcyclist with a flaming skull for a head and a flaming motorcycle. Nicolas Cage famously -- or infamously, based on the mostly negative reviews -- played him in a 2007 film and 2012 sequel.\n\nLinking Reeves and Ghost Rider is nothing new. In 2019, Marvel Studios President Kevin Feige said the studio was talking to Reeves \"for almost every film we make,\" and fans were quick to suggest the motorcycle-loving Reeves play Ghost Rider.\n\nThere are no official plans for Reeves to star as Ghost Rider ... yet. But he's still getting some comic book action, as he'll star in both a Netflix film and anime series based on the BRZRKR comic series he co-created. The character, who looks just like Reeves, is an immortal warrior who fights battles that are \"too violent and dangerous\" for anyone else.",
        "07.authors": [
            "Gael Fashingbauer Cooper",
            "See Full Bio",
            "Cnet Freelancer Gael Fashingbauer Cooper",
            "A Journalist",
            "Pop-Culture Junkie",
            "Is Co-Author Of",
            "Whatever Happened To Pudding Pops",
            "The Lost Toys",
            "Tastes",
            "Trends Of The"
        ],
        "08.images": [
            "https://www.cnet.com/a/img/resize/7434e2e0733ab70a74346f4d9b2ffe2628a36a83/hub/2022/05/10/2510ca0f-1bfb-4e3d-8174-5e763943add9/avatar-2-weight-water-online-avatar2-teaser-printed-1sht-4alogo6-lg-promo.jpg?auto=webp&fit=crop&height=299&width=532",
            "https://www.cnet.com/a/img/resize/13bf5c05760148893c7bac73474f7d0045c7b9ad/hub/2022/10/10/f7ee1fc3-f036-4207-a59f-44827bb175bd/screen-shot-2022-10-10-at-11-33-54-am.jpg?auto=webp&fit=crop&height=675&width=1200",
            "https://www.cnet.com/a/img/resize/f6b12d8bda88623d37169f389be188c28bea6268/hub/2020/10/10/29c860f1-ab9d-49d8-b8f3-012c0ae9f412/hocus-pocus-disney-midler-promo.jpg?auto=webp&fit=crop&height=299&width=532",
            "https://i-cmg-amlg-prod.appspot.com/display?id=74b31bb1-87fb-4b0f-860a-794dc109ef4e",
            "https://www.cnet.com/a/img/resize/25f36fc60c7b21f85903ba72b90f2e08851d4c94/hub/2022/04/27/cedab94a-0f52-4b58-abba-bb9092727c3a/dont-wory-darling-harry-styles-florence-pugh-rev-1-dwd-trlr-0001-high-res-jpeg.jpg?auto=webp&fit=crop&height=299&width=532",
            "https://www.cnet.com/a/img/resize/4a2d5e639e8281b96b067d4332d16fb2ddbf8ab8/hub/2016/05/02/85948f9b-7918-477c-840f-eb31523e2b20/gaelcropped2.jpg?auto=webp&fit=crop&height=84&width=84",
            "https://www.cnet.com/a/img/resize/ea95c0be2be42e2e26c8ac2360641e02e746aa3e/hub/2022/10/10/f7ee1fc3-f036-4207-a59f-44827bb175bd/screen-shot-2022-10-10-at-11-33-54-am.jpg?auto=webp&fit=crop&height=630&width=1200",
            "https://www.cnet.com/a/img/resize/e0c420ff4574ea8866b55a880140281306027558/hub/2022/05/27/807982ed-f8b7-4f15-9f8d-c7f1dd40ffc0/alert-promo-alt3-2.png?auto=webp&fit=crop&height=236&width=420"
        ],
        "09.top_image": "https://www.cnet.com/a/img/resize/ea95c0be2be42e2e26c8ac2360641e02e746aa3e/hub/2022/10/10/f7ee1fc3-f036-4207-a59f-44827bb175bd/screen-shot-2022-10-10-at-11-33-54-am.jpg?auto=webp&fit=crop&height=630&width=1200",
        "10.meta_image": "https://www.cnet.com/a/img/resize/ea95c0be2be42e2e26c8ac2360641e02e746aa3e/hub/2022/10/10/f7ee1fc3-f036-4207-a59f-44827bb175bd/screen-shot-2022-10-10-at-11-33-54-am.jpg?auto=webp&fit=crop&height=630&width=1200",
        "11.movies": [],
        "12.meta_keywords": [
            ""
        ],
        "13.talgs": [],
        "14.meta_description": "His kid self would love to play Ghost Rider, the actor says.",
        "15.meta_lang": "en",
        "16.title_lang": "en",
        "17.text_lang": "en",
        "18.meta_favicon": "https://www.cnet.com/a/fly/bundles/cnetcss/images/core/icon/apple-touch-icon.png?v=2",
        "19.nlp.keywords": [
            "film",
            "role",
            "play",
            "star",
            "reveals",
            "dream",
            "keanu",
            "played",
            "kimmel",
            "series",
            "ted",
            "reeves",
            "rider",
            "ghost",
            "marvel"
        ],
        "20.nlp.summary": "Reeves shared details of his comic-book-loving childhood with Kimmel, who asked which character a 10-year-old Keanu would want to play.\nGhost Rider, aka Johnny Blaze, is a stunt motorcyclist with a flaming skull for a head and a flaming motorcycle.\nLinking Reeves and Ghost Rider is nothing new.\nIn 2019, Marvel Studios President Kevin Feige said the studio was talking to Reeves \"for almost every film we make,\" and fans were quick to suggest the motorcycle-loving Reeves play Ghost Rider.\nThere are no official plans for Reeves to star as Ghost Rider ... yet.",
        "21.nlp.entities": [
            [
                "GPE",
                "Ted"
            ],
            [
                "GPE",
                "Rider"
            ],
            [
                "GPE",
                "Netflix"
            ],
            [
                "ORGANIZATION",
                "Bill"
            ],
            [
                "ORGANIZATION",
                "Matrix"
            ],
            [
                "ORGANIZATION",
                "BRZRKR"
            ],
            [
                "ORGANIZATION",
                "Reeves"
            ],
            [
                "PERSON",
                "Keanu"
            ],
            [
                "PERSON",
                "John"
            ],
            [
                "PERSON",
                "Jimmy"
            ],
            [
                "PERSON",
                "Reeves"
            ],
            [
                "PERSON",
                "Kimmel"
            ],
            [
                "PERSON",
                "Johnny"
            ],
            [
                "PERSON",
                "Nicolas"
            ],
            [
                "PERSON",
                "Marvel"
            ],
            [
                "PERSON",
                "Kevin"
            ],
            [
                "PERSON",
                "Ghost"
            ]
        ]
    }
};

			
		//var data=summarizeAPI("https://www.cnet.com/culture/entertainment/keanu-reeves-reveals-his-dream-marvel-role-and-its-a-hot-one/");


// switch(page){
// 	case "inputPage":
// 			searchButton.addEventListener('click',function(){
				
				
// 			})
// 	case 'outputPage':
// 		var cardData=window.localStorage.getItem('data');

function test(){
	console.log(testObject["2.article"]["20.nlp.summary"])
				var summary=testObject["2.article"]["20.nlp.summary"];
				var title=testObject["2.article"]["05.title"];
				var url=testObject["2.article"]["01.url"];
				var data={'title':title,'summary':summary,"url":url};
				window.localStorage.setItem('data', JSON.stringify(data));
};

function outputSummary(output,cardNum){

		var title=document.getElementById("title"+cardNum);
		var summary=document.getElementById("summary"+cardNum);
        var link=document.getElementById("search"+cardNum)
		title.innerHTML=output.title;
		summary.innerHTML=output.summary;
        link.setAttribute('href',output.url);
};
//$.when(summarizeAPI('https://www.cnet.com/culture/entertainment/keanu-reeves-reveals-his-dream-marvel-role-and-its-a-hot-one/')).then()
// test();
// data=JSON.parse(window.localStorage.getItem('data'));
// console.log(data);
// outputSummary(data,2);
var searchBar=document.getElementById("searchBar");
var searchButton=document.getElementById("searchButton");
var clearButton=document.getElementById('clearButton');

clearButton.addEventListener('click',function(){
    localStorage.clear()
});

searchButton.addEventListener("click", function (){
    console.log(searchBar.value);
    searchingAPI(searchBar.value)
    var cardContent=JSON.parse(localStorage.getItem('data0'));
    console.log(cardContent);
    outputSummary(cardContent,0);
})
  
//     console.log(urlArray);
//     for (i=0;i<urlArray.length;i++){
//         console.log(urlArray[i]);
//         summarizeAPI(urlArray[i],i);
//         window.location.href='indexCards.html';
//         var cardContent=JSON.parse(window.localStorage.getItem('data'+i));
//             outputSummary(cardContent,i);
// }
    ;