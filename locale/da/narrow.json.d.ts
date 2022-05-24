import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'da';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;