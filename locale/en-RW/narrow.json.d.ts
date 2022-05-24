import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-RW';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;