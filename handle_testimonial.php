<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['testimonial'])) {
    $name = $_POST['name'];
    $testimonial = $_POST['testimonial'];
    
    $sql = "INSERT INTO testimonials (name, testimonial) VALUES (?, ?)";
    $stmt = $db->prepare($sql);
    $stmt->execute([$name, $testimonial]);
    
    echo json_encode(['success' => true]);
    exit;
}
?>