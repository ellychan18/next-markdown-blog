---
title: "Bash - Mengecek Command Tersedia Atau Tidak"
tag: "Programming"
date: "January 17 2023"
excerpt: "Pada artikel ini kita akan membuat script dengan bahasa pemrograman BASH untuk mengecek apakah command tersedia atau tidak"
cover_image: "/images/posts/bash.svg"
author_name: "Arman Dwi Pangestu"
author_title: "Web Developer"
author_image: "/images/posts/author/arman.png"
---

```bash
#!/usr/bin/env bash

function start() {

  local command=(
    js sixel termux-battery-status
    certuil node
  )

  local msg=""

  for cmd in ${command[@]}; do
    local str=""
    if ! [[ -x "$(command -v $cmd)" ]]; then
      printf -v str " [ Not Found ] %s" "$cmd"
      local msg+="$str"
    else
      printf -v str " [ Found ] %s" "$cmd"
      local msg+="$str"
    fi
  done

  echo -e "$msg"
}

start
```

- Hasil

<a href="https://i.ibb.co/dDhLZ6D/Screenshot-20211011-154326-Termux.png" target="_blank">
   <img src="https://i.ibb.co/dDhLZ6D/Screenshot-20211011-154326-Termux.png" class="img-fluid rounded mx-auto d-block">
</a>
