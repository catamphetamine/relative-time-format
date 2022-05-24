import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tt';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;