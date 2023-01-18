---
title: "OLT - List Perintah atau Command pada OLT"
tag: "Networking"
date: "January 18 2023"
excerpt: "Artikel yang berisi kumpulan perintah atau command untuk perangkat OLT"
cover_image: "/images/posts/default.png"
author_name: "Arman Dwi Pangestu"
author_title: "Web Developer"
author_image: "/images/posts/author/arman.png"
---

<h4 class="mt-4">
   <i class="fas fa-book me-2"></i> Daftar Isi:
</h4>

- [Cek ONT Uptime dan History](#cek-ont-uptime-dan-history)
- [Cek Detail Config di Interface ke arah ONT](#cek-detail-config-di-interface-ke-arah-ont)
- [Cek Signal Fiber Optic](#cek-signal-fiber-optic)
- [Menampilkan MAC Perangkat Yang Terhubung ke ONU](#menampilkan-mac-perangkat-yang-terhubung-ke-onu)
- [Cara Mengecek IP Address ONU](#cara-mengecek-ip-address-onu)
- [Menampilkan Semua State OLT](#menampilkan-semua-state-olt)
- [Menampilkan State Satu OLT](#menampilkan-state-satu-olt)
- [Menampilkan Signal RX (Download) Satu OLT](#menampilkan-signal-rx-atau-download-satu-olt)
- [Menampilkan Signal TX (Upload) Satu OLT](#menampilkan-signal-tx-atau-upload-satu-olt)
- [Menampilkan Status Interface Backbone xgei (10G)](#menampilkan-status-interface-backbone-xgei-10G)
- [Menampilkan Informasi Interface Ethernet](#menampilkan-informasi-interface-ethernet)
- [Masuk ke Mode PON Management](#masuk-ke-mode-PON-Management)
- [Menampilkan Informasi PON Management](#menampilkan-informasi-PON-Management)
- [Menghapus VLAN pada Port Ethernet](#menghapus-VLAN-pada-port-ethernet)
- [Menambahkan VLAN dengan Mode Trunk pada Port Ethernet](#menambahkan-vlan-dengan-mode-trunk-pada-port-ethernet)
- [Menambahkan VLAN pada Interface Ethernet](#menambahkan-vlan-pada-interface-ethernet)

## <a name="cek-ont-uptime-dan-history" href="#cek-ont-uptime-dan-history"><i class="fas fa-link me-2 text-dark"></i></a>Cek ONT Uptime dan History

- Command

```sh
show gpon onu detail-info gpon-onu_1/1/1:1
```

- Output

```sh
ONU interface:         gpon-onu_1/1/1:1
  Name:                Client
  Type:                F609
  State:               ready
  Admin state:         enable
  Phase state:         working
  Authentication mode: sn
  SN Bind:             enable with SN check
  Serial number:       XXXXXXXXXX
  Password:
  Device ID:
  Description:         ONU-1:1
  Vport mode:          gemport
  DBA Mode:            Hybrid
  ONU Status:          enable
  OMCI BW Profile:     enable
  Line Profile:        N/A
  Service Profile:     N/A
  Alarm Profile:       N/A
  Performance Profile: N/A
  ONU Distance:        3703m
  Online Duration:     34h 45m 21s
  FEC:                 none
  1PPS+ToD:            disable
------------------------------------------
       Authpass Time          OfflineTime             Cause
   1   2022-09-05 14:04:42    0000-00-00 00:00:00
   2   0000-00-00 00:00:00    0000-00-00 00:00:00
   3   0000-00-00 00:00:00    0000-00-00 00:00:00
   4   0000-00-00 00:00:00    0000-00-00 00:00:00
   5   0000-00-00 00:00:00    0000-00-00 00:00:00
   6   0000-00-00 00:00:00    0000-00-00 00:00:00
   7   0000-00-00 00:00:00    0000-00-00 00:00:00
   8   0000-00-00 00:00:00    0000-00-00 00:00:00
   9   0000-00-00 00:00:00    0000-00-00 00:00:00
  10   0000-00-00 00:00:00    0000-00-00 00:00:00
```

## <a name="cek-detail-config-di-interface-ke-arah-ont" href="#cek-detail-config-di-interface-ke-arah-ont"><i class="fas fa-link me-2 text-dark"></i></a>Cek Detail Config di Interface ke arah ONT

- Command

```sh
show running-config interface gpon-onu_1/1/1:1
```

- Output

```sh
Building configuration...
!
interface gpon-onu_1/1/1:1
  name Client
  tcont 1 profile UPTO-75M
  tcont 2 profile UP-1M
  gemport 1 name internet unicast tcont 1 dir both
  gemport 1 traffic-limit downstream UPTO-75M
  gemport 2 name mgmt unicast tcont 2 dir both
  switchport mode hybrid vport 2
  switchport mode hybrid vport 1
  service-port 1 vport 1 user-vlan xxx vlan xxx
  service-port 2 vport 2 user-vlan yyy vlan yyy
  pppoe-plus enable vport 2
!
end
```

## <a name="cek-signal-fiber-optic" href="#cek-signal-fiber-optic"><i class="fas fa-link me-2 text-dark"></i></a>Cek Signal Fiber Optic

- Command

```sh
show pon power attenuation gpon-onu_1/1/1:1
```

- Output

```sh
           OLT                  ONU              Attenuation
--------------------------------------------------------------------------
 up      Rx :-20.241(dbm)      Tx:2.423(dbm)        22.664(dB)

 down    Tx :5.369(dbm)        Rx:-16.676(dbm)      22.045(dB)
```

## <a name="menampilkan-mac-perangkat-yang-terhubung-ke-onu" href="#menampilkan-mac-perangkat-yang-terhubung-ke-onu"><i class="fas fa-link me-2 text-dark"></i></a>Menampilkan MAC Perangkat Yang Terhubung ke ONU

- Command

```sh
show mac gpon onu gpon-onu_1/1/1:1
```

- Output

```sh
Total mac address : 1

Mac address      Vlan   Type      Port                         Vc
------------------------------------------------------------------------
8cdc.0294.a5cd   88     Dynamic   gpon-onu_1/1/1:1          vport 2
```

## <a name="cara-mengecek-ip-address-onu" href="#cara-mengecek-ip-address-onu"><i class="fas fa-link me-2 text-dark"></i></a>Cara Mengecek IP Address ONU

- Command

```sh
show gpon remote-onu wan-ip gpon-onu_1/1/1:1
```

- Ouput

```sh
WAN id:         1
Mode:           PPPoE
Authentication: auto
User name:      XXXXXXXXXX
Password:       XXXXXXXXXX
Status:         connected
Ping response:  enable
Traceroute response: disable
VLAN tag mode:  tag
CVLAN:          88
CVLAN priority: 0
SVLAN:          0
Current IP:     172.16.202.74
Current mask:   255.255.255.255
Current gateway:172.16.202.1
Current primary DNS: 8.8.8.8
Current secondary DNS: 8.8.4.4
Domain name:
Host name:      omci_ipv4_pppoe_1
MAC address:    xxxx.xxxx.xxxx
IP host id:     1
```

## <a name="menampilkan-semua-state-olt" href="#menampilkan-semua-state-olt"><i class="fas fa-link me-2 text-dark"></i></a>Menampilkan Semua State OLT

- Command

```sh
show gpon onu state
```

- Output

```sh
OnuIndex               Admin State  OMCC State   O7 State     Phase State
----------------------------------------------------------------------------
gpon-onu_1/1/1:1       enable       enable       operation    working
gpon-onu_1/1/1:2       enable       enable       operation    working
gpon-onu_1/1/1:3       enable       disable      unknown      LOS
gpon-onu_1/1/1:5       enable       enable       operation    working
gpon-onu_1/1/1:6       enable       enable       operation    working
gpon-onu_1/1/1:7       enable       enable       operation    working
gpon-onu_1/1/1:8       enable       disable      unknown      DyingGasp
gpon-onu_1/1/1:9       enable       disable      unknown      DyingGasp
gpon-onu_1/1/1:10      enable       disable      unknown      LOS
gpon-onu_1/1/1:12      enable       enable       operation    working
gpon-onu_1/1/1:13      enable       enable       operation    working
gpon-onu_1/1/1:14      enable       enable       operation    working
gpon-onu_1/1/2:1       enable       disable      unknown      DyingGasp
gpon-onu_1/1/2:2       enable       disable      unknown      DyingGasp
gpon-onu_1/1/2:3       enable       enable       operation    working
gpon-onu_1/1/2:4       enable       enable       operation    working
gpon-onu_1/1/2:6       enable       enable       operation    working
gpon-onu_1/1/2:7       enable       disable      unknown      LOS
gpon-onu_1/1/2:8       enable       enable       operation    working
gpon-onu_1/1/2:14      enable       enable       operation    working
gpon-onu_1/1/2:15      enable       disable      unknown      LOS
gpon-onu_1/1/2:18      enable       disable      unknown      DyingGasp
gpon-onu_1/1/2:20      enable       disable      unknown      DyingGasp
gpon-onu_1/1/2:21      enable       disable      unknown      LOS
gpon-onu_1/1/2:22      enable       disable      unknown      DyingGasp
gpon-onu_1/1/2:23      enable       enable       operation    working
gpon-onu_1/1/2:26      enable       enable       operation    working
gpon-onu_1/1/2:27      enable       enable       operation    working
```

## <a name="menampilkan-state-satu-olt" href="#menampilkan-state-satu-olt"><i class="fas fa-link me-2 text-dark"></i></a>Menampilkan State Satu OLT

- Command

```sh
show gpon onu state gpon-olt_1/1/1
```

- Output

```sh
OnuIndex               Admin State  OMCC State   O7 State     Phase State
----------------------------------------------------------------------------
gpon-onu_1/1/1:1       enable       enable       operation    working
gpon-onu_1/1/1:2       enable       enable       operation    working
gpon-onu_1/1/1:3       enable       disable      unknown      LOS
gpon-onu_1/1/1:5       enable       enable       operation    working
gpon-onu_1/1/1:6       enable       enable       operation    working
gpon-onu_1/1/1:7       enable       enable       operation    working
gpon-onu_1/1/1:8       enable       disable      unknown      DyingGasp
gpon-onu_1/1/1:9       enable       disable      unknown      DyingGasp
gpon-onu_1/1/1:10      enable       disable      unknown      LOS
gpon-onu_1/1/1:12      enable       enable       operation    working
gpon-onu_1/1/1:13      enable       enable       operation    working
gpon-onu_1/1/1:14      enable       enable       operation    working
```

## <a name="menampilkan-signal-rx-atau-download-satu-olt" href="#menampilkan-signal-rx-atau-download-satu-olt"><i class="fas fa-link me-2 text-dark"></i></a>Menampilkan Signal RX (Download) Satu OLT

- Command

```sh
show pon power onu-rx gpon-olt_1/1/1
```

- Output

```sh
Onu                 Rx power
------------------------------------
gpon-onu_1/1/1:1    -16.676(dbm)
gpon-onu_1/1/1:2    -24.948(dbm)
gpon-onu_1/1/1:3    N/A
gpon-onu_1/1/1:5    -26.198(dbm)
gpon-onu_1/1/1:6    -26.576(dbm)
gpon-onu_1/1/1:7    -17.424(dbm)
gpon-onu_1/1/1:8    N/A
gpon-onu_1/1/1:9    N/A
gpon-onu_1/1/1:10   N/A
gpon-onu_1/1/1:12   -23.098(dbm)
gpon-onu_1/1/1:13   -20.810(dbm)
gpon-onu_1/1/1:14   -17.826(dbm)
```

## <a name="menampilkan-signal-tx-atau-upload-satu-olt" href="#menampilkan-signal-tx-atau-upload-satu-olt"><i class="fas fa-link me-2 text-dark"></i></a>Menampilkan Signal TX (Upload) Satu OLT

- Command

```sh
show pon power onu-tx gpon-olt_1/1/1
```

- Output

```sh
Onu                 Tx power
------------------------------------
gpon-onu_1/1/1:1    2.445(dbm)
gpon-onu_1/1/1:2    2.771(dbm)
gpon-onu_1/1/1:3    N/A
gpon-onu_1/1/1:5    2.329(dbm)
gpon-onu_1/1/1:6    2.990(dbm)
gpon-onu_1/1/1:7    2.119(dbm)
gpon-onu_1/1/1:8    N/A
gpon-onu_1/1/1:9    N/A
gpon-onu_1/1/1:10   N/A
gpon-onu_1/1/1:12   2.268(dbm)
gpon-onu_1/1/1:13   2.136(dbm)
gpon-onu_1/1/1:14   2.404(dbm)
```

## <a name="menampilkan-status-interface-backbone-xgei-10G" href="#menampilkan-status-interface-backbone-xgei-10G"><i class="fas fa-link me-2 text-dark"></i></a>Menampilkan Status Interface Backbone xgei (10G)

- Command

```sh
show interface xgei_1/4/2
```

- Output

```sh
xgei_1/4/2 is up,  line protocol is up
  Description is BACKBOME-XXX-via-XXX
  Keepalive set:10 sec
  The port negotiation is disable
  The port is optical
  Duplex full
  scramble payload-enable
```

## <a name="menampilkan-informasi-interface-ethernet" href="#menampilkan-informasi-interface-ethernet"><i class="fas fa-link me-2 text-dark"></i></a>Menampilkan Informasi Interface Ethernet

- Command

```sh
show gpon remote-onu interface eth gpon-onu_1/1/1:1
```

- Output

```sh
Interface:     eth_0/1
Speed status:  auto
Operate status:disable
Admin status:  unlock
Arc:           0
Arc-interval   0
Expect-type:   0
Speed config:  auto
Eth-loop:      disable
Max-frame:     1632
Pause-time:    0
Wiring :       dce
BridgeOrIP:    either
PPPOE-filter:  disable
Power-control: disable

Interface:     eth_0/2
Speed status:  full-100
Operate status:enable
Admin status:  unlock
Arc:           0
Arc-interval   0
Expect-type:   0
Speed config:  auto
Eth-loop:      disable
Max-frame:     1632
Pause-time:    0
Wiring :       dce
BridgeOrIP:    either
```

## <a name="masuk-ke-mode-PON-Management" href="#masuk-ke-mode-PON-Management"><i class="fas fa-link me-2 text-dark"></i></a>Masuk ke mode PON Management

- Command

```sh
pon-onu-mng gpon-onu_1/1/7:2
```

- Output

```sh
host(gpon-onu-mng)#
```

## <a name="menampilkan-informasi-PON-Management" href="#menampilkan-informasi-PON-Management"><i class="fas fa-link me-2 text-dark"></i></a>Menampilkan Informasi PON Management

- Command

```sh
host(gpon-onu-mng)#show onu running config gpon-onu_1/1/7:2
```

- Output

> NOTE:
>
> - `security-mng 211 state enable ingress-type lan protocol web` = berfungsi untuk mengizinkan membuka gateway onu di web dengan koneksi melalui port eth
>
> - `security-mng 211 state enable mode permit protocol web` = berfungsi untuk mengizinkan remote gateway onu di web denga ip host nya

```sh
pon-onu-mng gpon-onu_1/1/7:2
  service internet gemport 1 vlan xxx
  service mgmt gemport 2 vlan 88
  service hotspot gemport 6 vlan xxx-yyy,xxx
  wan-ip 1 mode pppoe username XXXXXXXXXXXX password XXXXXXXXX vlan-profile MGMT-ONU host 1
  name XXXXXXX
  vlan port eth_0/1 mode tag vlan xxx
  vlan port eth_0/2 mode tag vlan xxx
  vlan port eth_0/3 mode tag vlan xxx
  vlan port eth_0/4 mode tag vlan xxx
  vlan port wifi_0/1 mode tag vlan xxx
  security-mng 211 state enable ingress-type lan protocol web
  security-mng 212 state enable mode permit protocol web
  ssid auth wep wifi_0/1 open-system
  ssid ctrl wifi_0/1 name XXXX
!
```

## <a name="menghapus-VLAN-pada-port-ethernet" href="#menghapus-VLAN-pada-port-ethernet"><i class="fas fa-link me-2 text-dark"></i></a>Menghapus VLAN pada Port Ethernet

- Command

```sh
host(gpon-onu-mng)#no vlan port eth_0/1 mode
```

- Output (Before)

```sh
pon-onu-mng gpon-onu_1/1/7:2
  service internet gemport 1 vlan xxx
  service mgmt gemport 2 vlan 88
  service hotspot gemport 6 vlan xxx-yyy,xxx
  wan-ip 1 mode pppoe username XXXXXXXXXXXX password XXXXXXXXX vlan-profile MGMT-ONU host 1
  name XXXXXXX
  vlan port eth_0/1 mode tag vlan xxx
  ...
  ...
  ...
  ...
  security-mng 211 state enable ingress-type lan protocol web
  security-mng 212 state enable mode permit protocol web
  ssid auth wep wifi_0/1 open-system
  ssid ctrl wifi_0/1 name XXXX
!
```

- Output (After)

```sh
pon-onu-mng gpon-onu_1/1/7:2
  service internet gemport 1 vlan xxx
  service mgmt gemport 2 vlan 88
  service hotspot gemport 6 vlan xxx-yyy,xxx
  wan-ip 1 mode pppoe username XXXXXXXXXXXX password XXXXXXXXX vlan-profile MGMT-ONU host 1
  name XXXXXXX
  ...
  ...
  ...
  ...
  security-mng 211 state enable ingress-type lan protocol web
  security-mng 212 state enable mode permit protocol web
  ssid auth wep wifi_0/1 open-system
  ssid ctrl wifi_0/1 name XXXX
!
```

## <a name="menambahkan-vlan-dengan-mode-trunk-pada-port-ethernet" href="#menambahkan-vlan-dengan-mode-trunk-pada-port-ethernet"><i class="fas fa-link me-2 text-dark"></i></a>Menambahkan VLAN dengan mode trunk pada port Ethernet

- Command

```sh
vlan port eth_0/1 mode trunk
```

- Output

```sh
pon-onu-mng gpon-onu_1/1/7:2
  service internet gemport 1 vlan xxx
  service mgmt gemport 2 vlan 88
  service hotspot gemport 6 vlan xxx-yyy,xxx
  wan-ip 1 mode pppoe username XXXXXXXXXXXX password XXXXXXXXX vlan-profile MGMT-ONU host 1
  name XXXXXXX
  vlan port eth_0/1 mode trunk
  ...
  ...
  ...
  ...
  security-mng 211 state enable ingress-type lan protocol web
  security-mng 212 state enable mode permit protocol web
  ssid auth wep wifi_0/1 open-system
  ssid ctrl wifi_0/1 name XXXX
!
```

## <a name="menambahkan-vlan-pada-interface-ethernet" href="#menambahkan-vlan-pada-interface-ethernet"><i class="fas fa-link me-2 text-dark"></i></a>Menambahkan VLAN pada Interface Ethernet

- Command

> NOTE:
>
> - xxx = start vlan
> - yyy = end vlan

```sh
vlan port eth_0/1 vlan xxx-yyy
```

- Output

```sh
pon-onu-mng gpon-onu_1/1/7:2
  service internet gemport 1 vlan xxx
  service mgmt gemport 2 vlan 88
  service hotspot gemport 6 vlan xxx-yyy,xxx
  wan-ip 1 mode pppoe username XXXXXXXXXXXX password XXXXXXXXX vlan-profile MGMT-ONU host 1
  name XXXXXXX
  vlan port eth_0/1 mode trunk
  ...
  ...
  ...
  ...
  vlan port eth_0/1 vlan xxx-yyy
  security-mng 211 state enable ingress-type lan protocol web
  security-mng 212 state enable mode permit protocol web
  ssid auth wep wifi_0/1 open-system
  ssid ctrl wifi_0/1 name XXXX
!
```
