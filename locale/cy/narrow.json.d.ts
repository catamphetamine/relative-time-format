import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'cy';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;