"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[77601],{3910:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>n,data:()=>s});var r=t(24691);const o={class:"hint-container tip"},i={},n=(0,t(88242).A)(i,[["render",function(e,a){const t=(0,r.g2)("RouteLink");return(0,r.uX)(),(0,r.CE)("div",null,[a[11]||(a[11]=(0,r.Lk)("h1",{id:"supported-adapters",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#supported-adapters"},[(0,r.Lk)("span",null,"Supported Adapters")])],-1)),a[12]||(a[12]=(0,r.Lk)("p",null,"All officially supported adapters are listed on this page. Note that before an adapter can be used with Zigbee2MQTT it has to be flashed with a coordinator firmware (some adapters come preflashed).",-1)),(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,[(0,r.bF)(t,{to:"/guide/adapters/zstack.html"},{default:(0,r.k6)((()=>a[0]||(a[0]=[(0,r.eW)("zStack based (Texas Instruments)")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(t,{to:"/guide/adapters/emberznet.html"},{default:(0,r.k6)((()=>a[1]||(a[1]=[(0,r.eW)("EmberZNet based (Silicon Labs)")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(t,{to:"/guide/adapters/deconz.html"},{default:(0,r.k6)((()=>a[2]||(a[2]=[(0,r.eW)("deCONZ based (Dresden Elektronik)")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(t,{to:"/guide/adapters/zigate.html"},{default:(0,r.k6)((()=>a[3]||(a[3]=[(0,r.eW)("ZiGate based")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(t,{to:"/guide/adapters/zboss.html"},{default:(0,r.k6)((()=>a[4]||(a[4]=[(0,r.eW)("ZBOSS based (Nordic Semiconductor)")]))),_:1})])]),(0,r.Lk)("div",o,[a[7]||(a[7]=(0,r.Lk)("p",{class:"hint-container-title"},"TIP",-1)),(0,r.Lk)("p",null,[a[6]||(a[6]=(0,r.eW)("Want to migrate to a different adapter? Read ")),(0,r.bF)(t,{to:"/guide/faq/#how-do-i-migrate-from-one-adapter-to-another"},{default:(0,r.k6)((()=>a[5]||(a[5]=[(0,r.eW)("this")]))),_:1})])]),a[13]||(a[13]=(0,r.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,r.Lk)("span",null,"Notes")])],-1)),a[14]||(a[14]=(0,r.Lk)("p",null,"Before buying an adapter, please read the notes below!",-1)),(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,[a[9]||(a[9]=(0,r.eW)("Want to migrate to a different adapter? This may require repairing all your devices in some cases, see ")),(0,r.bF)(t,{to:"/guide/faq/#what-does-and-does-not-require-repairing-of-all-devices"},{default:(0,r.k6)((()=>a[8]||(a[8]=[(0,r.eW)("FAQ")]))),_:1})]),a[10]||(a[10]=(0,r.Fv)("<li>Network adapters connected via WiFi might have reduced stability as the serial protocol does not have enough fault-tolerance to handle packet loss or latency delays that can normally occur over WiFi connections. If cannot use a locally connected USB or UART/GPIO adapter then the recommendation is to use remote adapter that connected via Ethernet (wired) to avoid issues.</li><li>What are the differences between the various CC2652/CC1352 chips? <ul><li>Chips ending with <code>P</code> have a power amplifier which support up-to 20dBm vs 5dBm on adapters ending with <code>R</code>/<code>RB</code>.</li><li>Chips starting with <code>CC1352</code> support the sub-1 GHz frequency (which is not relevant for Zigbee since it uses 2.4 GHz), <code>CC2652</code> only supports 2.4 GHz. So for Zigbee2MQTT purposes there is no difference between <code>CC1352</code> and <code>CC2652</code>.</li><li>Chips ending with <code>RB</code> don&#39;t require a crystal on the PCB, this only makes a difference for the manufacturing process.</li></ul></li>",2))]),a[15]||(a[15]=(0,r.Fv)('<h3 id="coordinator-backups" tabindex="-1"><a class="header-anchor" href="#coordinator-backups"><span>Coordinator backups</span></a></h3><p>Note that only adapters based on zStack or EmberZNet currently support backing up the coordinator (<code>coordinator_backup.json</code>).</p><h4 id="flashing-an-existing-adapter" tabindex="-1"><a class="header-anchor" href="#flashing-an-existing-adapter"><span>Flashing an existing adapter</span></a></h4><p>Flashing tools can be used to upgrade the firmware on an existing adapter without needing to repair devices. See the <a href="https://www.zigbee2mqtt.io/guide/faq/#what-does-and-does-not-require-repairing-of-all-devices" target="_blank" rel="noopener noreferrer">FAQ</a> for information on what does and does not require repairing of devices.</p><h4 id="is-your-os-unable-to-find-your-device" tabindex="-1"><a class="header-anchor" href="#is-your-os-unable-to-find-your-device"><span>Is your OS unable to find your device?</span></a></h4><p>If you&#39;re asking yourself &quot;Why won&#39;t my dongle or adapter show up?&quot; when you are using (for example) Flash Programmer 2, chances are that your OS can&#39;t communicate with your device over VCP (Virtual COM Port) serial port, causing your dongle not showing up as a flashable device. To fix this problem, be sure to install a USB-to-UART bridge/converter VCP driver for your operating system like the one at <a href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers" target="_blank" rel="noopener noreferrer">Silicon Labs</a>, <a href="https://ftdichip.com/drivers/vcp-drivers/" target="_blank" rel="noopener noreferrer">FTDI Chip</a>, or <a href="http://www.wch-ic.com/downloads/category/30.html" target="_blank" rel="noopener noreferrer">WCH (CH34x/CH91xx)</a>.</p><h3 id="router" tabindex="-1"><a class="header-anchor" href="#router"><span>Router</span></a></h3><p>Besides serving as a coordinator some adapters can also be used as a Zigbee router (check if there is a router firmware by clicking on your adapter). To factory reset/pair:</p><ul><li>Texas Instruments CC2531: press the S2 button for 5 seconds.</li><li>Texas Instruments CC2530: power on/power off the device three times (power on, wait 2 seconds, power off, repeat this cycle three times).</li><li>Adapters based on CC2652/CC1352: single press (one of the) buttons on the device</li><li>Adapters based on Silicon Labs EmberZNet: <ul><li><a href="https://www.zigbee2mqtt.io/devices/ZBDongle-E.html" target="_blank" rel="noopener noreferrer">Sonoff Dongle-E</a></li><li><a href="https://www.zigbee2mqtt.io/devices/SLZB-06M.html" target="_blank" rel="noopener noreferrer">SMLight SLZB-06M</a></li></ul></li></ul>',9))])}]]),s=JSON.parse('{"path":"/guide/adapters/","title":"Supported Adapters","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1,"next":"../installation/"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Coordinator backups","slug":"coordinator-backups","link":"#coordinator-backups","children":[]},{"level":3,"title":"Router","slug":"router","link":"#router","children":[]}]}],"git":{"updatedTime":1731441279000},"filePathRelative":"guide/adapters/README.md"}')}}]);