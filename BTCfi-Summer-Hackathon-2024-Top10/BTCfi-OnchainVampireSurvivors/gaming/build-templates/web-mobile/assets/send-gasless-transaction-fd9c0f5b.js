import{_}from"./index-0c28943e.js";async function p({account:n,transaction:t,serializableTransaction:o,gasless:r}){if(o.value&&o.value>0n)throw new Error("Gasless transactions cannot have a value");if(r.provider==="biconomy"){const{relayBiconomyTransaction:e}=await _(()=>import("./biconomy-110a0554.js"),["assets/biconomy-110a0554.js","assets/index-0c28943e.js","assets/index-db695948.css"]);return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}if(r.provider==="openzeppelin"){const{relayOpenZeppelinTransaction:e}=await _(()=>import("./openzeppelin-3310ffc3.js"),["assets/openzeppelin-3310ffc3.js","assets/index-0c28943e.js","assets/index-db695948.css"]);return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}if(r.provider==="engine"){const{relayEngineTransaction:e}=await _(()=>import("./engine-364c1a10.js"),["assets/engine-364c1a10.js","assets/index-0c28943e.js","assets/index-db695948.css"]);return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}throw new Error("Unsupported gasless provider")}export{p as sendGaslessTransaction};
