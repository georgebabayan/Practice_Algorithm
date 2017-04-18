/** ********************************************************************
 *                                                                    *
 *  Problem: Insertion Sort                                           *
 *                                                                    *
 *  Prompt: Given an unsorted array of numbers,                       *
 *          return a sorted array using insertion sort.               *
 *                                                                    *
 *  Input:  An unsorted array                                         *
 *  Output: A sorted array                                            *
 *                                                                    *
 *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
 *                                                                    *
 *  What are the time and auxiliary space complexity?                 *
 *            T: O(n^2) S: O(1)                                       *
 **********************************************************************/

 function insertionSort(array) {
   for (let i = 1; i < array.length; i++) {
     const temp = array[i];
     for (var j = i - 1; j >= 0 && (array[j] > temp); j--) {
       array[j + 1] = array[j];
     }
     array[j + 1] = temp;
   }
 }
