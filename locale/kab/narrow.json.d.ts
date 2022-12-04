import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kab';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;