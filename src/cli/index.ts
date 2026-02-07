import { runDbInit } from "./dbInit";

function printUsage(): void {
  console.log("Usage: npm run cli db:init");
}

const [command] = process.argv.slice(2);

switch (command) {
  case "db:init":
    runDbInit();
    break;
  default:
    printUsage();
    process.exit(1);
}
