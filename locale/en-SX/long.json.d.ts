import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SX';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;