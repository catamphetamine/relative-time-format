import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lo';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;