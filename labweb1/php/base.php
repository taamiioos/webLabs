<?php
include 'checkZone.php';

class RequestValidator
{
    private $params;

    function __construct($params)
    {
        $this->params = $params;
    }

    private function checkParams()
    {
        foreach ($this->params as $val) {
            if (!isset($_POST[$val])) {
                http_response_code(406);
                die();
            }
        }
    }

    private function checkTypeParams()
    {
        foreach ($this->params as $val) {
            if (!is_numeric($_POST[$val])) {
                http_response_code(415);
                die();
            }
        }
    }

    public function checkAll()
    {
        $this->checkParams();
        $this->checkTypeParams();
    }
}

$requestValidator = new RequestValidator(array("x", "y", "r", "time"));
$requestValidator->checkAll();

$y = $_POST['y'];
$r = $_POST['r'];
$x = $_POST['x'];
$time = $_POST['time'];


$checkZone = new CheckZone($x, $y, $r);
$flag = $checkZone->check() ? "TRUE" : "FALSE";

$time = date('H:i:s');
$start_time = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 3);
$res = "<tr>" .
    "<td> $x </td>" .
    "<td> $y </td>" .
    "<td> $r </td>" .
    "<td> $flag </td>" .
    "<td> $start_time </td>" .
    "<td> $time </td>" .
    "</tr>";
echo $res;