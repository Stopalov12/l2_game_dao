import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x38E16776B64C0dF63fedbc2Caf243ee21A725Ff5");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Allowance joystick",
        description: "This NFT will give you access to L2GameDAO!",
        image: readFileSync("scripts/assets/gaming1.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();