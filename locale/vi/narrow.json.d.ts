import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'vi';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;