<?php
  $admin_email = "Psalm127.1a@gmail.com";  
  $name = $_POST["firstName"];
  $lastName = $_POST["lastName"];
  $message = $_POST["suggestions"];
  $fullName = $name . ' ' . $lastName;
  $email = $_POST["email"];
  $subject = "Contact";
  $content = $fullName . "\n" . $message;

  mail($admin_email, $subject, $content ,"From:" . $email);
?>