import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BB';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;