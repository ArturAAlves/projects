<?php

class Cart
{
    public $db = null;

    public function __construct(DBcontroller $db)
    {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }

    //Insert into Cart table
    public function insertIntoCart($params = null, $table = "cart")
    {
        if ($this->db->con != null) {
            if ($params != null) {

                $columns = implode(',', array_keys($params));
                // print_r($columns);
                $values = implode(',', array_values($params));
                // print_r($values);

                $query_string = sprintf("INSERT INTO %s(%s) VALUES (%s)", $table, $columns, $values);
                // echo $query_string;

                $result = $this->db->con->query($query_string);
                return $result;
            }
        }
    }

    //inisert into WishList
    public function insertIntoWIshlist($params = null, $table = "wishlist")
    {
        if ($this->db->con != null) {
            if ($params != null) {
                //"insert into cart(user_id) values (0)"
                //get trablçes columns
                $columns = implode(',', array_keys($params));
                // print_r($columns);
                $values = implode(',', array_values($params));
                // print_r($values);

                $query_string = sprintf("INSERT INTO %s(%s) VALUES (%s)", $table, $columns, $values);
                // echo $query_string;

                $result = $this->db->con->query($query_string);
                return $result;
            }
        }
    }

    //get user_id and Item_id and insert into cart table

    public function addToCart($userid, $itemid)
    {
        if (isset($userid) && isset($itemid)) {
            $params = array(
                "item_id" => $itemid,
                "user_id" => $userid,
            );

            //insert data into cart
            $result = $this->insertIntoCart($params);
            if ($result) {
                header("location:" . $_SERVER['PHP_SELF']);
            }
        }
    }

    //delete cart item using cart item ID
    // delete cart item using cart item id
    public function deleteCart($item_id = null, $table = 'cart')
    {
        if ($item_id != null) {
            $result = $this->db->con->query("DELETE FROM {$table} WHERE item_id={$item_id}");
            if ($result) {
                header("Location:" . $_SERVER['PHP_SELF']);
            }
            return $result;
        }
    }



    //calculate subtotal
    public function getSum($arr)
    {
        if (isset($arr)) {
            $sum = 0;
            foreach ($arr as $item) {
                $sum += floatval($item[0]);
            }
        }

        return $sum;
        // return sprintf('%.2f', $sum);
    }




    // get item_it of shopping cart list
    public function getCartId($cartArray = null, $key = "item_id")
    {
        if ($cartArray != null) {
            $cart_id = array_map(function ($value) use ($key) {
                return $value[$key];
            }, $cartArray);
            return $cart_id;
        }
    }



    public function addToWish($item_id = null, $table = 'wishlist', $fromTable = 'cart')
    {
        if ($item_id != null) {
            $query = "INSERT INTO $table SELECT * FROM {$fromTable} WHERE item_id = {$item_id};";
            $query .= " DELETE FROM {$fromTable} WHERE item_id = {$item_id};";
            echo $query;
        }

        $result = $this->db->con->multi_query($query);
        if ($result) {
            header("location:" . $_SERVER['PHP_SELF']);
        }
        return $result;
    }


    // //add to wishlist
    // public function addToWish($userid, $itemid)
    // {
    //     if (isset($userid) && isset($itemid)) {
    //         $params = array(
    //             "item_id" => $itemid,
    //             "user_id" => $userid,
    //         );

    //         //insert data into cart
    //         $result = $this->insertIntoWIshlist($params);
    //         if ($result) {
    //             header("location:" . $_SERVER['PHP_SELF']);
    //         }
    //     }



    public function deleteWish($item_id = null, $table = 'wishlist')
    {
        if ($item_id != null) {
            $result = $this->db->con->query("DELETE FROM {$table} WHERE item_id={$item_id}");
            if ($result) {
                header("Location:" . $_SERVER['PHP_SELF']);
            }
            return $result;
        }
    }


    //get user_id and Item_id and insert into cart table

    public function addToCartProduct($userid, $itemid)
    {
        if (isset($userid) && isset($itemid)) {
            $params = array(
                "item_id" => $itemid,
                "user_id" => $userid,
            );

            //insert data into cart
            $result = $this->insertIntoCart($params);
            if ($result) {
                header("location:../php");
            }
        }
    }
}
