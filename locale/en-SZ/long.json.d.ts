import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SZ';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;