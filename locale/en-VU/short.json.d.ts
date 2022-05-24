import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-VU';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;