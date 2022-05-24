import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MU';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;