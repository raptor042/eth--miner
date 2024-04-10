import { ethers } from "ethers"
import { BANK_ABI, BANK_CA } from "./config.js"
import { getSigner } from "./init.js"

export const set_admin = async address => {
    const bank = new ethers.Contract(
        BANK_CA,
        BANK_ABI,
        getSigner()
    )

    try {
        await bank.setAdmin(address)
    } catch (error) {
        console.log(error)
    }
}