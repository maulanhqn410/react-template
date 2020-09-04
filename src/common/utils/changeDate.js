import moment from 'moment';

// sample for key country
const TIME_FORMAT = {
  EN: 'ddd, hh:mm a, D-MMM-YY',
  ID: 'ddd, HH:mm a, D-MMM-YY',
  TH: 'ddd, HH:mm a, D-MMM-YY',
  VN: 'ddd, HH:mm a, D-MMM-YY',
  BT: 'HH:mm',
  FM: 'hh:mm a, DD-MMM-YY', // Fleet Management,
  TF: 'HH:ss a, DD-MMM-YY', // 24 Hours
  FY: 'hh:mm a, DD-MMM-YYYY', // full year
  TB: 'ddd, HH:mm a,',
  DT: 'D-MMM-YY',
};

const TIME_IMMEDIATE = 'ASAP';
const TODAY = 'Today';
const TIME_NOW = Date.now();

export default function dateTimeFormat(type, value = moment().unix()) {
  return moment.unix(value).format(TIME_FORMAT[type] || TIME_FORMAT.EN);
}

export function dateTimeFormatRequestBooking(
  type,
  value,
  timeType,
  comma = true,
) {
  const dateTime = dateTimeFormat(type, value);
  const arrDateTime = dateTime.split(',');
  if (
    timeType.toLowerCase() === 'immediate' ||
    timeType.toLowerCase() === 'now'
  ) {
    return TIME_IMMEDIATE;
  }
  const checkDay = moment.unix(value).calendar();
  if (checkDay.indexOf(TODAY) === 0) {
    return comma ? `${arrDateTime[1]}, ${TODAY}` : `${arrDateTime[1]} ${TODAY}`;
  }
  return comma
    ? `${arrDateTime[1]}, ${arrDateTime[2]}`
    : `${arrDateTime[1]} ${arrDateTime[2]}`;
}

export function getCountDownTime(time, timeNow = TIME_NOW) {
  return time ? timeNow + 1000 * time : timeNow + 1000;
}

export function convertTimeStampSToMs(value) {
  return value * 1000;
}

export function convertStringToTime(value) {
  return moment.utc(value).valueOf();
}

export const convertFormatDateFnc = (
  date,
  format = 'ddd, hh:mm a, DD-MMM-YY',
) => moment(date).format(format);

