import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ga';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;