import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'rhg';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;