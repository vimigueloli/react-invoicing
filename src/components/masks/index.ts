//mascara numero
export function numberMask(number: string) {
    number = number.replace(/[^0-9]/, "");
    return number;
}