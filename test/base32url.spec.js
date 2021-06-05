const { ok, deepStrictEqual, strictEqual } = require("assert");
const Base32URL = require('../lib/index');

describe("Base Conversions", () => {

    it("encode example 1 - The quick brown fox... ", () => deepStrictEqual(
        Base32URL.encode("The quick brown fox jumps over the lazy dog."), 
        "KRUGKIDROVUWG2ZAMJZG653OEBTG66BANJ2W24DTEBXXMZLSEB2GQZJANRQXU6JAMRXWOLQ"));

    it("encode example 2 - Hellow", () => deepStrictEqual(
        Base32URL.encode("Hellow"), 
        "JBSWY3DPO4"));

    it("decode example 1 - The quick brown fox... ", () => deepStrictEqual(
        String.fromCharCode.apply(null, Base32URL.decode("KRUGKIDROVUWG2ZAMJZG653OEBTG66BANJ2W24DTEBXXMZLSEB2GQZJANRQXU6JAMRXWOLQ")), 
        "The quick brown fox jumps over the lazy dog."));

    it("decode example 2 - Hellow", () => deepStrictEqual(
        String.fromCharCode.apply(null, Base32URL.decode("JBSWY3DPO4")), 
        "Hellow"));

});

const LONG_BYTE_ARRAY = [120, 156, 187, 212, 226, 187, 136, 81, 141, 197, 195, 205, 124, 121, 245, 17, 125, 119, 134, 5, 145, 140, 190, 139, 217, 164, 18, 166, 48, 125, 96, 145, 74, 9, 189, 112, 192, 146, 145, 121, 33, 227, 146, 228, 178, 212, 162, 84, 67, 61, 3, 61, 131, 228, 188, 196, 220, 37, 73, 105, 121, 165, 41, 234, 142, 69, 197, 135, 119, 228, 21, 43, 232, 42, 148, 37, 230, 41, 120, 36, 230, 164, 230, 37, 165, 231, 229, 185, 21, 37, 230, 29, 94, 158, 159, 89, 172, 235, 149, 159, 152, 151, 156, 150, 87, 82, 232, 226, 24, 20, 236, 239, 23, 108, 19, 230, 232, 103, 227, 225, 232, 227, 234, 151, 156, 158, 87, 146, 235, 22, 228, 232, 231, 236, 239, 25, 108, 227, 229, 239, 232, 151, 156, 146, 159, 148, 101, 100, 96, 96, 169, 107, 96, 164, 107, 100, 145, 88, 210, 184, 42, 169, 36, 61, 211, 194, 196, 192, 212, 216, 210, 192, 192, 44, 169, 164, 36, 203, 39, 192, 200, 208, 220, 208, 210, 66, 215, 56, 169, 164, 40, 211, 200, 204, 192, 196, 208, 212, 192, 192, 32, 41, 55, 49, 197, 208, 200, 216, 40, 169, 56, 185, 66, 210, 200, 192, 200, 80, 215, 192, 68, 215, 208, 56, 196, 208, 196, 202, 200, 192, 202, 192, 64, 219, 0, 68, 38, 165, 20, 161, 203, 154, 0, 197, 13, 161, 178, 37, 201, 21, 82, 238, 238, 46, 10, 110, 69, 149, 197, 57, 135, 23, 229, 233, 40, 248, 232, 122, 164, 230, 100, 38, 231, 231, 149, 167, 166, 39, 37, 231, 39, 249, 249, 36, 101, 22, 231, 251, 102, 230, 101, 22, 151, 20, 85, 42, 228, 167, 41, 132, 133, 7, 39, 37, 103, 86, 200, 148, 22, 229, 89, 149, 150, 37, 103, 2, 77, 179, 242, 243, 177, 2, 26, 163, 111, 97, 232, 232, 232, 97, 104, 230, 24, 21, 225, 144, 171, 88, 115, 99, 217, 222, 71, 119, 85, 180, 51, 194, 11, 76, 221, 85, 36, 18, 103, 159, 250, 250, 187, 181, 168, 233, 141, 247, 158, 162, 235, 223, 60, 219, 124, 246, 9, 188, 182, 169, 88, 245, 81, 111, 71, 153, 227, 26, 93, 71, 213, 164, 8, 241, 234, 85, 31, 167, 50, 52, 247, 47, 89, 204, 52, 57, 26, 0, 43, 202, 143, 209]; 

describe("Back and Forth", () => { 
    it("encode decode long byte array", () => deepStrictEqual(Base32URL.decode(Base32URL.encode(LONG_BYTE_ARRAY)), LONG_BYTE_ARRAY));
    it("encode decode string",          () => deepStrictEqual(Base32URL.decodeAsString(Base32URL.encode("This works!")), "This works!"));
    it("encode decode string",          () => deepStrictEqual(Base32URL.decode(Base32URL.encode("This works!")), [84,104,105,115,32,119,111,114,107,115,33]));
});

const ASCII_STRING = "Organéá'dç'dé'w'sçzation%2F1832473e-2fe0-452d-abe9-3cdb9879522f/Acme$Laboratory%2C$Inc";

describe("Ascii", () => { 
    it("encode decode ascii", () => deepStrictEqual(Base32URL.decodeAsString(Base32URL.encode(ASCII_STRING)), ASCII_STRING));
    it("encode decode ascii", () => deepStrictEqual(Base32URL.decodeAsString(Base32URL.encode(ASCII_STRING, true), true), ASCII_STRING));
    it("encode decode ascii", () => deepStrictEqual(Base32URL.decodeAsString(Base32URL.encode(ASCII_STRING, false), false), ASCII_STRING));

});