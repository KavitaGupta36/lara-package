<!DOCTYPE html>
<html>
<head>
	<title>Chat Pannel</title>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<link type="text/css" rel="stylesheet" href="{{url('css/chat.css')}}">
	<script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
	<div class="panel-body" id="app">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-sm-12 col-xs-12">
			<h3 style="align-items: center; margin-left: 600px;">Chat Box</h3>
				<div class="left">
						<!-- <message-component></message-component> -->
						<chat-form></chat-form>
					</div>
				</div>
			</div>
		</div>
	</div>
<script src="{{asset('/js/app.js')}}" type="text/javascript"></script>
</body>
</html>
