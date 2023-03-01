export const module2 = {
    addition(str1, str2) {
        return String(BigInt(str1) + BigInt(str2)).slice(0, -1);
    },

    subtraction(str1, str2) {
        return String(BigInt(str1) - BigInt(str2)).slice(0, -1);
    },

    multiplication(str1, str2) {
        return String(BigInt(str1) * BigInt(str2)).slice(0, -1);
    }
}

import {module2} from "./module2";
module2.addition("123456789123456789123456789", "987654321987654321987654321");
module2.multiplication("123456789123456789123456789", "987654321987654321987654321");
module2.subtraction("987654321987654321987654321", "123456789123456789123456789");

