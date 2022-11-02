import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'eo';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;
