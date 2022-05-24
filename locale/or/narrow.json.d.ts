import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'or';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;