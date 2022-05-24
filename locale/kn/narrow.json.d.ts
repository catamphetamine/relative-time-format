import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kn';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;