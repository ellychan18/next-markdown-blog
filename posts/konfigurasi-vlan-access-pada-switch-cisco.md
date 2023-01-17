---
title: "Cisco - Konfigurasi VLAN Access Pada Switch Cisco"
tag: "Networking"
date: "January 17 2023"
excerpt: "Pada artikel ini kita akan melakukan konfigurasi VLAN Access pada Switch Cisco"
cover_image: "/images/posts/konfigurasi-vlan-access-pada-switch-cisco.png"
author_name: "Arman Dwi Pangestu"
author_title: "Web Developer"
author_image: "/images/posts/author/arman.png"
---

### Pendahuluan

`VLAN Access` merupakan konfigurasi VLAN yang terhubung langsung dengan `End Device` (Komputer) sehingga pada `VLAN Access` hanya dapat menampung 1 buah `VLAN ID`.

- Masuk ke mode `previllage exec`

```shell
Switch>enable
```

- Masuk ke mode `global configuration`

```shell
Switch#configure terminal
```

- Membuat VLAN ID `10` dengan nama `ruang-guru`

```shell
Switch(config)#vlan 10
Switch(config-vlan)#name ruang-guru
Switch(config-vlan)#exit
```

- Membuat VLAN ID `20` dengan nama `ruang-meeting`

```shell
Switch(config)#vlan 20
Switch(config-vlan)#name ruang-meeting
Switch(config-vlan)#exit
```

- Mengecek list VLAN yang sudah kita buat

```shell
Switch(config)#do show vlan brief
```

<a href="https://i.ibb.co/HV2CYBw/image.png" target="_blank">
  <img src="https://i.ibb.co/HV2CYBw/image.png" alt="https://i.ibb.co/HV2CYBw/image.png" class="img-fluid rounded mx-auto d-block" />
</a>

<div>
    <table>
        <thead>
            <tr>
                <th scope="col">VLAN</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Ports</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>default</td>
                <td>active</td>
                <td>
                    Fa0/1, Fa0/2, Fa0/3, Fa0/4 <br>
                    Fa0/5, Fa0/6, Fa0/7, Fa0/8 <br>
                    Fa0/9, Fa0/10, Fa0/11, Fa0/12 <br>
                    Fa0/13, Fa0/14, Fa0/15, Fa0/16 <br>
                    Fa0/17, Fa0/18, Fa0/19, Fa0/20 <br>
                    Fa0/21, Fa0/22, Fa0/23, Fa0/24 <br>
                Gig0/1, Gig0/2
                </td>
            </tr>
            <tr>
                <td>10</td>
                <td>ruang-guru</td>
                <td>active</td>
                <td>
                </td>
            </tr>
            <tr>
                <td>20</td>
                <td>ruang-meeting</td>
                <td>active</td>
                <td>
                </td>
            </tr>
            <tr>
                <td>1002</td>
                <td>fddi-default</td>
                <td>active</td>
                <td>
                </td>
            </tr>
            <tr>
                <td>1003</td>
                <td>token-ring-default</td>
                <td>active</td>
                <td>
                </td>
            </tr>
            <tr>
                <td>1004</td>
                <td>fddinet-default</td>
                <td>active</td>
                <td>
                </td>
            </tr>
            <tr>
                <td>1005</td>
                <td>trnet-default</td>
                <td>active</td>
                <td>
                </td>
            </tr>
        </tbody>
    </table>
</div>

- Memberikan VLAN `10` ke PC0 yang terhubung dengan interface `fa0/1`

```shell
Switch(config)#interface fastEthernet 0/1
Switch(config-if)#switchport mode access
Switch(config-if)#switchport access vlan 10
Switch(config-if)#exit
```

- Memberikan VLAN `10` ke PC1 yang terhubung dengan interface `fa0/2`

```shell
Switch(config)#interface fastEthernet 0/2
Switch(config-if)#switchport mode access
Switch(config-if)#switchport access vlan 10
Switch(config-if)#exit
```

- Memberikan VLAN `20` ke PC2 yang terhubung dengan interface `fa0/3`

```shell
Switch(config)#interface fastEthernet 0/3
Switch(config-if)#switchport mode access
Switch(config-if)#switchport access vlan 20
Switch(config-if)#exit
```

- Memberikan VLAN `20` ke PC3 yang terhubung dengan interface `fa0/4`

```shell
Switch(config)#interface fastEthernet 0/4
Switch(config-if)#switchport mode access
Switch(config-if)#switchport access vlan 20
Switch(config-if)#exit
```

- Sekarang kita cek konfigurasi VLAN kita

```shell
Switch(config)#do show vlan brief
```

<a href="https://i.ibb.co/rZCw5RT/image.png" target="_blank">
  <img src="https://i.ibb.co/rZCw5RT/image.png" alt="https://i.ibb.co/rZCw5RT/image.png" class="img-fluid rounded mx-auto d-block" />
</a>

<div>
    <table>
        <thead>
            <tr>
                <th scope="col">VLAN</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Ports</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>default</td>
                <td>active</td>
                <td>
                    Fa0/5, Fa0/6, Fa0/7, Fa0/8 <br>
                    Fa0/9, Fa0/10, Fa0/11, Fa0/12 <br>
                    Fa0/13, Fa0/14, Fa0/15, Fa0/16 <br>
                    Fa0/17, Fa0/18, Fa0/19, Fa0/20 <br>
                    Fa0/21, Fa0/22, Fa0/23, Fa0/24 <br>
                Gig0/1, Gig0/2
                </td>
            </tr>
            <tr>
                <td>10</td>
                <td>ruang-guru</td>
                <td>active</td>
                <td>
                    Fa0/1, Fa0/2
                </td>
            </tr>
            <tr>
                <td>20</td>
                <td>ruang-meeting</td>
                <td>active</td>
                <td>
                    Fa0/3, Fa0/4
                </td>
            </tr>
            <tr>
                <td>1002</td>
                <td>fddi-default</td>
                <td>active</td>
                <td>
                </td>
            </tr>
            <tr>
                <td>1003</td>
                <td>token-ring-default</td>
                <td>active</td>
                <td>
                </td>
            </tr>
            <tr>
                <td>1004</td>
                <td>fddinet-default</td>
                <td>active</td>
                <td>
                </td>
            </tr>
            <tr>
                <td>1005</td>
                <td>trnet-default</td>
                <td>active</td>
                <td>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<a href="https://i.ibb.co/vJM1SBV/image.png" target="_blank">
  <img src="https://i.ibb.co/vJM1SBV/image.png" alt="https://i.ibb.co/vJM1SBV/image.png" class="img-fluid rounded mx-auto d-block" />
</a>
