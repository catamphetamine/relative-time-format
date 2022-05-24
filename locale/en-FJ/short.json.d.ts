import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FJ';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;