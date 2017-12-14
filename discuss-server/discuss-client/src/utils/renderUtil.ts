import { format, distanceInWordsToNow } from 'date-fns';

export enum DateFormatType {
  Datetime,
  Distance
}

export function formatDate(
  timeMillions: Date | string | number,
  formatType: DateFormatType = DateFormatType.Datetime
): string {
  switch (formatType) {
    case DateFormatType.Datetime:
      return format(timeMillions, 'YYYY.MM.DD HH.mm');

    case DateFormatType.Distance:
      return distanceInWordsToNow(timeMillions);

    default:
      return '';
  }
}
