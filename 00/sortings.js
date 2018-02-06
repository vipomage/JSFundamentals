/*
--------------------------------------------------------------------------------------------------
---  count/size descending order  10 - 9 - 8 ....

.sort((a,b)=> a < b))

--------------------------------------------------------------------------------------------------
--- Lexicographically/Alphabetically A - > B

.sort((a,b)=> a > b)
.sort()

--------------------------------------------------------------------------------------------------
------Order by number ascending then by alphabetical

if(a !== b) {
            return(a - b); // length or number
        } else {
            return a.localeCompare(b); //string
        }
-------------------------------------------------------------------------------------------------
in ascending order based on their length, if two arrays have the same length they should be printed
in order of being received from the input. Each individual array should be printed in descending order

let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
--------------------------------------------------------------------------------------------------

first criteria goes last ...
 */