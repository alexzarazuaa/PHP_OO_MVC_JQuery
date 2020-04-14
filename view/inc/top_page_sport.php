<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>Alta de Usuario</title>


	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.css" />
	<!-- dataTables -->
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<!-- dataTables -->
	<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
	 <!-- //LINKS PLANTILLA -->
			<!-- Custom-Files -->
			<link rel="stylesheet" href="view/css/bootstrap.css">
			<!-- Bootstrap-Core-CSS -->
			<link rel="stylesheet" href="view/css/style.css" type="text/css" media="all" />
			<!-- Style-CSS -->
			<!-- font-awesome-icons -->
			<link href="view/css/font-awesome.css" rel="stylesheet">
			<!-- //font-awesome-icons -->
			<!-- /Fonts -->
			<link href="//fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700" rel="stylesheet">
			<link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900" rel="stylesheet">
			<!-- //Fonts -->
	 <!-- //LINKS PLANTILLA -->
	 <!-- DATEPICKER-->
	<script type="text/javascript">
		$(function() {
			$('#date_birthday').datepicker({
				dateFormat: 'dd/mm/yy',
				changeMonth: true,
				changeYear: true,
				yearRange: '1900:2020',
				onSelect: function(selectedDate) {}
			});
		});
	</script>
	<link href="view/css/style.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src=view/Lang/translate.js></script>
	<script src="module/sport/model/validate_sport.js"></script>
	<script src="module/sport/model/read_modal.js"></script>
	<script src="view/js/search/view/js/fsearch.js"></script>
	<script src="view/js/Activiti/activiti.js"></script>
	<script src="module/login/model/main_menus.js"></script>
	<link rel="icon" type="image/png" sizes="192x192" href="view/img/fav.png">
</head>

<body>