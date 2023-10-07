<?php

$name = $_POST['name'];
$email = $_POST['emailaddress'];
$number = $_POST['mobile'];
$modelno = $_POST['modelno'];
$message = $_POST['message'];


$to = "argosaof@gmail.com";

$subject = "Mail From Ajey office furniture Website";
$txt = "Name = ". $name . "\r\n Email = " . $email . "\r\n Mobile number =" . $number ."\r\n Model no = " . $modelno . "\r\n Message =" . $message ;

$headers = "From: technologieskaira@gmail.com" . "\r\n" . 
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

header("location:thankyou.html");
?>       