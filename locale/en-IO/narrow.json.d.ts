import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IO';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;