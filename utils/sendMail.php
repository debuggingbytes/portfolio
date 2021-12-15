<?php

if (!empty($_POST['submit'])) {

  $fullName = $_POST['fName'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $sendMessage =
    "Hello! it looks like someone decided to contact you on your portfolio site.

  Full Name: " . $fullName . " \n\r
  Email: " . $email . "\n\r
  Message : \n\r " . $message;

  mail("kris@debuggingbytes.com", "Contact from Portfolio", $sendMessage);
  echo "SENT";
} else {
  die("There was an error");
}
