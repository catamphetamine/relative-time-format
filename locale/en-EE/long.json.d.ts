import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-EE';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;