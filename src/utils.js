export const binarySearch = (arr, value) => {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid].id === value) return arr[mid];

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid].id > value) r = mid - 1;
    // Else the element can only be present
    // in right subarray
    else l = mid + 1;
  }

  // We reach here when element is not
  // present in array
  return -1;
};

export const findAllOccurrences = (arr, value) => {
  let comments = [];
  arr.map((comment) => comment.postId === value && comments.push(comment));
  return comments;
};
