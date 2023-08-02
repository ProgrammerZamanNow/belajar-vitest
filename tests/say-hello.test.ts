import {describe, expect, it} from "vitest";
import {sayHello} from "../src/say-hello";

describe('Say Hello', () => {
    it('should say hello', () => {
        const result = sayHello("Eko");
        expect(result).toBe("Hello Eko");
    });
});
