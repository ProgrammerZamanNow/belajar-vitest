import {expect} from "vitest";

describe('slow test', () => {
    it.concurrent('should pass', async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(1).toBe(1);
    });

    it.concurrent('should pass 2', async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        expect(1).toBe(1);
    });

    it.concurrent('should pass 3', async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        expect(1).toBe(1);
    });
});
