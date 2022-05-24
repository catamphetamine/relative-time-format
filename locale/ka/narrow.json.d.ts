import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ka';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;