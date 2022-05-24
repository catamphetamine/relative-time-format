import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sr';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;