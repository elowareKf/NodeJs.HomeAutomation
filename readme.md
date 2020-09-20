# HomeServer

## Offset Tabelle für den RevPi

Die Offsettabelle im RevPi beschreibt die Adressen an denen die IO-Werte 
gesetzt werden müssen.

| Name              | Offset | Kommentar |
|-------------------|--------|-----------|
|RevPiStatus		|0	     |//BYTE     |  
|RevPiIOCycle		|1	     |//BYTE     |  
|RevPiLED		    |6	     |//BYTE     |  
|O_1		        |81.0	 |//BOOL     |  
|O_2		        |81.1	 |//BOOL     |  
|O_3		        |81.2	 |//BOOL     |  
|O_4		        |81.3	 |//BOOL     |  
|O_5		        |81.4	 |//BOOL     |  
|O_6		        |81.5	 |//BOOL     |  
|O_7		        |81.6	 |//BOOL     |  
|O_8		        |81.7	 |//BOOL     |  
|O_9		        |81.8	 |//BOOL     |  
|O_10		        |81.9	 |//BOOL     |  
|O_11		        |81.10	 |//BOOL     |  
|O_12		        |81.11	 |//BOOL     |  
|O_13		        |81.12	 |//BOOL     |  
|O_14		        |81.13	 |//BOOL     |  
|O_15		        |81.14	 |//BOOL     |  
|O_16		        |81.15	 |//BOOL     |  
|I_1		        |124.0	 |//BOOL     |  
|I_2		        |124.1	 |//BOOL     |  
|I_3		        |124.2	 |//BOOL     |  
|I_4		        |124.3	 |//BOOL     |  
|I_5		        |124.4	 |//BOOL     |  
|I_6		        |124.5	 |//BOOL     |  
|I_7		        |124.6	 |//BOOL     |  
|I_8		        |124.7	 |//BOOL     |  
|I_9		        |124.8	 |//BOOL     |  
|I_10		        |124.9	 |//BOOL     |  
|I_11		        |124.10	 |//BOOL     |  
|I_12		        |124.11	 |//BOOL     |  
|I_13		        |124.12	 |//BOOL     |  
|I_14		        |124.13	 |//BOOL     |  
|I_15		        |124.14	 |//BOOL     |  
|I_16		        |124.15	 |//BOOL     |  
|O_1_i03		    |194.0	 |//BOOL     |  
|O_2_i03		    |194.1	 |//BOOL     |  
|O_3_i03		    |194.2	 |//BOOL     |  
|O_4_i03		    |194.3	 |//BOOL     |  
|O_5_i03		    |194.4	 |//BOOL     |  
|O_6_i03		    |194.5	 |//BOOL     |  
|O_7_i03		    |194.6	 |//BOOL     |  
|O_8_i03		    |194.7	 |//BOOL     |  
|O_9_i03		    |194.8	 |//BOOL     |  
|O_10_i03		    |194.9	 |//BOOL     |  
|O_11_i03		    |194.10	 |//BOOL     |  
|O_12_i03		    |194.11	 |//BOOL     |  
|O_13_i03		    |194.12	 |//BOOL     |  
|O_14_i03		    |194.13	 |//BOOL     |  
|O_15_i03		    |194.14	 |//BOOL     |  
|O_16_i03		    |194.15	 |//BOOL     |  


## /etc/init.d script

The header of the script

```sh
#!/bin/sh
### BEGIN INIT INFO
# Provides: homebridge
# Required-Start:    $network $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start daemon at boot time
# Description:       Enable service provided by daemon.
### END INIT INFO
```

to install the script run

```sh
sudo update-rc.d homeserver defaults
```