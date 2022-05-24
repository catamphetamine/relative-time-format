import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SL';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;