import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'te';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;