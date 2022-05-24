import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FK';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;