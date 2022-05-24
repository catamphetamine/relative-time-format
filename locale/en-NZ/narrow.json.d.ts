import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NZ';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;