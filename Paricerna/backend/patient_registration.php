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

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize and validate input data
    $Full_Name = mysqli_real_escape_string($conn, trim($_POST['Full_Name'] ?? ''));
    $Age = intval($_POST['Age'] ?? 0);
    $Gender = mysqli_real_escape_string($conn, trim($_POST['Gender'] ?? ''));
    $Address = mysqli_real_escape_string($conn, trim($_POST['Address'] ?? ''));
    $Choose_Hospital = mysqli_real_escape_string($conn, trim($_POST['hospital'] ?? ''));
    $Describe_Your_Condition = mysqli_real_escape_string($conn, trim($_POST['condition'] ?? ''));

    // Validate that required fields are filled
    if (empty($Full_Name) || $Age <= 0 || empty($Gender) || empty($Address) || empty($Choose_Hospital)) {
        echo "All required fields must be filled.";
    } else {
        // Prepare SQL statement
        $stmt = $conn->prepare("INSERT INTO patient_registration (Full_Name, Age, Gender, Address, Choose_Hospital, Describe_Your_Condition) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sissss", $Full_Name, $Age, $Gender, $Address, $Choose_Hospital, $Describe_Your_Condition);

        // Execute and check if the data was inserted
        if ($stmt->execute()) {
            echo "Patient registration successful!";
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
