import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tr';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;