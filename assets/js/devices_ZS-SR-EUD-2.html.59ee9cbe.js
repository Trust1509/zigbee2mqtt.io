"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27713],{16768:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>a});var d=t(24691);const n={},i=(0,t(88242).A)(n,[["render",function(e,o){const t=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[o[7]||(o[7]=(0,d.Lk)("h1",{id:"moes-zs-sr-eud-2",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#moes-zs-sr-eud-2"},[(0,d.Lk)("span",null,"Moes ZS-SR-EUD-2")])],-1)),(0,d.Lk)("table",null,[o[6]||(o[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[o[2]||(o[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"ZS-SR-EUD-2")],-1)),(0,d.Lk)("tr",null,[o[1]||(o[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(t,{to:"/supported-devices/#v=Moes"},{default:(0,d.k6)((()=>o[0]||(o[0]=[(0,d.eW)("Moes")]))),_:1})])]),o[3]||(o[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Star ring smart dimmer switch 2 gangs")],-1)),o[4]||(o[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"light (state, brightness, min_brightness, max_brightness), countdown, power_on_behavior, backlight_mode, linkquality")],-1)),o[5]||(o[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZS-SR-EUD-2.png",alt:"Moes ZS-SR-EUD-2"})])],-1))])]),o[8]||(o[8]=(0,d.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#light-l1-endpoint"><span>Light (l1 endpoint)</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>min_brightness</code>, <code>max_brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_l1&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_l1&quot;: &quot;&quot;}</code>.</li></ul><h3 id="countdown-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-l1-endpoint"><span>Countdown (numeric, l1 endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_l1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="light-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#light-l2-endpoint"><span>Light (l2 endpoint)</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>min_brightness</code>, <code>max_brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_l2&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_l2&quot;: &quot;&quot;}</code>.</li></ul><h3 id="countdown-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-l2-endpoint"><span>Countdown (numeric, l2 endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_l2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_l2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>previous</code>.</p><h3 id="backlight-mode-enum" tabindex="-1"><a class="header-anchor" href="#backlight-mode-enum"><span>Backlight mode (enum)</span></a></h3><p>Mode of the backlight. Value can be found in the published state on the <code>backlight_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>normal</code>, <code>inverted</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17))])}]]),a=JSON.parse('{"path":"/devices/ZS-SR-EUD-2.html","title":"Moes ZS-SR-EUD-2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes ZS-SR-EUD-2 control via MQTT","description":"Integrate your Moes ZS-SR-EUD-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light (l1 endpoint)","slug":"light-l1-endpoint","link":"#light-l1-endpoint","children":[]},{"level":3,"title":"Countdown (numeric, l1 endpoint)","slug":"countdown-numeric-l1-endpoint","link":"#countdown-numeric-l1-endpoint","children":[]},{"level":3,"title":"Light (l2 endpoint)","slug":"light-l2-endpoint","link":"#light-l2-endpoint","children":[]},{"level":3,"title":"Countdown (numeric, l2 endpoint)","slug":"countdown-numeric-l2-endpoint","link":"#countdown-numeric-l2-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Backlight mode (enum)","slug":"backlight-mode-enum","link":"#backlight-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1731441279000},"filePathRelative":"devices/ZS-SR-EUD-2.md"}')}}]);