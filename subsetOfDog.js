// Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function allSubstrings(input) {
    const output = [];
    const { length } = input;

    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            const substring = input.substring(i, j + 1);
            output.push(substring);
        }
    }

    return output;
}