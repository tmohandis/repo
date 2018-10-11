<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title></title>
    <style type="text/css">

        .container{
            height: 900px;
        }
        .content {
            display: block;
            height: 90%;
            background-color: red;
            border: 1px solid;
        }

        .footer {
            display: block;
            height: 10%;
            background-color: blue;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="content"></div>
    <div class="footer">
        <?php
        echo date("l dS of F Y h:i:s A");
        ?>

    </div>
</div>
</body>
</html>