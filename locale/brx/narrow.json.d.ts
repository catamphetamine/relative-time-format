import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'brx';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;