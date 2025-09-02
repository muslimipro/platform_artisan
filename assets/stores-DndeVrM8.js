var K=Object.defineProperty;var H=(i,e,t)=>e in i?K(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var h=(i,e,t)=>H(i,typeof e!="symbol"?e+"":e,t);import{r as l,d as L}from"./index-6znFarQA.js";function P(i){return new Promise(e=>setTimeout(e,i))}class J{constructor(){h(this,"_lock",Promise.resolve());this._lock=Promise.resolve()}acquire(){let e;const t=new Promise(r=>e=r),a=this._lock.then(()=>e);return this._lock=this._lock.then(()=>t),a}}class U{constructor(){h(this,"mutex");h(this,"inTransaction");h(this,"receivedData");h(this,"activityCallback");h(this,"receiveCallback");h(this,"disconnectCallback");h(this,"writeChunk");h(this,"emit");h(this,"info");h(this,"prevRecvCbk");if(new.target===U)throw new Error("Cannot instantiate abstract class Transport");this.mutex=new J,this.inTransaction=!1,this.receivedData="",this.activityCallback=()=>{},this.receiveCallback=()=>{},this.disconnectCallback=()=>{},this.prevRecvCbk=e=>{},this.writeChunk=128,this.emit=!1,this.info={}}async getInfo(){return this.info}async write(e){const a=new TextEncoder().encode(e);try{if(a.byteLength==0)await this.writeBytes(a),this.activityCallback();else{let r=0;for(;r<a.byteLength;){const s=a.slice(r,r+this.writeChunk);await this.writeBytes(s),this.activityCallback(),r+=this.writeChunk}}}catch(r){throw r}}onActivity(e){this.activityCallback=e}onReceive(e){this.receiveCallback=e}onDisconnect(e){this.disconnectCallback=e}async startTransaction(){await P(10);const e=await this.mutex.acquire();return this.prevRecvCbk=this.receiveCallback,this.inTransaction=!0,this.receivedData="",this.receiveCallback=t=>{this.receivedData+=t,this.emit&&this.prevRecvCbk&&this.prevRecvCbk(t)},()=>{this.prevRecvCbk&&(this.receiveCallback=this.prevRecvCbk,this.receiveCallback(this.receivedData)),this.receivedData="",this.inTransaction=!1,e()}}async readExactly(e,t=5e3){if(!this.inTransaction)throw new Error("Not in transaction");let a=Date.now()+t;for(;t<=0||Date.now()<a;){if(this.receivedData.length>=e){const s=this.receivedData.substring(0,e);return this.receivedData=this.receivedData.substring(e),s}const r=this.receivedData.length;await P(10),this.receivedData.length>r&&(a=Date.now()+t)}throw new Error("Timeout")}async readUntil(e,t=5e3){if(!this.inTransaction)throw new Error("Not in transaction");const a=Date.now();let r=0;for(;t<=0||r<t;){const s=this.receivedData.indexOf(e)+e.length;if(s>=e.length){const u=this.receivedData.substring(0,s);return this.receivedData=this.receivedData.substring(s),u}await P(10),r=Date.now()-a}throw new Error("Timeout reached before finding the ending sequence")}}class G extends U{constructor(){super();h(this,"port");h(this,"reader");h(this,"writer");h(this,"serial");if(this.port=void 0,this.reader=null,this.writer=null,"serial"in navigator)this.serial=navigator.serial;else throw new Error("WebSerial not available")}async requestAccess(){var s,u,w,o;const r={filters:[{usbVendorId:11914,usbProductId:5}]};this.port=await((s=this.serial)==null?void 0:s.requestPort(r));try{const n=(u=this.port)==null?void 0:u.getInfo();this.info={vid:(w=n==null?void 0:n.usbVendorId)==null?void 0:w.toString(16).padStart(4,"0"),pid:(o=n==null?void 0:n.usbProductId)==null?void 0:o.toString(16).padStart(4,"0")}}catch(n){throw n}}async connect(){var t,a;if(!this.port)throw new Error("Port is not available");await this.port.open({baudRate:115200}),this.reader=((t=this.port.readable)==null?void 0:t.getReader())||null,this.writer=((a=this.port.writable)==null?void 0:a.getWriter())||null,this.reader&&this.listen()}async disconnect(){if(!this.reader||!this.port)throw new Error("No active connection to disconnect from");try{await this.reader.cancel()}catch{}await this.port.forget()}async writeBytes(t){if(!this.writer)throw new Error("Writer is not initialized");await this.writer.write(t)}async listen(){if(!this.reader)throw new Error("Reader is not initialized");const t=new TextDecoder;await this.write(""),await this.write("");try{for(;;){const{value:a,done:r}=await this.reader.read();if(r||!a)break;this.receiveCallback(t.decode(a))}}catch(a){throw console.log("disconnect callback"),this.disconnectCallback(),a}}async flushInput(){if(!this.reader)throw new Error("Reader is not initialized");this.receivedData=""}}class v{constructor(e){h(this,"port");h(this,"end");this.port=e,this.end=async()=>{}}static async begin(e,t=!1){var r;const a=new v(e);await a.enterRawRepl(t);try{await a.exec("import sys,os")}catch(s){throw await((r=a.end)==null?void 0:r.call(a)),s}return a}async interruptProgram(){await this.port.write("")}async enterRawRepl(e=!1){const t=await this.port.startTransaction();try{await this.interruptProgram(),await this.port.flushInput(),await this.port.write("\r"),await this.port.readUntil(`raw REPL; CTRL-B to exit\r
`),e&&(await this.port.write(""),await this.port.readUntil("OK")),this.end=async()=>{try{await this.port.write(""),await this.port.readUntil(`>\r
`),await this.port.readUntil(">>> ")}finally{t()}}}catch(a){throw t(),a}}async exec(e,t=5e3,a=!1){if(e.length===0)return"";await this.port.write(e),await this.port.write(""),await this.port.readUntil("OK"),this.port.emit=a,a&&this.port.prevRecvCbk(this.port.receivedData);const r=(await this.port.readUntil("",t)).slice(0,-1),s=(await this.port.readUntil("",t)).slice(0,-1);if(s.length)throw new Error(s);return r}async readFile(e){const t=await this.exec(`
try:
 import binascii
 h=lambda x: binascii.hexlify(x).decode()
 h(b'')
except:
 h=lambda b: ''.join('{:02x}'.format(byte) for byte in b)
with open('${e}','rb') as f:
 while 1:
  b=f.read(64)
  if not b:break
  print(h(b),end='')
`);return t.length?new Uint8Array(t.match(/../g).map(a=>parseInt(a,16))):new Uint8Array}async readFileLines(e,t){const a=await this.exec(`
with open('${e}', 'rb') as f:
 lines = []
 for _ in range(${t}):
  line = f.readline()
  if not line:
   break
  lines.append(line)
 data = b''.join(lines)
try:
 import binascii
 h = lambda x: binascii.hexlify(x).decode()
except:
 h = lambda b: ''.join('{:02x}'.format(byte) for byte in b)
print(h(data), end='')
`);return a.length?new Uint8Array(a.match(/../g).map(r=>parseInt(r,16))):new Uint8Array}async writeFile(e,t,a=128,r=!1){if(typeof t=="string"){const o=new TextEncoder;t=new Uint8Array(o.encode(t))}const s=o=>Array.from(o).map(n=>n.toString(16).padStart(2,"0")).join(""),u=o=>{o=new Uint8Array(o);let n="b'";for(const f of o)f>=32&&f<=126?f===92||f===39?n+="\\"+String.fromCharCode(f):n+=String.fromCharCode(f):n+="\\x"+f.toString(16).padStart(2,"0");return n+="'",n},w=r?e:e+".tmp";await this.exec(`
try:
 import binascii
 h=binascii.unhexlify
 h('')
except:
 h=lambda s: bytes(int(s[i:i+2], 16) for i in range(0, len(s), 2))
f=open('${w}','wb')
w=lambda d: f.write(h(d))
o=f.write
`);for(let o=0;o<t.byteLength;o+=a){const n=t.slice(o,o+a),f="w('"+s(n)+"')",p="o("+u(n)+")";f.length<p.length?await this.exec(f):await this.exec(p)}r?await this.exec("f.close()"):await this.exec(`f.close()
try: os.remove('${e}')
except: pass
os.rename('${w}','${e}')
`)}async getDeviceInfo(){const e=await this.exec(`
try: u=os.uname()
except: u=('','','','',sys.platform)
try: v=sys.version.split(';')[1].strip()
except: v='MicroPython '+u[2]
mpy=getattr(sys.implementation, '_mpy', 0)
sp=':'.join(sys.path)
d=[u[4],u[2],u[0],v,mpy>>10,mpy&0xFF,(mpy>>8)&3,sp]
print('|'.join(str(x) for x in d))
`);let[t,a,r,s,u,w,o,n]=e.trim().split("|");const f=n.split(":");try{u=["","x86","x64","armv6","armv6m","armv7m","armv7em","armv7emsp","armv7emdp","xtensa","xtensawin","rv32imc"][parseInt(u)]}catch{u=""}let p=parseInt(w,10);const E=parseInt(o,10);return p||(p="py"),{machine:t,release:a,sysname:r,version:s,mpy_arch:u,mpy_ver:p,mpy_sub:E,sys_path:f}}async touchFile(e){await this.exec(`
f=open('${e}','wb')
f.close()
`)}async moveFile(e,t){await this.exec(`os.rename('${e}', '${t}')`)}async makeDir(e){await this.exec(`os.mkdir('${e}')`)}async makePath(e){await this.exec(`
p=''
for d in '${e}'.split('/'):
 if not d: continue
 p += '/'+d
 try: os.mkdir(p)
 except OSError as e:
  if e.args[0] not in (17, 20): raise
`)}async removeFile(e){await this.exec(`
try:
 os.remove('${e}')
except OSError as e:
 if e.args[0] == 39:
  throw new Error('Directory not empty')
 else:
  throw e
`)}async removeDir(e){await this.exec(`
try:
 os.rmdir('${e}')
except OSError as e:
 if e.args[0] == 39:
  throw new Error('Directory not empty')
 else:
  throw e
`)}async getFsStats(e="/"){return(await this.exec(`
s = os.statvfs('${e}')
fs = s[1] * s[2]
ff = s[3] * s[0]
fu = fs - ff
print('%s|%s|%s'%(fu,ff,fs))
`)).trim().split("|")}async getFiles(){return await this.exec(`
def walk(p):
 for n in os.listdir(p if p else '/'):
  fn=p+'/'+n
  try: s=os.stat(fn)
  except: s=(0,)*7
  try:
   if s[0] & 0x4000 == 0:
    print('f|'+fn+'|'+str(s[6]))
   elif n not in ('.','..'):
    print('d|'+fn+'|'+str(s[6]))
    walk(fn)
  except:
   print('f|'+p+'/???|'+str(s[6]))
walk('')
`)}async readSysInfoMD(){return await this.exec(`
import gc
gc.collect()
mu = gc.mem_alloc()
mf = gc.mem_free()
ms = mu + mf
uname=os.uname()
p=print
def size_fmt(size):
 suffixes = ['B','KiB','MiB','GiB','TiB']
 i = 0
 while size > 1024 and i < len(suffixes)-1:
  i += 1
  size //= 1024
 return "%d%s" % (size, suffixes[i])
p('## Machine')
p('- Name: \`'+uname.machine+'\`')
try:
 gc.collect()
 import microcontroller as uc
 p('- CPU: \`%s @ %s MHz\`' % (sys.platform, uc.cpu.frequency // 1_000_000))
 p('- UID: \`%s\`' % (uc.cpu.uid.hex(),))
 p('- Temp.: \`%s °C\`' % (uc.cpu.temperature,))
 p('- Voltage: \`%s V\`' % (uc.cpu.voltage,))
except:
 try:
  gc.collect()
  import machine
  p('- CPU: \`%s @ %s MHz\`' % (sys.platform, machine.freq() // 1_000_000))
 except:
  p('- CPU: \`'+sys.platform+'\`')
p()
p('## System')
p('- Version: \`'+sys.version.split(";")[1].strip()+'\`')
if ms:
 p('- Memory use:  \`%s / %s, free: %d%%\`' % (size_fmt(mu), size_fmt(ms), (mf * 100) // ms))
`)}}const _=l(!1),he=l(V()),D=l(!1),Q=l(!1),X=l(),y=l(!1),$=l(!1),O=l(!1),M=l(),k=l(!1),j=l(!1),Y=l(!1),Z=l(),z=l(!1);l(!1);l(!1);l();const C=l(!1),A=l(!1),ee=l(!1),te=l();let c=null;function ie(i){return new Promise(e=>setTimeout(e,i))}async function ae(i){try{k.value=!0,j.value=!1,await i(),j.value=!0}catch(e){Y.value=!0,Z.value=e}finally{k.value=!1}}async function R(i){try{C.value=!0,A.value=!1,await i(),A.value=!0}catch(e){ee.value=!0,te.value=e}finally{C.value=!1}}async function re(){return await fetch("https://raw.githubusercontent.com/Artisan-education/artisan-libs/main/manifest.json").then(e=>e.json()).catch(()=>{})}async function we(){if(!c)return;z.value=!0;const i=await ne(),e=await re(),t=await v.begin(c,!0);for(const a of Object.keys(e)){const r=i[a],s=e[a];if(!r||r!==s){const u=await fetch("https://raw.githubusercontent.com/Artisan-education/artisan-libs/main/"+a).then(w=>w.text()).catch(()=>"");await R(async()=>{await t.makePath(a),await t.writeFile("/"+a,u)})}}await R(async()=>{await t.writeFile("/manifest.json",JSON.stringify(e,null,2))}),await t.end(),z.value=!1}function x(i){return"children"in i}function q(i){if(i){i.children.sort((e,t)=>x(e)&&!x(t)?-1:!x(e)&&x(t)?1:e.name.localeCompare(t.name));for(const e of i.children)x(e)&&q(e)}}async function pe(){if(!c)return{name:"",path:"",children:[]};const i=await v.begin(c,!0),e=await i.getFiles();await i.end();const t=se(e);return q(t),t}function se(i){const e={name:"",path:"",children:[]},t=i.trim().split(`
`),a={"":e};for(const r of t){const[s,u,w]=r.split("|"),o=u.split("/"),n=o[o.length-1],f=o.slice(0,-1).join("/")||"";if(s==="f"){const p={name:n,path:u,size:parseInt(w)};a[f]&&a[f].children.push(p)}else if(s==="d"){const p={name:n,path:u,children:[]};a[u]=p,a[f]&&a[f].children.push(p)}}return e}function I(i,e){let t=!1;const a=i.trim().split(`
`),r=s=>{const[u,w,o]=s.split("|");return w===e};return a.find(r)&&(t=!0),t}async function ne(){if(!c)return{};const i=await v.begin(c),e=await i.getFiles();let t="{}";return I(e,"/manifest.json")&&(t=await T("manifest.json",i)),await i.end(),JSON.parse(t)}function V(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?(console.error("WebSerial is not available on iOS"),!1):window.isSecureContext?"serial"in navigator||"usb"in navigator?!0:(console.error("Try Chrome, Edge, Opera, Brave","WebSerial and WebUSB are not supported"),!1):(console.error("WebSerial cannot be accessed with unsecure connection"),!1)}async function de(){let i;if(i=new G,!V())return null;try{await i.requestAccess()}catch(e){return X.value=e,null}return i}async function me(i,e,t){try{await i.connect(),D.value=!0}catch{_.value=!1,D.value=!1,y.value=!1,C.value=!1,k.value=!1,Q.value=!0;return}i.onReceive(e),i.onDisconnect(()=>{c==null||c.disconnect(),c=null,t(),D.value=!1,y.value=!1,C.value=!1,k.value=!1,_.value=!1}),c=i}async function ye(){c==null||c.disconnect(),c=null,_.value=!1,D.value=!1,y.value=!1,k.value=!1,C.value=!1}async function ve(i){if(c)if(y.value)await c.write(i);else{const e=await c.mutex.acquire();try{await c.write(i)}finally{e()}}}async function be(){if(!c)return"";try{await c.write("\r"),y.value=!1}catch(i){O.value=!0,y.value=!1,M.value=i}}async function ge(i){if(!c||(y.value&&await c.write("\r"),i.length===0))return;const e=!0,t=-1,a=await v.begin(c,e);try{$.value=!1,y.value=!0;const r=!0;await ie(10),await a.exec(i,t,r),$.value=!0}catch(r){let s;r instanceof Error?s=r.message:s=String(r),s.includes("KeyboardInterrupt")||(O.value=!0,M.value=r)}finally{c.emit=!1,y.value=!1}await a.end()}async function T(i,e){if(!c)return"";let t="";const a=e??await v.begin(c);return await ae(async()=>{const r=await a.readFile(i);t=new TextDecoder("utf-8",{fatal:!0}).decode(r)}),e||a.end(),t}async function xe(){if(!c)return"";const i=await v.begin(c),e=await i.getFiles();await i.end();let t="";return I(e,"/main.py")?t=await T("/main.py",i):I(e,"/code.py")?t=await T("/code.py",i):(t="",await oe("/main.py",t)),t}async function oe(i,e){if(!c)return;const t=await v.begin(c);await R(async()=>await t.writeFile(i,e)),t.end()}const ke=L("useTerminalStore",()=>{const i=l(0);let e=null;const t=l(""),a=65e3,r=new Uint8Array(a);let s=0,u=null;const w=new TextEncoder;let o=[],n="";const f=m=>{m=n+m,n="";const g=Array.from(m);let d=0;for(;d<g.length;){const F=g[d];if(F==="\b"){if(o.length>0){const b=o.pop();s=Math.max(0,s-b)}d++}else if(F==="\x1B")if(d+2<g.length)if(g[d+1]==="["&&g[d+2]==="K"){const b=o.slice(0,i.value).reduce((S,N)=>S+N,0);r.fill(0,b,s),s=b,o.splice(i.value),p(),d+=3}else d++;else{n=g.slice(d).join("");break}else{const b=w.encode(F);for(const S of b)s<a?r[s++]=S:(r.copyWithin(0,1),r[s-1]=S);o.push(b.length),i.value=o.length,p(),d++}}},p=()=>{u||(u=setTimeout(()=>{E(),u=null},16))},E=()=>{const m=new TextDecoder().decode(r.subarray(0,s));t.value=m,i.value=o.length,W()},B=()=>{t.value="",s=0,i.value=0,o=[],u&&(clearTimeout(u),u=null)},W=()=>{e&&(e.scrollTop=e.scrollHeight)};return{output:t,setStdout:m=>{t.value=m},caret:i,write:f,clear:B,openTerminal:m=>{e=m}}}),Ce=L("useMPDeviceStore",()=>{const i=l(localStorage.getItem("fileContent")||""),e=l(""),t=l(""),a=l(!1),r=l([]),s=l({name:"",path:"",children:[]});async function u(n,f){r.value=[n],t.value=n,i.value=f}async function w(n){r.value=[n],t.value=n,i.value=await T(n)}function o(n){i.value=n}return{isProject:a,activeFiles:r,fileContent:i,fileName:e,filePath:t,fileTree:s,openFile:u,loadFile:w,setCode:o}});export{ke as a,D as b,y as c,C as d,k as e,ye as f,oe as g,me as h,z as i,we as j,pe as k,xe as l,he as m,de as p,ge as r,be as s,Ce as u,ve as w};
