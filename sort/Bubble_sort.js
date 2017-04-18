/** ********************************************************************
 *                                                                    *
 *  Problem: Bubble Sort                                              *
 *                                                                    *
 *  Prompt: Given an unsorted array of numbers,                       *
 *          return a sorted array using bubble sort.                  *
 *                                                                    *
 *  Input:  An unsorted array                                         *
 *  Output: A sorted array                                            *
 *                                                                    *
 *  Example: input = [3,5,1,4,7,2,6,8] , output = [1,2,3,4,5,6,7,8]   *
 *                                                                    *
 *  What are the time and auxiliary space complexity?                 *
 *            T: O(n^2) S: O(n)                                       *
 **********************************************************************/


 buble_sort = function (array) {
   for (let i = 0; i < array.length; i++) {
     for (let j = 0; j < array.length - i - 1; j++) {
       if (array[j] > array[j + 1]) {
         const temp = array[j];
         array[j] = array[j + 1];
         array[j + 1] = temp;
       }
     }
   }
   return array;
 };
