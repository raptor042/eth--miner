import { ethers } from "ethers"
import { MINER_ABI, MINER_CA } from "./__web3__/config.js"
import { getSigner } from "./__web3__/init.js"
import { transfer_to_bank, transfer_to_transaction_wallet } from "./__web3__/index.js"

const onMine = async () => {
    const miner = new ethers.Contract(
        MINER_CA,
        MINER_ABI,
        getSigner()
    )

    try {
        const tFee = await miner.transaction_fee()
        console.log(ethers.formatEther(tFee))

        miner.on("Mine", async (user, amount, e) => {
            console.log(user, ethers.formatEther(amount))

            await transfer_to_bank(ethers.formatEther(amount))

            setTimeout(async () => {
                await transfer_to_transaction_wallet(ethers.formatEther(tFee))
            }, 5000)
        })
    } catch (error) {
        console.log(error)
    }
}

const onClaim = async () => {
    const miner = new ethers.Contract(
        MINER_CA,
        MINER_ABI,
        getSigner()
    )

    try {
        const tFee = await miner.transaction_fee()
        console.log(ethers.formatEther(tFee))

        miner.on("Claim", async (user, amount, e) => {
            console.log(user, ethers.formatEther(amount))

            const pFees = await miner.getPFees()
            console.log(ethers.formatEther(pFees))

            await transfer_to_transaction_wallet(ethers.formatEther(tFee))

            if(Number(ethers.formatEther(pFees)) > 0) {
                setTimeout(async () => {
                    await transfer_to_penalty_wallet(ethers.formatEther(pFees))
                }, 5000)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const onWithdraw = async () => {
    const miner = new ethers.Contract(
        MINER_CA,
        MINER_ABI,
        getSigner()
    )

    try {
        const tFee = await miner.transaction_fee()
        console.log(ethers.formatEther(tFee))

        miner.on("Withdraw", async (user, amount, e) => {
            console.log(user, ethers.formatEther(amount))

            const pFees = await miner.getPFees()
            console.log(ethers.formatEther(pFees))

            await transfer_to_transaction_wallet(ethers.formatEther(tFee))

            if(Number(ethers.formatEther(pFees)) > 0) {
                setTimeout(async () => {
                    await transfer_to_penalty_wallet(ethers.formatEther(pFees))
                }, 5000)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

setTimeout(async () => {
    await transfer_to_transaction_wallet("0.01")
}, 1000)