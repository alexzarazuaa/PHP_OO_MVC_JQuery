<?php
if ((isset($_GET['page'])) && ($_GET['page'] === "controller_sport")) {
	include("view/inc/top_page_sport.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_like")) {
	include("view/inc/top_page_like.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_home")) {
	include("view/inc/top_page_home.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_contact")) {
	include("view/inc/top_page_contact.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_shop")) {
	include("view/inc/top_page_shop.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_login")) {
	include("view/inc/top_page_login.php");
}  else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_cart")) {
	include("view/inc/top_page_cart.php");
}
else {
	include("view/inc/top_page.php");
}

session_start();
?>
<div id="wrapper">
	<div id="header">
		<?php
		include("view/inc/header.html");
		?>
	</div>
	<div id="menu">
		<?php

		if (!$_SESSION) {
	
			include("view/inc/menu.html");
			
		} else {
			
			switch ($_SESSION['tipo']) {
					//	print_r("heeyy");
			//die();
				case 'admin':
					include("view/inc/menu_admin.html");
					break;

				case 'Client':
					include("view/inc/menu_user.html");
					break;

				default:
					include("view/inc/menu.html");
					break;
			}
		}
		?>
	</div>

	<div id="">
		<?php
		include("view/inc/pages.php");
		?>
		<br style="clear:both;" />
	</div>
	<div id="footer">
		<?php
		include("view/inc/footer.html");
		?>
	</div>
</div>
<?php
include("view/inc/bottom_page.php");
?>