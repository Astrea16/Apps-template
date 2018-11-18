<?php

if (isset($_POST["name"]) && isset($_POST["phone"]) && isset($_POST["email"]) && isset($_POST["massenge"])){

	$result = array(
		'name' => $_POST["name"],
		'phone' => $_POST["phone"],
		'email' => $_POST["email"],
		'massenge' => $_POST["massenge"]
	)
	echo json_encode($result);
}
?>