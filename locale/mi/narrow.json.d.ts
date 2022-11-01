import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mi';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;