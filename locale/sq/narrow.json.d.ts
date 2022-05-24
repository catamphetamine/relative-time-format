import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sq';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;