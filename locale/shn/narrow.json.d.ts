import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'shn';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;