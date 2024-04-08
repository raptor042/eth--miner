import { ethers } from "ethers"
import { MINER_ABI, MINER_CA } from "./config.js"
import { getSigner } from "./init.js"

export const transfer_to_bank = async amount => {
    const miner = new ethers.Contract(
        MINER_CA,
        MINER_ABI,
        getSigner()
    )

    try {
        await miner.transfer_to_bank(ethers.parseEther(amount))
    } catch (error) {
        console.log(error)
    }
}

export const transfer_to_transaction_wallet = async tFee => {
    const miner = new ethers.Contract(
        MINER_CA,
        MINER_ABI,
        getSigner()
    )

    try {
        await miner.transfer_to_transaction_wallet(ethers.parseEther(tFee))
    } catch (error) {
        console.log(error)
    }
}

export const transfer_to_penalty_wallet = async tFee => {
    const miner = new ethers.Contract(
        MINER_CA,
        MINER_ABI,
        getSigner()
    )

    try {
        await miner.transfer_to_penalty_wallet(ethers.parseEther(tFee))
    } catch (error) {
        console.log(error)
    }
}