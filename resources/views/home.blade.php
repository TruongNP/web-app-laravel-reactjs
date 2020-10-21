<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">


        <!-- Styles -->
        <link rel="stylesheet" href="https://mdbootstrap.com/previews/admin-demo/css/mdb-pro.min.css">
        <link rel="stylesheet" href="https://mdbootstrap.com/previews/admin-demo/css/mdb.ecommerce.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
        <link rel="canonical" href="https://mdbootstrap.com/snippets/jquery/mdbootstrap/102535/">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <style>
            body {
                font-family: 'Nunito';
            }
        </style>
    </head>
    <body class="antialiased">
        
        <header id="header"></header>
        <main id="main">
            <div id="sidebar"></div>
        </main>
        <footer id="footer"></footer>

        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="https://mdbootstrap.com/previews/admin-demo/js/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="https://mdbootstrap.com/previews/admin-demo/js/bootstrap.js"></script>
        <script type="text/javascript" src="https://mdbootstrap.com/previews/admin-demo/js/mdb.min.js"></script>
        <!-- React JS -->
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
