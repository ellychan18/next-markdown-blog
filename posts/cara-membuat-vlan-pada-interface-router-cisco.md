---
title: "Cisco - Cara Membuat VLAN Pada Interface Router Cisco"
tag: "Networking"
date: "January 17 2023"
excerpt: "Pada artikel ini kita akan mencoba membuat VLAN pada interface router cisco"
cover_image: "/images/posts/default.png"
author_name: "Arman Dwi Pangestu"
author_title: "Web Developer"
author_image: "/images/posts/author/arman.png"
---

- Masuk ke dalam mode `previllage exec`

```shell
Router>enable
```

- Masuk ke dalam mode `global configuration`

```shell
Router#configure terminal
```

- Aktifkan Port Router yang dipakai

```shell
Router(config)#interface gigabitEthernet 0/0/0
Router(config-if)#no shutdown
Router(config-if)#exit
```

- Membuat `sub interface` dari interface utama

> **NOTE**: Untuk membuat `sub interface` ketikan perintah:
>
> ```shell
> Router(config)#interface <interface_utama>.<vlanid>
> ```

Disini saya akan membuat VLAN dengan ID nya adalah `10`

```shell
Router(config)#interface gigabitEthernet 0/0/0.10
```

- Ubah sub interface menjadi mode `trunk`

```shell
Router(config-subif)#encapsulation dot1Q 10
```

- Berikan ip gateway beserta subnet mask nya untuk sub interface

```shell
Router(config-subif)#ip address 192.168.10.1 255.255.255.0
Router(config-subif)#exit
```

- Melihat atau mengecek konfigurasi VLAN pada router cisco

```shell
Router(config)#do show ip interface brief
```

> Hasilnya

<div class="table-responsive rounded">
<table class="table table-dark table-striped table-bordered">
   <thead>
      <tr>
         <th scope="col">Interface</th>
         <th scope="col">IP-Address</th>
         <th scope="col">OK?</th>
         <th scope="col">Method</th>
         <th scope="col">Status</th>
         <th scope="col">Protocol</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>GigabitEthernet0/0/0</td>
         <td>unassigned</td>
         <td>YES</td>
         <td>unset</td>
         <td>up</td>
         <td>up</td>
      </tr>
      <tr>
         <td>GigabitEthernet0/0/0.10</td>
         <td>192.168.10.1</td>
         <td>YES</td>
         <td>manual</td>
         <td>up</td>
         <td>up</td>
      </tr>
   </tbody>
</table>
</div>

> **Tambahan**: Untuk membuat VLAN baru lakukan hal yang sama, disini saya akan menambahkan VLAN baru dengan ID nya adalah `20`

- Membuat `sub interface` dari interface utama

```shell
Router(config)#interface gigabitEthernet 0/0/0.20
```

- Ubah sub interface menjadi mode `trunk`

```shell
Router(config-subif)#encapsulation dot1Q 20
```

- Berikan ip gateway beserta subnet mask nya untuk sub interface

```shell
Router(config-subif)#ip address 192.168.20.1 255.255.255.0
Router(config-subif)#exit
```

- Melihat atau mengecek konfigurasi VLAN pada router cisco

```shell
Router(config)#do show ip interface brief
```

> Hasilnya

<div class="table-responsive rounded">
<table class="table table-dark table-striped table-bordered">
   <thead>
      <tr>
         <th scope="col">Interface</th>
         <th scope="col">IP-Address</th>
         <th scope="col">OK?</th>
         <th scope="col">Method</th>
         <th scope="col">Status</th>
         <th scope="col">Protocol</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>GigabitEthernet0/0/0</td>
         <td>unassigned</td>
         <td>YES</td>
         <td>unset</td>
         <td>up</td>
         <td>up</td>
      </tr>
      <tr>
         <td>GigabitEthernet0/0/0.10</td>
         <td>192.168.10.1</td>
         <td>YES</td>
         <td>manual</td>
         <td>up</td>
         <td>up</td>
      </tr>
      <tr>
         <td>GigabitEthernet0/0/0.20</td>
         <td>192.168.20.1</td>
         <td>YES</td>
         <td>manual</td>
         <td>up</td>
         <td>up</td>
      </tr>
   </tbody>
</table>
</div>
