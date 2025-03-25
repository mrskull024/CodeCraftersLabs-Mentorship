function isItLetter(character) {
    const isLetter = typeof (character) === 'string' ? true : false;

    if (isLetter)
        return `'${character}' is a letter`;

    return `'${character}' is not a letter`;
}