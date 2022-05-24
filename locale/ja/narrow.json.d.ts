import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ja';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;