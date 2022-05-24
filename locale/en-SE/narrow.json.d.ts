import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SE';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;