---
title: "Syntax Highlighting"
date: "January 15 2023"
excerpt: "Syntax Highlighting"
cover_image: "/images/posts/default.png"
---

### PHP

```php
class Produk
{
  public $judul,
    $penulis,
    $penerbit,
    $harga;

  public function __construct($judul = "Judul", $penulis = "Penulis", $penerbit = "Penerbit", $harga = 0)
  {
    $this->judul = $judul;
    $this->penulis = $penulis;
    $this->penerbit = $penerbit;
    $this->harga = $harga;
  }

  public function getLabel()
  {
    return "$this->penulis, $this->penerbit";
  }
}

class CetakInfoProduk
{
  public function cetak(Produk $produk)
  {
    $str = "{$produk->judul} | {$produk->getLabel()} (Rp. {$produk->harga})";
    return $str;
  }
}

$produk1 = new Produk("Naruto", "Masashi Khisimoto", "Shonen Jump", 30000);
$produk2 = new Produk("Uncharted", "Neil Druckamn", "Sony Computer", 250000);

echo "Komik : " . $produk1->getLabel();
echo "<br>";
echo "Game : " . $produk2->getLabel();

echo "<br>";
$infoProduk1 = new CetakInfoProduk();
echo $infoProduk1->cetak("asdsadas");
```

### Javascript

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

const setData = (total) => {
  let data = [];
  for (let i = 0; i < total; i++) {
    data[i] = Math.floor(Math.random() * total);
  }
  return data;
};
```
