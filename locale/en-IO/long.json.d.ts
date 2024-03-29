import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IO';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;