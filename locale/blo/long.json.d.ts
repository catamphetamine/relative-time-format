import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'blo';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;