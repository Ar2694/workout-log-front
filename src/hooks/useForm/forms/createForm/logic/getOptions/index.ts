export default function getOptions (pathString: any = "", options: any) {
    const path = Array.isArray(pathString) ? pathString : pathString.split('.');

    if (path.length === 0) {
        return Array.isArray(options) ? options[0] : options;
    }

    const [currentKey, ...remainingPath] = path;

    if (!isNaN(parseInt(currentKey)) && Array.isArray(options)) {
        return getOptions(remainingPath, { ...options[0] })
    }

    if (Array.isArray(options)) {
        return getOptions(remainingPath, { ...options[0][currentKey] })
    }

    if (!Array.isArray(options)) {
        if (Array.isArray(options[currentKey])) {
            return getOptions(remainingPath, [...options[currentKey]]);
        } else {
            return getOptions(remainingPath, typeof options[currentKey] === "object" ? { ...options[currentKey] } : options[currentKey]);
        }
    }
}