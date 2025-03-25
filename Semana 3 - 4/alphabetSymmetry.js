function solve(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return arr.map(word =>
        word
            .split("")
            .filter((c, i) => i < alphabet.length && c.toLowerCase() === alphabet[i])
            .length
    );
};