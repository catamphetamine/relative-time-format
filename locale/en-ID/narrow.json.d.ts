import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ID';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;