import * as React from 'react';
import { formatDate, DateFormatType } from '../../utils/renderUtil';
export { DateFormatType } from '../../utils/renderUtil';

export type LabelDateProps = {
    time: Date | string | number,
    format?: DateFormatType
};

export const LabelDate = (props: LabelDateProps) => {
    return <span>{formatDate(props.time, props.format)}</span>;
};