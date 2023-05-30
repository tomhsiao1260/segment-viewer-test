<h1 align="center">Segment Viewer</h1>

<p align="center">
    <img src="https://github.com/tomhsiao1260/segment-viewer/assets/31985811/7196a132-ae03-4e4d-8eaf-95ad24af7dc9" width="800px"/>
</p>

## Introduction

A web-based segmentation viewer for [Vesuvius Challenge](https://scrollprize.org/). Currently for 0~1000 layers in `Scroll1.volpkg`.

## Getting Started

Download `volume` and `segment` folders in [this kaggle link](https://www.kaggle.com/datasets/yaohsiao123/segment-viewer). 

Put `volume` and `segment` folders in the root directory of this repo. Now you can run a simple server on it to see the result.

```bash
cd segment-viewer
python -m http.server
```

File structure looks like this:

```
./segment-viewer/index.html
./segment-viewer/segment/*.obj
./segment-viewer/volume/*.nrrd

...
```

## Notes

The source code is built from [this repo](https://github.com/tomhsiao1260/volume-viewer). Feel free to let me know any issue, I will try to fix that.


