import { Utils } from "./utils";

const content: string = "test";

Utils.createDocxFile("test", content);
const validate = Utils.doesDocxFileExist("test");

console.log(validate);