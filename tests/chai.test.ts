import {assert, describe, expect, it} from "vitest";

function sayHello(name: string): string {
    return `Hello ${name}!`;
}

describe('sayHello', () => {
    it('should return with name', () => {
        expect(sayHello("Eko")).to.be.a('string', 'Hello Eko!');
        assert.equal(sayHello('Eko'), 'Hello Eko!');
    });
});
