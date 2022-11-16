<?php

date_default_timezone_set("America/Toronto");
if(isset($_COOKIE['visits']))
{
    echo 'Hello, this is the ', $_COOKIE['visits'], ' time that you are visiting my webpage.<br>';
    echo "Last time you visited my webpage on: ", $_COOKIE['date'];
    $cookieValue = $_COOKIE['visits'];
    $cookieValue++;
    setcookie('visits',$cookieValue,time() + 3600);
    setcookie('date',date("D M j H:i:s T Y"),time() + 3600);
    
}
else
{
    echo 'Welcome to my webpage! It is your first time that you are here.';
    setcookie('visits', 2 ,time() + 3600);
    setcookie('date',date("D M j H:i:s T Y"),time() + 3600);
}



?>   