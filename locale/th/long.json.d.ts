import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'th';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;