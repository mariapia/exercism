export const reverseString = str => {
    str = str.split("");
    str = str.reverse();
    str = str.join("");
    return str;
}