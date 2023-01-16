---
title: "Sorting Algorithm"
tag: "Programming"
date: "January 14 2023"
excerpt: "Basic Sorting Algorithm"
cover_image: "/images/posts/default.png"
author_name: "Arman Dwi Pangestu"
author_title: "Web Developer"
author_image: "/images/posts/author/arman.png"
---

## Bubble Sort

```javascript
const bubbleSort = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
};
```

## Insertion Sort

```javascript
const insertionSort = (data) => {
  for (let i = 1; i < data.length; i++) {
    let key = data[i];
    let j = i - 1;

    while (j >= 0 && data[j] > key) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = key;
  }
  return data;
};
```

## Selection Sort

```javascript
const selectionSort = (data) => {
  for (let i = 0; i < data.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[min_index]) {
        min_index = j;
      }
    }
    swapData(data, min_index, i);
  }
  return data;
};

const swapData = (data, xPointer, yPointer) => {
  let temp = data[xPointer];
  data[xPointer] = data[yPointer];
  data[yPointer] = temp;
};
```
