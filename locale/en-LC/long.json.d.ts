import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LC';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;