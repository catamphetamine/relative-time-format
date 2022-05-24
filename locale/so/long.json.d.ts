import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'so';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;