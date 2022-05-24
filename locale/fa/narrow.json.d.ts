import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fa';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;