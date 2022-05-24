import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'uk';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;