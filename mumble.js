const accum = s => s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
