const objectEntries = <T extends object, K extends keyof T>(obj: T) => (Object.entries(obj) as unknown) as [K, T[K]][];

export default objectEntries;
