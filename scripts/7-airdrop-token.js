import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop("0x38E16776B64C0dF63fedbc2Caf243ee21A725Ff5");

const token = sdk.getToken('0xC02C3158c429C5a20e1cD0768901577B7aA9f98e')

const showNFTHolders = async()=>{
    try{
        const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);
        if (walletAddresses.length === 0) {
            console.log(
              "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
            );
            process.exit(0);
          }

          const airDropTargets = walletAddresses.map((address)=>{
              //pick a random number between 1000 and 10000
              const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
              console.log('Going to airdrop ', randomAmount, 'L2G to', address);


              //setup the target
              const airdropTarget = {
                  toAddress:address
                ,amount:randomAmount
              }

              return airdropTarget;
          })
          console.log("🌈 Starting airdrop...");
          await token.transferBatch(airDropTargets);
          console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
    }catch(error){
        console.error("Failed to airdrop tokens", err);

    }
}
showNFTHolders()

 




