<?php
// Disable error reporting for production
error_reporting(0);
ini_set('display_errors', 0);

// Database configuration
define('DB_HOST', '');//change
define('DB_USER', '');//change
define('DB_PASS', '');//change
define('DB_NAME', '');

// Create database connection
function getConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS);
    
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
    
    return $conn;
}
function initializeDatabase() {
    try {
        $conn = getConnection();
        
        // Create database if not exists
        $sql = "CREATE DATABASE IF NOT EXISTS " . DB_NAME;
        if (!$conn->query($sql)) {
            throw new Exception("Error creating database: " . $conn->error);
        }
        
        // Select the database
        $conn->select_db(DB_NAME);
        
        // Create contact_form table if not exists
        $sql = "CREATE TABLE IF NOT EXISTS contact_form (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            subject VARCHAR(200) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        if (!$conn->query($sql)) {
            throw new Exception("Error creating table: " . $conn->error);
        }
        return $conn;
    } catch (Exception $e) {
        throw new Exception("Database initialization failed: " . $e->getMessage());
    }
}



?>
