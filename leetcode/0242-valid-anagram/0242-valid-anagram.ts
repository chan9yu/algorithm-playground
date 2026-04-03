function isAnagram(s: string, t: string): boolean {
    const sH = new Map();

    for (let v of s) {
        sH.has(v) ? sH.set(v, sH.get(v) + 1) : sH.set(v, 1)
    }

    for (let v of t) {
        if (sH.has(v)) {
            sH.set(v, sH.get(v) - 1);

            if (sH.get(v) === 0) {
                sH.delete(v);
            }
        } else {
            return false;
        }
    }

    return [...sH].length ? false : true;
};