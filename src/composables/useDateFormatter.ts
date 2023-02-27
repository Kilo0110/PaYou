import moment from "moment";
import { computed } from "vue";

export default function (date: number) {
  let formattedDate = moment(date).format('DD/MMM/YYYY').replace('"', "");
  return formattedDate
}
