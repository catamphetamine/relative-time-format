import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'it';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;