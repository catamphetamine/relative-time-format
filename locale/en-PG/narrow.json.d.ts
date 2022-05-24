import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PG';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;