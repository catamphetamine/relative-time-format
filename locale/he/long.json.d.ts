import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'he';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;