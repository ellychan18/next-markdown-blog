---
title: "Git & GitHub - Menambahkan SSH Key"
tag: "Git"
date: "January 17 2023"
excerpt: "Pada artikel ini kita akan mencoba menambahkan SSH Key untuk GitHub, SSH Key ini berfungsi agar kita bisa mengkoneksikan git (local) dengan github (remote)"
cover_image: "/images/posts/default.png"
author_name: "Arman Dwi Pangestu"
author_title: "Web Developer"
author_image: "/images/posts/author/arman.png"
---

- Generating Public Key SSH

```bash
ssh-keygen -t rsa -b 4096 -C "your@email.com"
```

- Get PID

```bash
eval $(ssh-agent -s)
```

- Add Authentication Agent

```bash
ssh-add ~/.ssh/id_rsa
```

- Copy Public Key and Paste to GitHub Account

```bash
cat .ssh/id_rsa.pub
```
