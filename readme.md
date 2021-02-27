# Password Generator
This is a simple password generator that uses a dictionary of 980 common words arranged randomly. It generates a version where aprox. 50% of the characters are a version of 'l33tspeak', this effectively doubles the word list. I'm not a security researcher or professional, assume this password is not suitable for real word purposes. You shouldn't use this unless you fully understand it (i'm not using it). To use this program add a second arguement with the value of "15". One of the reasons I'm not using this is because I don't fully understand how javascript generates psuedorandom numbers.

980 ^ n

## Usage
Run the program with an integer representing the number of characters. So to generate a 5 word long "password" run ```node index 5``` in the terminal.