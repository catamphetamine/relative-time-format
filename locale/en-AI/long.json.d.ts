import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-AI';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;