import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FJ';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;