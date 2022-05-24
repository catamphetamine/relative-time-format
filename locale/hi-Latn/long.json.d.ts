import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hi-Latn';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;