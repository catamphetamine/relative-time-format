import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SL';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;