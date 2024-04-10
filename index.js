import { ethers } from "ethers"
import { getSigner } from "./__web3__/init.js"
import { set_admin } from "./__web3__/index.js"

setTimeout(() => {
    set_admin("")
}, 1000)