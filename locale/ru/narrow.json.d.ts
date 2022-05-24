import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ru';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;