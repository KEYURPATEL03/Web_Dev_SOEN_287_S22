<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exercise1</title>
    <style>
        #sum-array{
            margin-top:5px;
            display:block;
            width:200px;
        }
        #submit-button{
            margin-top:5px;
            margin-bottom:20px;
        }
        #first-last-string{
            display:block;
            width:200px;
        }
    </style>
</head>
<body>
    <h1 id='Function demonstration using PHP'>
        <?php
            if(isset($_POST['submit-button-first-last']))
                echo 'First/Last Uppercase';
            else if(isset($_POST['submit-button-average']))
                echo 'Average Function';
            else
                echo 'Function demonstration using PHP';
        ?>
    </h1>
    <h2>
       <?php
            require __DIR__ . '/E1-functions.php';
            if(isset($_POST['submit-button-first-last']) && isset($_POST['first-last-string'])){
                echo uppercaseFirstandLast($_POST['first-last-string']);
            }
            else if(isset($_POST['submit-button-average']) && isset($_POST['sum-array']))
            {
                $values = findAverage_and_Median([$_POST['sum-array']]);
                echo 'Average: ', $values[0], ' Median: ', $values[1];
            }
       ?>
    </h2>
    
    <br>
    <form method="POST">
        <label>Function to Change Last and First Character To Upper-Case:</label>
        <input type='text' id='first-last-string-id' name = 'first-last-string' placeholder = 'Enter a string of words'>
        <input type='submit' id='submit-button-first-last-id' name = 'submit-button-first-last'>
    </form>
    
    <br>
    <form method="POST">
        <label>Function to Find Average/Median:</label>
        <input type='text' id='sum-array-id' name = 'sum-array' placeholder='Seperate by comma'>
        <input type='submit' id='submit-button-sum-id' name = 'submit-button-average'>
    </form>
</body>
</html>