function searchingAPI(topic){
    var search= topic.replace(" ","%20")
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q="+search+"&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "b1cd874ba9mshbb1dbfdf1946d17p1b49d1jsn18b3f8089701",
            "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function test(response) {
        var output=[];
        topicNum=0;
        for (var i=0;i<response.value.length;i++){
            output.push(response.value[i].url);
            console.log(output)
        };
        console.log(output)
        summarizeAPI(output[0]);
        window.localStorage.setItem("urlArray",JSON.stringify(output));
        return output;
    });
};



function summarizeAPI(url){
    var input0=url.replace("http://",'http%3A//')
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
        console.log(response)
        try {
		var summary=response["2.article"]["20.nlp.summary"];
		var title=response["2.article"]["05.title"];
		var url=response["2.article"]["01.url"];
        var data={'title':title,'summary':summary,'url':url};
		window.localStorage.setItem('data'+dataNumber, JSON.stringify(data));
        window.localStorage.setItem("searches",dataNumber)
        }
        catch(err){
            //include modal to display that there was an error gathering the data
            console.log('ERROR IN NEWS ARTICLE')
        }
    })
};


function createCard(num){
    var card=document.createElement("div")
    card.setAttribute('class','card');
    card.setAttribute('class','is-shadowless');
    var header=document.createElement("header")
    header.setAttribute('class','card-header');
    var title=document.createElement("p")
    title.setAttribute('id','title'+num);
    var button=document.createElement("button")
    button.setAttribute('class','card-header-icon');
    button.setAttribute("aria-label","more options");
    var icon=document.createElement("span")
    icon.setAttribute('class','icon');
    var magGlass=document.createElement("a")
    magGlass.setAttribute('class','fa-solid fa-magnifying-glass');
    magGlass.setAttribute('aria-hidden','true');
    magGlass.setAttribute('id','search'+num);
    var cardBody=document.createElement("div")
    cardBody.setAttribute('class','card');
    var cardContent=document.createElement("div")
    cardContent.setAttribute('class','card-content');
    var summary=document.createElement("div")
    summary.setAttribute('class','content');
    summary.setAttribute("id","summary"+num);

    card.appendChild(header);
    header.appendChild(title);
    header.appendChild(button);
    button.appendChild(icon);
    icon.appendChild(magGlass);
    card.appendChild(cardBody);
    cardBody.appendChild(cardContent);
    cardContent.appendChild(summary);

    var cardContainer=document.getElementById('column'+columnNum)
    cardContainer.appendChild(card);
    if (columnNum>=3){
        columnNum=0
    }else{
        columnNum +=1;
    }

};

function recreateSummary(output,increment){
    createCard(increment);
    var title=document.getElementById("title"+increment);
    var summary=document.getElementById("summary"+increment);
    var link=document.getElementById("search"+increment);
    title.innerHTML=output.title;
    summary.innerHTML=output.summary;
    link.setAttribute('href',output.url);


};
function outputSummary(output){
    createCard(dataNumber);
    var title=document.getElementById("title"+dataNumber);
    var summary=document.getElementById("summary"+dataNumber);
    var link=document.getElementById("search"+dataNumber);
    title.innerHTML=output.title;
    summary.innerHTML=output.summary;
    link.setAttribute('href',output.url);
    dataNumber +=1;

};

var searchBar=document.getElementById("searchBar");
var searchButton=document.getElementById("searchButton");
var clearButton=document.getElementById('clearButton');
var againButton=document.getElementById('againButton');
var searches=localStorage.getItem('searches');

var topicNum;
var dataNumber;
var columnNum=0;


if (searches >=1){
    for (var i=0;i<=searches;i++){
    var savedData=JSON.parse(localStorage.getItem('data'+i));
    console.log(savedData)
    recreateSummary(savedData,i);}
    dataNumber =searches;
}else{
    dataNumber=0;
};

clearButton.addEventListener('click',function(){
    localStorage.clear()
});

searchButton.addEventListener("click", function (){
    searchingAPI(searchBar.value);
    var cardContent=JSON.parse(localStorage.getItem('data'+dataNumber));
    outputSummary(cardContent);

});
  
againButton.addEventListener('click',function(){
    if(topicNum<=9){
        topicNum +=1;
        var urlArray=JSON.parse(localStorage.getItem('urlArray'));
        summarizeAPI(urlArray[topicNum]);
        var cardContent=JSON.parse(localStorage.getItem('data'+dataNumber));
        outputSummary(cardContent);
    }else{
        //include modal to say that there are no more searches for that topic
        console.log('Reached the end of news articles for that topic! please input a new topic')
    }

});