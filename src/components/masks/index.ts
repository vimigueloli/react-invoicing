//mascara numero
export function numberMask(number: string) {
    number = number.replace(/\D+/g, "");
    return number;
}