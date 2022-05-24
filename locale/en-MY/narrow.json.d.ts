import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MY';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;