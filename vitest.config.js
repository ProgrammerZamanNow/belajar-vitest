import {defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        dir: "tests",
        globals: true,
        coverage: {
            provider: "istanbul"
        }
    }
});
