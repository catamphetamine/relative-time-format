import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LC';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;