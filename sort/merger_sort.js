/**********************************************************************
 *                                                                    *
 *  Problem: Merge Sort                                               *
 *                                                                    *
 *  Prompt: Given an unsorted array of numbers,                       *
 *          return a sorted array using merge sort.                   *
 *                                                                    *
 *  Input:  An unsorted array                                         *
 *  Output: A sorted array                                            *
 *                                                                    *
 *  Example: input = [3,5,1,4,7,2,6,8] , output = [1,2,3,4,5,6,7,8]   *
 *                                                                    *
 *  What are the time and auxiliary space complexity?                 *
 *            T: O(n^2) S: O(1)                                       *
 **********************************************************************/

 function mergeSort(array)
 {
   if (array.length < 2)
   return array;

   var middle = parseInt(array.length / 2);
   var left   = array.slice(0, middle);
   var right  = array.slice(middle, array.length);

   return merge(mergeSort(left), mergeSort(right));
 }

 function merge(left, right)
 {
   var result = [];
   while (left.length && right.length) {
     if (left[0] <= right[0]) {
       result.push(left.shift());
     } else {
       result.push(right.shift());
     }
   }

   while (left.length)
   result.push(left.shift());

   while (right.length)
   result.push(right.shift());

   return result;
 }
