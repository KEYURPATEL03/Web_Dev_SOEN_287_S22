function addNumbers(numArray){
            let sum=0;
            for(var i = 0; i < numArray.length; i++){
                sum = sum + numArray[i];
            }
            return sum;
        }

function getCurrentDate(){
            var date = new Date();
            var dateString = date.toDateString();
            alert("Today\'s date is: " + dateString);
        }

function arrayToString(wordArray){
            var concatWordArray = wordArray.join("");
            return concatWordArray;
        }

function findMaxNumber(arr){
            if (arr[0] == undefined) return;
				let max = arr[0];
				for (i = 1; i < arr.length; i++) {
					if (max < arr[i]) {
						max = arr[i];
					}
				}
				return max;
        }

function getDigits(str){
            var digitString = "";
            for(var i = 0; i<str.length; i++){
                if(str[i] == "1" || str[i] == "2" || str[i] == "3" || str[i] == "4" || str[i] == "5" || str[i] == "6"
                    || str[i] == "7" || str[i] == "8" || str[i] == "9" || str[i] == "0"){
                    
                    digitString += String(str[i]);
                }
            }
            return digitString;
        }

function reverseString(str){
            var reverse = "";
            var j = str.length - 1;
            for(var i = j; i>=0; i--){
                reverse += str[i];
            }
            return reverse;
        }
