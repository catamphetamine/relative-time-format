import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'el';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;