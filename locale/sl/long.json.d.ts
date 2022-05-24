import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sl';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;