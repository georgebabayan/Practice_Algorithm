/**********************************************************
 *                                                        *
 *  Problem: Selection Sort                               *
 *                                                        *
 *  Prompt: Given an unsorted array of numbers,           *
 *          return a sorted array using insertion sort.   *
 *                                                        *
 *  Input: An unsorted array                              *
 *  Output: A sorted array                                *
 *                                                        *
 *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
 *                                                        *
 *  What are the time and auxiliary space complexity?     *
 *  What is the best case time complexity?                *
 *  T: (O^2) at all times, S: O(1)                        *
 **********************************************************/

 var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

var indexOfMinimum = function(array, startIndex) {
  var minIndex = startIndex,
  minVal = array[startIndex]
  for (var i = minIndex + 1; i < array.length; i++ ) {
    if (array[i] < minVal) {
      minIndex = i
      minVal = array[i]
    }
  }return minIndex;
}

var selectionSort = function(input){
  var min
  for (var i = 0; i < input.length - 1; i++) {
    min = indexOfMinimum(input, i)
    swap(input, i, min)
  }return input
}
