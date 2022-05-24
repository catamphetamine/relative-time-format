import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hsb';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;