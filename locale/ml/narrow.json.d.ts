import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ml';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;