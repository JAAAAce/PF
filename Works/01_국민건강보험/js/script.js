//https://api.openweathermap.org/data/2.5/weather?&id=1835847&lang=kr&appid=3f5ca4513f443084c8d926e049d03c37&units=metric
//서울 1835847
//수원 1835553
//광주 1841811
//부산 1838524
//대구 1835327
//제주 1846266
$.getJSON('https://api.openweathermap.org/data/2.5/weather?&id=1835847&lang=kr&appid=3f5ca4513f443084c8d926e049d03c37&units=metric', function(data){ //JSON파일을 가져옴.('경로', function(){}) 
                //alert(data.weather[0].icon)
    let temp=data.main.temp.toFixed(1) + '˚'; //소숫점 첫째자리까지
    let icon=data.weather[0].icon;
    $('.w_seoul .cicon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png"/>'); //아이콘은 이미지 https://openweathermap.org/weather-conditions 에서 url 붙여서 가운데 내용을 편집(10d)하고 변수'+icon+'을 넣음
    $('.w_seoul .ctemp').append(temp);
});

$.getJSON('https://api.openweathermap.org/data/2.5/weather?&id=1835553&lang=kr&appid=3f5ca4513f443084c8d926e049d03c37&units=metric', function(data){ //JSON파일을 가져옴.('경로', function(){}) 
    //alert(data.weather[0].icon)
    let temp=data.main.temp.toFixed(1) + '˚'; //소숫점 첫째자리까지
    let icon=data.weather[0].icon;
    $('.w_suwon .cicon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png"/>'); //아이콘은 이미지 https://openweathermap.org/weather-conditions 에서 url 붙여서 가운데 내용을 편집(10d)하고 변수'+icon+'을 넣음
    $('.w_suwon .ctemp').append(temp);
});

$.getJSON('https://api.openweathermap.org/data/2.5/weather?&id=1841811&lang=kr&appid=3f5ca4513f443084c8d926e049d03c37&units=metric', function(data){ //JSON파일을 가져옴.('경로', function(){}) 
    //alert(data.weather[0].icon)
    let temp=data.main.temp.toFixed(1) + '˚'; //소숫점 첫째자리까지
    let icon=data.weather[0].icon;
    $('.w_gwangju .cicon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png"/>'); //아이콘은 이미지 https://openweathermap.org/weather-conditions 에서 url 붙여서 가운데 내용을 편집(10d)하고 변수'+icon+'을 넣음
    $('.w_gwangju .ctemp').append(temp);
});

$.getJSON('https://api.openweathermap.org/data/2.5/weather?&id=1838524&lang=kr&appid=3f5ca4513f443084c8d926e049d03c37&units=metric', function(data){ //JSON파일을 가져옴.('경로', function(){}) 
                //alert(data.weather[0].icon)
    let temp=data.main.temp.toFixed(1) + '˚'; //소숫점 첫째자리까지
    let icon=data.weather[0].icon;
    $('.w_busan .cicon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png"/>'); //아이콘은 이미지 https://openweathermap.org/weather-conditions 에서 url 붙여서 가운데 내용을 편집(10d)하고 변수'+icon+'을 넣음
    $('.w_busan .ctemp').append(temp);
});

$.getJSON('https://api.openweathermap.org/data/2.5/weather?&id=1835327&lang=kr&appid=3f5ca4513f443084c8d926e049d03c37&units=metric', function(data){ //JSON파일을 가져옴.('경로', function(){}) 
    //alert(data.weather[0].icon)
    let temp=data.main.temp.toFixed(1) + '˚'; //소숫점 첫째자리까지
    let icon=data.weather[0].icon;
    $('.w_daegu .cicon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png"/>'); //아이콘은 이미지 https://openweathermap.org/weather-conditions 에서 url 붙여서 가운데 내용을 편집(10d)하고 변수'+icon+'을 넣음
    $('.w_daegu .ctemp').append(temp);
});

$.getJSON('https://api.openweathermap.org/data/2.5/weather?&id=1846266&lang=kr&appid=3f5ca4513f443084c8d926e049d03c37&units=metric', function(data){ //JSON파일을 가져옴.('경로', function(){}) 
    //alert(data.weather[0].icon)
    let temp=data.main.temp.toFixed(1) + '˚'; //소숫점 첫째자리까지
    let icon=data.weather[0].icon;
    $('.w_jeju .cicon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png"/>'); //아이콘은 이미지 https://openweathermap.org/weather-conditions 에서 url 붙여서 가운데 내용을 편집(10d)하고 변수'+icon+'을 넣음
    $('.w_jeju .ctemp').append(temp);
});




$.ajax({
    url: "news.php",
    dataType: 'xml',
    success: function(data){
        //console.log(data) //실행되지 않음! 신문사가 막아놓음(php선언문 작성해야함 > news.php파일)
        //xml파일 보고 가져올 내용 꼭 확인하기
        let $items=$(data).find("item");
        if($items.length>0){
            //기사가 너무 많아서 다 가져오지 말고 10개만 가져오기
            $items=$items.slice(0, 4);
            //ul, li만들어서 기사 넣기
            let $ulTag=$("<ul />");
            $.each($items, function(i, o){ //index, object
                let $title=$(o).find("title").text(); //변수에 담음
                let $link=$(o).find("link").text(); 

                let $aTag=$("<a />").attr({"href":$link, "target": "_blank"}).text($title);
                let $liTag=$("<li />").append($aTag);
                $ulTag.append($liTag);
            })
            $('.health_news').append($ulTag); //서버에 업로드해서 확인
        }
    }
});




var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5292, 126.9249), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc = '../img/map_marker.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(38, 38), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.5292, 126.9249); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

var content = '<div class="customoverlay">' +
    '    <span class="title">서울강원지역본부</span>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.5292, 126.9249);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1 
});

