<?php

    function uppercaseFirstandLast($input)
    {
        if(gettype($input) == 'string'){

            $array = explode(" ",$input);
            $newStr = "";
            return strrev(ucwords(strrev(ucwords(strtolower($input)))));
        }
        return false;
    }
    function findAverage_and_Median($array)
    {
        $array = explode(',',$array[0]);
        if(gettype($array) == 'array'){
            $sum = 0;
            foreach($array as $v){
                if(!is_numeric($v) )
                    continue;
                $sum += $v;
            }
            $average = $sum / count($array);
            
            sort($array);

            $middle = count($array)/2;
            if(gettype($middle) == 'float')
                $middle = round($middle);
            $median = $array[$middle];
            
            $sumMedian = [$average,$median];
            return $sumMedian;
        }
        return false;
    }
    
    
?>