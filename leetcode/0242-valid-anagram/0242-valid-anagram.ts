function isAnagram(s: string, t: string): boolean {
    const map = new Map();

    for (const v of s) {
        map.set(v, (map.get(v) ?? 0) + 1);
    }

    for (const v of t) {
        if (map.has(v)) {
            map.set(v, map.get(v) - 1);

            if (map.get(v) === 0) {
                map.delete(v);
            }
        } else {
            return false;
        }
    }

    return map.size === 0 ? true : false;
};