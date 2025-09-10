import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FR';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;