import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mk';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;