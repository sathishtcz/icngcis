<?php

$allowed_origins = [
    "https://icngcis.org","https://www.icngcis.org",
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}



// header("Access-Control-Allow-Origin: *");

// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");