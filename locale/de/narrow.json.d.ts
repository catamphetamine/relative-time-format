import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'de';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;