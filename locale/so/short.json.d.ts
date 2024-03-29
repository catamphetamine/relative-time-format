import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'so';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;