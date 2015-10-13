<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Sample layout rendering
		</title>
		<link href="style.css" rel="stylesheet" type="text/css"/>
		<link href="form.css" rel="stylesheet" type="text/css"/>
		<script src="FormValidate.js" type="text/javascript"></script>
	</head>
  
  <body>	
    <!-- header -->
    <div class="header">
		<div class="header_interior">
			 <a href="./index.html"><img src="images/logo.gif" alt="Logo" width="44" height="44" /> </a>
			<h1 class="title">Company name
			</h1>
		</div>
    </div>
	
    <!-- content -->
    <div class="content_body">
      <div class="content_interior">
        <div class="left_column">
          <div class="navigation">
            <ul class="markermenu">
              <li>
                <a href="./index.html">Home
                </a>
              </li>
              <li>
                <a href="./Services.html">Services</a>
              </li>
              <li>
                <a href="./index.html">Portfolio</a>
              </li>
              <li>
                <a href="./JoinUs.html">Join Us</a>
              </li>
              <li class="last-child">
                <a href="./index.html">Contact Us</a>
              </li>		
            </ul> 
          </div> <!-- navigation -->

          <div class="navigationbtm">
          </div>
          <br/>
          <img src="images/img-2.jpg" alt="sample 2"/>
		  	<ul class="markermenu">
				<li>
					<a href="http://validator.w3.org/check?uri=http%3A%2F%2Fa00919081.net76.net%2FLab7%2FJoinUs.html&amp;charset=%28detect+automatically%29&amp;doctype=Inline&amp;group=0">HTML5 Validation</a>
				</li>
				<li>
					<a href="https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fa00803488.net76.net%2FLab5%2FJoinUs.html&amp;profile=css3&amp;usermedium=all&amp;warning=1&amp;vextwarning=&amp;lang=en">CSS Validation</a>
				</li>
			</ul>
        </div> <!-- left_column -->
		
        <div class="right_column">
       
		  
		
			<!--Could not finish, incomplete PHP code down below -->
			<?php
				if($_SERVER["REQUEST_METHOD"] == "POST") {
				
					$fname = $_POST["first"];
					$fname = ucwords(strtolower($fname));
					
					$lname = $_POST["last"]
					$lname = icwords(strtolower($lname));
					
					$email = $_POST["myMail"];
					$email = ucwords(strtolower($email));
					
					$file = fopen("users.txt", "r");
					$array = array();
					$match;
					
					while(!feof("users.txt")) {
						$array[] = fgets($file, 4096);
						for ($i = 0; $i < count($array); ++$i) {
							$x = current($array);
							if(x == $fname || x == $lname || x == $email){
								
							}
						}
					}	
					fclose($file);
				}

			?>
		
        </div> <!-- right_column -->
      </div> <!-- content_interior -->
      <br class="joinUsBreak"><br/>
    </div> <!-- content_body -->
	
	<!-- footer-->
    <div class="footer">
      <div class="footer-inner">
        <div style="text-align:center;">Copyright &copy; 2010 Jacob Frank &amp; Alex Zielinski | Designed by: 
          <a href="#">A. Student
          </a>
        </div>
      </div> <!-- footer-inner -->
      <br class="joinUsBreak"><br/>
    </div> <!-- footer -->
  </body>
</html>
