import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-KN';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;