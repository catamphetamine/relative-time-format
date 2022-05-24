import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'km';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;