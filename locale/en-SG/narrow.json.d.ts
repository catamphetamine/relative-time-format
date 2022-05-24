import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SG';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;