import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hu';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;