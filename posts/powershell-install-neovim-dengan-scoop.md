---
title: "PowerShell - Install Neovim Menggunakan Scoop"
tag: "Setup"
date: "February 24 2023"
excerpt: "Pada artikel ini kita akan melakukan instalasi Neovim menggunakan Scoop"
cover_image: "/images/posts/default.png"
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