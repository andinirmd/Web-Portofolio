<?php
require_once 'config.php';  // Import koneksi database

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['contact'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    $stmt = $db->prepare($sql);
    $stmt->execute([$name, $email, $message]);
    
    echo json_encode(['success' => true]);
    exit;
}
?>