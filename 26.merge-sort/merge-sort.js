const merge = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;

  let x = 0;
  let y = 0;

  let p = 0;

  let res = new Array(m + n);

  while (x < m && y < n) {
    if (nums1[x] < nums2[y]) {
      res[p] = nums1[x];
      p++;
      x++;
    } else {
      res[p] = nums2[y];
      p++;
      y++;
    }
  }

  while (x < m) {
    res[p] = nums1[x];
    x++;
    p++;
  }

  while (y < n) {
    res[p] = nums2[y];
    y++;
    p++;
  }

  return res;
};

function MergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(MergeSort([8, 4, 5, 6, 9, 1, 3, 6]));
