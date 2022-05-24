import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ceb';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;