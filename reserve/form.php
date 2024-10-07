<?php
// Получаем данные из полей ввода
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$to = 'andvoskin@gmail.com';
$header = 'Pietiekšanas forma'
// Собираем все данные в письмо
$message = "Имя пользователя: $name \nЭлектронная почта: $email \nОтзыв: $phone";
// Отправляем письмо
$send = mail($to, $header, $message, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
?>