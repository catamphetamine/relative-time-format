import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'af';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;