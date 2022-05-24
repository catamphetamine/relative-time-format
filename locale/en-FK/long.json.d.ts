import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FK';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;