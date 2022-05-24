import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'se-FI';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;