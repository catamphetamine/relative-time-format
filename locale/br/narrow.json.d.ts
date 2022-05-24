import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'br';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;