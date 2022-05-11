import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xC35cF5521aD17794f113E64eF131685cfd4376A4");

(async () => {
  try {
    const amount = 1000000;
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    console.log("✅ There now is", totalSupply.displayValue, "$L2G in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();