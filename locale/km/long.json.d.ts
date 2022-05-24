import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'km';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;