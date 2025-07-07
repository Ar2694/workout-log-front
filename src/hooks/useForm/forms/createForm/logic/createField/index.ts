export default function createField(pathString: any, field: any, _fields: any = {}): any {
    const path = Array.isArray(pathString) ? pathString : pathString.split('.');
    const [currentKey, ...remainingPath] = path;

    if (path.length === 0) {
      return field;
    }

    if (Array.isArray(_fields)) {
        const newState = [..._fields];

        newState[currentKey] = createField(remainingPath, field, _fields[currentKey]);

        return newState;
    }

    if (!Array.isArray(_fields)) {
        return {
            ..._fields,
            [currentKey]: createField(remainingPath, field, _fields[currentKey])
        };
    }
}