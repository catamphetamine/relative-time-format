import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ro';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;