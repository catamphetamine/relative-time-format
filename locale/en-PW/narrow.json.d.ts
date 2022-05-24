import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PW';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;