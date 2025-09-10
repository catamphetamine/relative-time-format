import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FR';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;