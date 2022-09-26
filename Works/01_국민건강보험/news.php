<?php
    $ch=curl_init(); //cURL을 사용하기 위해 생성
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); //인증서 검사 여부
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //결과값을 받을 것인지 여부
    curl_setopt($ch, CURLOPT_HEADER, 0); //헤더 정보 출력 여부
    curl_setopt($ch, CURLOPT_URL, "https://rss.donga.com/health.xml"); //접속할 url
    //동아일보는 https://rss.donga.com/ 등
    $url_source=curl_exec($ch); //세션 실행
    curl_close($ch); //세션 종료

    echo $url_source
    ?>