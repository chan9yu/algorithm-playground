function firstUniqChar(s: string): number {
    const map = new Map();
    
    for (let v of s) {
        map.set(v, (map.get(v) ?? 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};