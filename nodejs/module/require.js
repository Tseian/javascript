function require(path) {
    try {
        exports.requireDepth += 1;
        return mod.require(path);
    } finally {
        exports.requireDepth -= 1;
    }
}