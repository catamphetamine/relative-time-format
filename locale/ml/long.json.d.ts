import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ml';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;