<?php

if (!$_POST) exit('No direct script access allowed');
 
if (!isset($_POST['f'])) exit('No direct script access allowed');
if (!isset($_POST['f']['name'])) exit('No direct script access allowed');
if (!isset($_POST['f']['email'])) exit('No direct script access allowed');
if (!isset($_POST['f']['comment'])) exit('No direct script access allowed');
if (!isset($_POST['f']['checkbox'])) exit('No direct script access allowed');
 
$email = trim(strip_tags($_POST['f']['email']));
$name = trim(strip_tags($_POST['f']['name']));
$comment = trim(strip_tags($_POST['f']['comment']));
$checkbox = trim(strip_tags($_POST['f']['checkbox']));
 
if (!filter_var($email, FILTER_VALIDATE_EMAIL))
{
	exit('Неверный email! Обновите страницу (F5) и укажите правильный адрес');
}
 
if (!$name)
{
	exit('Не указано имя! Обновите страницу (F5) и укажите своё имя');
}
 
 
$to = 'info@web-project-studio.ru'; 

$subject = 'Заявка от: ' . $name; 
 

$message = 'Имя: ' . $name . "\r\n" . 'Email: ' . $email . "\r\n" . "Комментарий: " . $comment; 
 

$headers = 'From: '. $email . "\r\n";

$subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
$subject = preg_replace("/(\t)/", " ", $subject);
$subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

@mail($to, $subject, $message, $headers);
 
echo 'Спасибо, ваше сообщение отправлено!';
