<?php
class DBcontroller

{
    // Dattabase Connection Properties
    protected $host = 'localhost';
    protected $protected = 'my459o1i_admin';
    protected $password = '3CrzLw-&b)}1';
    protected $database = 'my459o1i_mobile-shop';


    //protected $host = 'localhost';
    //protected $user = 'root';
    //protected $password = 'admin';
    //protected $database = 'mobile-shop';

    //connection property
    public $con = null;

    //Call constructor
    public function __construct()
    {
        echo 'in';
        $this->con = mysqli_connect($this->host, $this->user, $this->password, $this->database);

        if ($this->con->connect_error) {
            echo "Fail" . $this->con->connect_error;
        } else {
            echo 'connected!';
        }
    }


    public function __destruct()
    {

        $this->closeConnection();
    }

    // for mysql closing connection
    protected function closeConnection()
    {
        if ($this->con != null) {
            $this->con->close();
            $this->con = null;
        }
    }
}
