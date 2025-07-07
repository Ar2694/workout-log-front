import dayjs from "dayjs";

export default function getCreatedDateLabel(dateCreated: any) {
  const currentDate = dayjs();
  const date = dayjs(dateCreated);
  const seconds = currentDate.diff(date, "s");
  const minutes = currentDate.diff(date, "m");
  const hours = currentDate.diff(date, "h");
  const days = currentDate.diff(date, "d");

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return minutes < 2 ? `Created ${minutes} minute ago` : `Created ${minutes} minutes ago`;
  } else if (hours < 24) {
    return hours < 2 ? `Created ${hours} hour ago` : `Created ${hours} hours ago`;
  }
  else if (days < 8) {
    return days < 2 ? `Created ${days} day ago` : `Created ${days} days ago`;
  }
  else {
    return `Created on ${date.format("MMMM DD, YYYY")}`;
  }

}