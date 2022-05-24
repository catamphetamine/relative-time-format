import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mni';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;