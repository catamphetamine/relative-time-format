import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'se-FI';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;