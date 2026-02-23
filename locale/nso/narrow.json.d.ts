import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'nso';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;