import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-AI';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;