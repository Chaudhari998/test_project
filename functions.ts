
export function printMessage(message: string): void {
    console.log(message);
}

export function getType(value: any): string {
    return typeof value;
}

export function addNumbers(a: number, b: number): number {
    return a + b;
}

export function reverseString(s: string): string {
    return s.split('').reverse().join('');
}