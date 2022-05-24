import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CA';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;