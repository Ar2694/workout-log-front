export default function createOption(pathString: any, option: any, _options: any = {}): any {
    const path = Array.isArray(pathString) ? pathString : pathString.split('.');
    const [currentKey, ...remainingPath] = path;

    if (path.length === 0) {
        return option;
    }

    if (Array.isArray(_options)) {
        const newState = [..._options];
        newState[currentKey] = createOption(remainingPath, option, _options[currentKey]);
        return [newState[0]];
    }

    if (!Array.isArray(_options)) {
        return {
            ..._options,
            [currentKey]: createOption(remainingPath, option, _options[currentKey])
        };
    }

}