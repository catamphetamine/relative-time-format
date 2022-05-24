import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GG';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;