import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CM';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;