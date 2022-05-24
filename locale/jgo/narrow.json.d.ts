import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'jgo';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;