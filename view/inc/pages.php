<?php
if ((isset($_GET['page']))) {
	switch ($_GET['page']) {
		case "homepage";
			include("module/home/controller/controller_home.php");
			break;
		case "controller_sport";
			include("module/sport/controller/" . $_GET['page'] . ".php");
			break;
		case "controller_like";
			include("module/like_datatable/controller/" . $_GET['page'] . ".php");
			break;
		case "controller_home";
			include("module/home/controller/" . $_GET['page'] . ".php");
			break;
		case "controller_contact";
			include("module/contact/controller/" . $_GET['page'] . ".php");
			break;
		case "controller_shop";
			include("module/shop/controller/" . $_GET['page'] . ".php");
			break;
		case "controller_login";
			include("module/login/controller/" . $_GET['page'] . ".php");
			break;
			case "controller_cart";
			include("module/cart/controller/" . $_GET['page'] . ".php");
			break;
		case "services";
			include("module/services/" . $_GET['page'] . ".html");
			break;
		case "aboutus";
			include("module/aboutus/" . $_GET['page'] . ".html");
			break;
		case "contactus";
			include("module/contact/view/" . $_GET['page'] . ".html");
			break;
		case "404";
			include("view/inc/error" . $_GET['page'] . ".php");
			break;
		case "503";
			include("view/inc/error" . $_GET['page'] . ".php");
			break;
		default;
			include("module/home/controller/controller_home.php");
			break;
	}
} else {
	$_GET['op'] = 'list';

	include('module/home/controller/controller_home.php');
}
