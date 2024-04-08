import { ethers } from "ethers"
import { config } from "dotenv"

config()

export const getProvider = () => {
    return new ethers.JsonRpcProvider(process.env.BASE_MAINNET_API_URL)
}

export const getSigner = () => {
    return new ethers.Wallet(process.env.PRIVATE_KEY, getProvider())
}