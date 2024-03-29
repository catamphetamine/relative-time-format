import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PG';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;