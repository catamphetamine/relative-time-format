import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sd';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;