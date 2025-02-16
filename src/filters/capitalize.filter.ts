export class CapitalizeFilter {
    constructor() {}

    transform(input: string): string {
      return !input ? input : input.charAt(0).toUpperCase() + input.slice(1);
    }
}