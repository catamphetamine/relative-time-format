import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ha';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;