---
title: "OLT - Registrasi ONU"
tag: "Networking"
date: "January 18 2023"
excerpt: "Pada artikel ini kita akan mencoba melakukan registrasi ONU di OLT"
cover_image: "/images/posts/default.png"
author_name: "Arman Dwi Pangestu"
author_title: "Web Developer"
author_image: "/images/posts/author/arman.png"
---

## Masuk Mode Configure Terminal

```sh
host#conf t
```

### Output

```sh
host(config)#
```

## Melihat List ONU Unconfig

```sh
host(config)#show gpon onu uncfg
```

### Output

```shell
OnuIndex                 Sn                  State
---------------------------------------------------------------------
gpon-onu_1/1/1:1         XXXXXXXXXXXX        unknown
```
