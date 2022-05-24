import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-CH';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;