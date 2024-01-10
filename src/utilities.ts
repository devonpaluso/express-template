export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const toMatrix = <T>(array: T[], width: number): T[][] => array.reduce((rows, key, index) => (index % width == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, [] as any[]);