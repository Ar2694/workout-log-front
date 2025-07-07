export default function deepClone (data: any = {})  {
  let obj = undefined;

  if (Array.isArray(data)) {

    obj = data.reduce((acc: any, item: any) => {

      const newItem = deepClone(item);
      acc.push(newItem)

      return acc;

    }, []);

  } else {

    obj = Object.keys(data).reduce((acc: any, key: any) => {

      if (Array.isArray(data[key])) {

        acc = { ...acc, [key]: [...deepClone(data[key])] };

        return acc;

      } else {

        return { ...acc, [key]: { ...data[key] } };

      }
    }, {});

  }
  return obj;
}
