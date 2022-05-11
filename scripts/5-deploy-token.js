import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const tokenAddress = await sdk.deployer.deployToken({
      name: "L2G",
      symbol: "  L2G",
      
      primary_sale_recipient: AddressZero,
    }, {gasLimit: 200000});
    console.log("Successfully deployed token:", tokenAddress);
  } catch (error) {
    console.log("Error deploying token:", error);
  }
})();
