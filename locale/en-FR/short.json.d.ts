import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FR';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;