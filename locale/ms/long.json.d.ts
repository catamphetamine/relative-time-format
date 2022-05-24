import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ms';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;