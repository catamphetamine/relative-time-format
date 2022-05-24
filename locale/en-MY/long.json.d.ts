import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MY';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;