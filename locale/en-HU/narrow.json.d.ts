import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-HU';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;