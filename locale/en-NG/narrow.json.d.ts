import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NG';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;