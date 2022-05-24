import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'cs';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;