const crypto = require("crypto");

function rand(max) {
  return new Promise((resolve, reject) => {
    /*
      This can be biased in that certain values between n and n+1 may be more common (ie 5 distinct values between 1 and 1.5, 6 distinct values between 1.5 and 2)
      To minimize the impact of this I just used a lot of bytes
    */
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        reject(err);
      }

      const hex = buf.toString("hex");
      const int = parseInt(hex, 16);

      // Multipy, then divide, because I think dividing first might be an issue? I know floating point values can be imprecise and if they're imprecise because they have less distinct values between n and n+1 then this should help?
      resolve((int * max) / 0xffffffffffffffffffffffffffffffff);
    });
  });
}

module.exports = rand;
