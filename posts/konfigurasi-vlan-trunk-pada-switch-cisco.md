---
title: "Konfigurasi VLAN Trunk Pada Switch Cisco"
date: "January 16 2023"
excerpt: "idk"
cover_image: "/images/posts/img2.png"
---

### Pendahuluan

Pada materi VLAN ACCESS dijelaskan bahwa perangkat akan terhubung jika masih dalam 1 vlan id , dan
juga pada 1 interface switch hanya dapat menampung 1 vlan saja. VLAN Trunk digunakan untuk
membawa banyak vlan pada 1 interface switch. Jika pada VLAN ACCESS sebagian besar digunakan untuk
menghubungkan end device (komputer), VLAN TRUNK digunakan untuk menghubungkan vlan antar
switch atau antar router.

- Membuat `VLAN` pada masing - masing switch

> Switch 1

```shell
Switch-1>enable
Switch-1#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch-1(config)#vlan 10
Switch-1(config-vlan)#name ruang-guru
Switch-1(config-vlan)#exit
Switch-1(config)#vlan 20
Switch-1(config-vlan)#name ruang-meeting
Switch-1(config-vlan)#exit
Switch-1(config)#
```

> Switch 2

```shell
Switch-2>enable
Switch-2#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
Switch-2(config)#vlan 10
Switch-2(config-vlan)#name ruang-guru
Switch-2(config-vlan)#exit
Switch-2(config)#vlan 20
Switch-2(config-vlan)#name ruang-meeting
Switch-2(config-vlan)#exit
Switch-2(config)#
```

- Konfigurasi `VLAN Access` pada interface yang mengarah ke end device (komputer)

> Switch 1

<div class="table-responsive rounded">
<table class="table table-dark table-striped table-bordered">
   <thead>
      <tr>
         <th scope="col">Perangkat</th>
         <th scope="col">Terhubung ke interface switch</th>
         <th scope="col">VLAN ID</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>PC0</td>
         <td>FastEthernet0/2</td>
         <td>10</td>
      </tr>
      <tr>
         <td>PC1</td>
         <td>FastEthernet0/3</td>
         <td>20</td>
      </tr>
   </tbody>
</table>
</div>

```shell
Switch-1(config)#interface fastEthernet 0/2
Switch-1(config-if)#switchport mode access
Switch-1(config-if)#switchport access vlan 10
Switch-1(config-if)#exit
Switch-1(config)#interface fastEthernet 0/3
Switch-1(config-if)#switchport mode access
Switch-1(config-if)#switchport access vlan 20
Switch-1(config-if)#exit
Switch-1(config)#
```

> Switch 2

<div class="table-responsive rounded">
<table class="table table-dark table-striped table-bordered">
   <thead>
      <tr>
         <th scope="col">Perangkat</th>
         <th scope="col">Terhubung ke interface switch</th>
         <th scope="col">VLAN ID</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>PC2</td>
         <td>FastEthernet0/2</td>
         <td>10</td>
      </tr>
      <tr>
         <td>PC3</td>
         <td>FastEthernet0/3</td>
         <td>20</td>
      </tr>
   </tbody>
</table>
</div>

```shell
Switch-2(config)#interface fastEthernet0/2
Switch-2(config-if)#switchport mode access
Switch-2(config-if)#switchport access vlan 10
Switch-2(config-if)#exit
Switch-2(config)#interface fastEthernet0/3
Switch-2(config-if)#switchport mode access
Switch-2(config-if)#switchport access vlan 20
Switch-2(config-if)#exit
Switch-2(config)#
```

- Menghubungkan VLAN pada kedua switch, konfigurasi VLAN TRUNK pada interface yang menghubungkan Switch-1 dan Switch-2

> Switch 1

```shell
Switch-1(config)#interface fastEthernet 0/1
Switch-1(config-if)#switchport mode trunk

Switch-1(config-if)#
%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to down

%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to up

Switch-1(config-if)#switchport trunk allowed vlan 10,20
Switch-1(config-if)#exit
Switch-1(config)#
```

> Switch 2

```shell
Switch-2(config)#interface fastEthernet 0/1
Switch-2(config-if)#switchport mode trunk

Switch-2(config-if)#
%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to down

%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to up

Switch-2(config-if)#switchport trunk allowed vlan 10,20
Switch-2(config-if)#exit
```
