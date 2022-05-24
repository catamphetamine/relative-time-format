import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BM';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;