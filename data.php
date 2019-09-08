<?php header( 'Location: /index.html' ) ;  ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>My CV Page | Data</title>
</head>
<body>

<?php
	if (isset($_POST['submit'])) {
		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$subject = $_POST['subject'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		echo "First Name - $fname <br>
		Last Name - $lname <br>
		Email - $email <br>
		Subject - $subject <br>
		Message - $message <br>";
	} 
?>

</body>
</html>
	