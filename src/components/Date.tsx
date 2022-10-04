import { parseISO, format } from 'date-fns';
import { FC } from 'react';

type Props = {
  dateString: string;
};

export const Date: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'yyyy年 MM月 dd日')}</time>;
};
