import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'blo';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;