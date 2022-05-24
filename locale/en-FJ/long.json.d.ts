import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FJ';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;