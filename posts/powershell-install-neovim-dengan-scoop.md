---
title: "PowerShell - Install Neovim Menggunakan Scoop"
tag: "Setup"
date: "January 24 2023"
excerpt: "Pada artikel ini kita akan melakukan instalasi Neovim menggunakan Scoop"
cover_image: "/images/posts/neovim.png"
author_name: "Arman Dwi Pangestu"
author_title: "Web Developer"
author_image: "/images/posts/author/arman.png"
---

## Install Scoop

```bash
irm get.scoop.sh | iex
```

## Install Neovim

```bash
scoop install neovim
```

## Install Git

```bash
scoop install git
```

## Clone Repository NvChad

```bash
git clone https://github.com/NvChad/NvChad $HOME\AppData\Local\nvim --depth 1
```

## Install C Compiler

```bash
scoop install gcc
```

## Membuka Neovim

```bash
nvim
```

## Install TreeSitter Language

```bash
:TSInstallSync bash java javascript ruby php c cpp c_sharp python go rust typescript html css
```

## Hasilnya

![image](https://user-images.githubusercontent.com/64394320/216773041-538dbaf0-5c0a-40e8-9176-52494be58781.png)
