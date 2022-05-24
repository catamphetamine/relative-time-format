import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TV';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;