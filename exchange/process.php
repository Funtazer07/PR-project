<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get input values
    $userName = isset($_POST["name"]) ? $_POST["name"] : '';
    $userEmail = isset($_POST["email"]) ? $_POST["email"] : '';
    $userPhone = isset($_POST["phone"]) ? $_POST["phone"] : '';
    $rooms = isset($_POST["istabas"]) ? $_POST["istabas"] : '';
    $rooms1 = isset($_POST["customRoom"]) ? $_POST["customRoom"] : '';
    $area = isset($_POST["area"]) ? $_POST["area"] : '';
    $toEmail = "a.dvoskins@student.fontys.nl";  // Put your email

    // Prepare email headers
    $mailHeaders = "Name: " . $userName .
        "\r\nEmail: " . $userEmail .
        "\r\nPhone: " . $userPhone .
        "\r\nRooms I have: " . $rooms .
        "\r\nRooms I have: " . $rooms1 .
        "\r\nRooms I want: " . $area . "\r\n";

    if (mail($toEmail, $userName, $mailHeaders)) {
        echo "<script>alert('Your contact information has been received successfully.');</script>";
    } else {
        echo "<script>alert('There was a problem sending the email.');</script>";
    }

    // Redirect back to index.html
    echo "<script>setTimeout(function(){ window.location.href = 'index.html'; }, 400);</script>";
    exit; // Terminate the script to prevent further output
}
?>
