import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ug';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;