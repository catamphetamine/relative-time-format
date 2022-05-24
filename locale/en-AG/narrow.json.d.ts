import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-AG';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;