import base32 from 'hi-base32';

function addPad(base32Str) {
    switch (base32Str.length % 8) {
        case 2: return base32Str + "======"; 
        case 4: return base32Str + "===="; 
        case 5: return base32Str + "==="; 
        case 7: return base32Str + "="; 
    }
    return base32Str;
}

function rmPad(base32Str) {
    return base32Str.replace(/=/g, '');
}

// Decodes from Base32 after adding the padding
export function decode(base32Str, asciiOnly) {
    return base32.decode.asBytes(addPad(base32Str), asciiOnly);
}

// Decodes from Base32 after adding the padding
export function decodeAsString(base32Str, asciiOnly) {
    return base32.decode(addPad(base32Str), asciiOnly);
}

// Encodes to Base32 and removes the padding
export function encode(bytes, asciiOnly) {
    return rmPad(base32.encode(bytes, asciiOnly));
}

