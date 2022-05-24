import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-AI';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;