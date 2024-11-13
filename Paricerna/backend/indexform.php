<?php
// Database connection details
$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "health";

// Create connection
$conn = mysqli_connect($server_name, $username, $password, $database_name);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the form is submitted
if (isset($_POST['save'])) {
    // Sanitize and validate input values
    $First_Name = trim($_POST['First_Name'] ?? '');
    $Last_Name = trim($_POST['Last_Name'] ?? '');
    $Gender = trim($_POST['Gender'] ?? '');
    $Mobile_Number = trim($_POST['Mobile_Number'] ?? '');
    $Email = trim($_POST['Email'] ?? '');
    $Password = trim($_POST['Password'] ?? '');

    // Check if all fields are filled
    if (empty($First_Name) || empty($Last_Name) || empty($Gender) || empty($Mobile_Number) || empty($Email) || empty($Password)) {
        echo "All fields are required!";
    } else {
        // Prepare SQL statement
        $stmt = $conn->prepare("INSERT INTO registration_form (First_Name, Last_Name, Gender, Mobile_Number, Email, Password) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $First_Name, $Last_Name, $Gender, $Mobile_Number, $Email, $Password);

        // Execute and check
        if ($stmt->execute()) {
            echo "New Details Entry inserted successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    }
}

// Close the connection
mysqli_close($conn);
?>
