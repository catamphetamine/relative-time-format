import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IM';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;