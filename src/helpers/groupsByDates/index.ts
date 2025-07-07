import dayjs from "dayjs";

export default function groupByDates(value: any={}) {

  const grouped = value.reduce((result: any, obj: any) => {
    const keyName = dayjs(obj["date"]).format("MMMM DD, YYYY");
    const keyIndex = result.findIndex((key: any) => {
      return Object.keys(key)[0] === keyName;
    })

    if (keyIndex === -1) {
      result.push({ [keyName]: [obj] });
    }
    else {
      result[keyIndex][keyName].push(obj)
    }
    return result;
  }, []);

  return grouped;

}