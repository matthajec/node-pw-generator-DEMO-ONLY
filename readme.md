# Password Generator

Don't use this. I'm not an expert and I know very little about cryptography. There could very easily be errors in my code or implementation.

This is a simple "battery staple horse" style password generator. You can put in the amount of words you want and it'll generate a password for you and tell you it's entropy. To use it, just pass an integer as the first argument when running the index.js script.

I decided to remove the l33tify feature (where each word had a 50% chance of being coverted to "l33tspeak") because increasing the size of the word list only marginally improves the entropy of generated passwords whereas increasing the amount of words in a password is much more significant. Making all of the words "normal" increases the amount of words someone is reasonably able to remember.
